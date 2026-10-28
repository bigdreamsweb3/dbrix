import { describe, expect, it } from "vitest";
import { decodeLedgerSlots, encodeToLedgerSlots } from "../../ledger/src";
import { readMemoV1 } from "../src/client/readMemoV1";
import { sendMemoV1 } from "../src/client/sendMemoV1";
import { loadSignerFromEnv } from "./helpers/loadSigner";

const enabled = process.env.DBRIX_RUN_SOLANA_MEMO_TEST === "1";
const rpcUrl = process.env.DBRIX_SOLANA_RPC;

describe("@dbrix/solana – Memo v1 transport", () => {
  const devnetTest = enabled ? it : it.skip;

  devnetTest("uploads Ledger slots as Memo data and reads the same bytes back", async () => {
    if (!rpcUrl) throw new Error("Set DBRIX_SOLANA_RPC to the RPC endpoint you want this test to use.");
    const input = new TextEncoder().encode(
      process.env.DBRIX_SOLANA_MEMO_TEXT ?? "DBrix Solana Memo v1 test",
    );
    const slots = encodeToLedgerSlots(input);
    const memoPayload = slots.join("").replace(/=+$/g, "");
    console.info("[Solana Memo input]", new TextDecoder().decode(input));
    console.info("[Ledger slots uploaded by Solana]", JSON.stringify(slots, null, 2));
    console.info("[Memo instruction payload]", memoPayload);

    const { keypair, signer } = await loadSignerFromEnv();
    console.info(`[Solana signer] ${keypair.publicKey.toBase58()}`);
    const signature = await sendMemoV1(memoPayload, { payerSigner: signer, rpcUrl });
    console.info(`[Solana transaction confirmed] ${signature}`);

    const fetched = await readMemoV1(signature, { rpcUrl });
    const recoveredSlots = fetched.memoPayload.match(/.{1,32}/g) ?? [];
    const recoveredBytes = decodeLedgerSlots(recoveredSlots);
    console.info("[Solana RPC result]", JSON.stringify({
      signature: fetched.signature,
      rpcUrl: fetched.rpcUrl,
      slot: fetched.slot,
      feeLamports: fetched.feeLamports,
      memoPayload: fetched.memoPayload,
      recoveredSlots,
      recoveredText: new TextDecoder().decode(recoveredBytes),
    }, null, 2));
    expect(fetched.memoPayload).toBe(memoPayload);
    expect(recoveredBytes).toEqual(input);
  });

  if (!enabled) {
    console.info("Solana Memo submission skipped. Set DBRIX_RUN_SOLANA_MEMO_TEST=1 and DBRIX_SOLANA_RPC to submit it.");
  }
});
