import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { decrypt, encrypt } from "../core/src";
import { CORE_TEST_ENCRYPTION_KEY } from "../core/test/keys.test";
import { TCAP_CREDIT_RECORD } from "../core/test/fixtures/tcap-credit-record";
import { decodeLedgerSlots, encodeToLedgerSlots } from "../ledger/src";
import { readMemoV1 } from "../solana/src/client/readMemoV1";
import { sendMemoV1 } from "../solana/src/client/sendMemoV1";
import { loadSignerFromEnv } from "../solana/test/helpers/loadSigner";

const enabled = process.env.DBRIX_RUN_DEVNET_ROUNDTRIP === "1";

async function loadRecord(): Promise<unknown> {
  const path = process.env.DBRIX_TEST_PAYLOAD;
  return path
    ? JSON.parse(await readFile(resolve(path), "utf8"))
    : TCAP_CREDIT_RECORD;
}

function coreEncryptionKey(): Uint8Array {
  return new Uint8Array(CORE_TEST_ENCRYPTION_KEY);
}

describe("DBrix full pipeline – Core → Ledger → Solana → Ledger → Core", () => {
  it("logs and verifies the local Core and Ledger stages using Core test data", async () => {
    const original = await loadRecord();
    const key = coreEncryptionKey();
    console.info("[Core input record]", JSON.stringify(original, null, 2));
    if (original && typeof original === "object") {
      const record = original as Record<string, unknown>;
      for (const field of ["authorizationDigest", "previousCommitment", "newCommitment", "policyCommitment", "gpruScopeCommitment", "nullifier", "dnaKeyCommitment"]) {
        expect(record[field]).toMatch(/^[0-9a-f]{64}$/);
      }
      expect(new Set([record.authorizationDigest, record.previousCommitment, record.newCommitment, record.policyCommitment, record.gpruScopeCommitment, record.nullifier, record.dnaKeyCommitment]).size).toBe(7);
    }

    const plainEnvelope = encrypt(original, key);
    const plainEnvelopeBytes = new TextEncoder().encode(JSON.stringify(plainEnvelope));
    const plainMemoBytes = new TextEncoder().encode(encodeToLedgerSlots(plainEnvelopeBytes).join("").replace(/=+$/g, ""));
    const encryptedEnvelope = encrypt(original, key, { compression: "deflate" });
    const envelopeBytes = new TextEncoder().encode(JSON.stringify(encryptedEnvelope));
    const memoBytes = new TextEncoder().encode(encodeToLedgerSlots(envelopeBytes).join("").replace(/=+$/g, ""));
    console.info("[Core encrypted envelope]", JSON.stringify(encryptedEnvelope, null, 2));
    const savedPercent = ((1 - envelopeBytes.length / plainEnvelopeBytes.length) * 100).toFixed(1);
    const memoSavedPercent = ((1 - memoBytes.length / plainMemoBytes.length) * 100).toFixed(1);
    console.info(`[Core envelope size] plain=${plainEnvelopeBytes.length} bytes; compressed=${envelopeBytes.length} bytes; saved=${savedPercent}%.`);
    console.info(`[Ledger Memo payload size] plain=${plainMemoBytes.length} bytes; compressed=${memoBytes.length} bytes; saved=${memoSavedPercent}%.`);

    const slots = encodeToLedgerSlots(envelopeBytes);
    const memoPayload = slots.join("").replace(/=+$/g, "");
    console.info("[Ledger Base64URL slots]", JSON.stringify(slots, null, 2));
    console.info(`[Ledger Memo payload] ${memoPayload}`);

    const restoredEnvelopeBytes = decodeLedgerSlots(slots);
    expect(restoredEnvelopeBytes).toEqual(envelopeBytes);
    const restoredEnvelope = JSON.parse(new TextDecoder().decode(restoredEnvelopeBytes));
    const decrypted = decrypt(restoredEnvelope as typeof encryptedEnvelope, key);
    console.info("[Core decrypted result]", JSON.stringify(decrypted, null, 2));
    expect(decrypted).toEqual(original);
    console.info("[Local round trip] PASS: Core data survived Ledger encoding and decoded correctly.");
  });

  const devnetTest = enabled ? it : it.skip;
  devnetTest("submits through Solana, reads from RPC, and decrypts the recovered Core data", async () => {
    const original = await loadRecord();
    const key = coreEncryptionKey();
    const rpcUrl = process.env.DBRIX_SOLANA_RPC;
    if (!rpcUrl) throw new Error("Set DBRIX_SOLANA_RPC to the RPC endpoint you want this test to use.");
    let signature = process.env.DBRIX_TRANSACTION_SIGNATURE;
    let expectedEnvelopeBytes: Uint8Array | undefined;
    let expectedMemoPayload: string | undefined;

    if (signature) {
      console.info(`[1/6 Solana read] Reusing confirmed signature ${signature}; no transaction will be sent.`);
    } else {
      const { keypair, signer } = await loadSignerFromEnv();
      console.info("[1/6 Core encrypt]", JSON.stringify(original, null, 2));
      const encryptedEnvelope = encrypt(original, key, { compression: "deflate" });
      expectedEnvelopeBytes = new TextEncoder().encode(JSON.stringify(encryptedEnvelope));
      console.info("[1/6 Core encrypted envelope]", JSON.stringify(encryptedEnvelope, null, 2));

      console.info("[2/6 Ledger encode] Building Base64URL slots from the encrypted envelope.");
      const slots = encodeToLedgerSlots(expectedEnvelopeBytes);
      const memoPayload = slots.join("").replace(/=+$/g, "");
      expectedMemoPayload = memoPayload;
      console.info("[2/6 Ledger slots]", JSON.stringify(slots, null, 2));
      console.info(`[2/6 Memo data] ${memoPayload}`);

      console.info(`[3/6 Solana send] RPC=${rpcUrl}; signer=${keypair.publicKey.toBase58()}`);
      signature = await sendMemoV1(memoPayload, { payerSigner: signer, rpcUrl });
      console.info(`[3/6 Solana confirmed signature] ${signature}`);
    }
    const confirmedSignature = signature;
    if (!confirmedSignature) throw new Error("A confirmed transaction signature is required for readback.");

    console.info("[4/6 Solana read] Fetching the confirmed Memo instruction.");
    const fetched = await readMemoV1(confirmedSignature, { rpcUrl });
    console.info("[4/6 Solana RPC result]", JSON.stringify(fetched, null, 2));
    if (expectedMemoPayload) expect(fetched.memoPayload).toBe(expectedMemoPayload);

    console.info("[5/6 Ledger decode] Rebuilding envelope bytes from the on-chain memo.");
    const recoveredSlots = fetched.memoPayload.match(/.{1,32}/g) ?? [];
    const recoveredEnvelopeBytes = decodeLedgerSlots(recoveredSlots);
    console.info(`[5/6 Ledger recovered envelope] ${recoveredEnvelopeBytes.length} bytes.`);
    const recoveredEnvelope = JSON.parse(new TextDecoder().decode(recoveredEnvelopeBytes));
    if (expectedEnvelopeBytes) expect(recoveredEnvelopeBytes).toEqual(expectedEnvelopeBytes);

    console.info("[6/6 Core decrypt] Decrypting the recovered on-chain envelope.");
    const decrypted = decrypt(recoveredEnvelope as Parameters<typeof decrypt>[0], key);
    console.info("[6/6 Core decrypted result]", JSON.stringify(decrypted, null, 2));
    expect(decrypted).toEqual(original);
    console.info("[Full DBrix round trip] PASS: on-chain data decrypted to the original Core record.");
  }, 180_000);

  if (!enabled) {
    console.info("Devnet portion skipped. Set DBRIX_RUN_DEVNET_ROUNDTRIP=1, DBRIX_SOLANA_RPC, and DBRIX_SIGNER_KEYPAIR to run it.");
  }
});
