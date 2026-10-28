import { createSecretKey, decrypt, encrypt } from "../src";
import { decodeLedgerSlots, encodeToLedgerSlots } from "../../ledger/src";
import { TCAP_CREDIT_RECORD } from "./fixtures/tcap-credit-record";

function runTcapLedgerDemo() {
  const key = createSecretKey();
  const encrypted = encrypt(TCAP_CREDIT_RECORD, key, { compression: "deflate" });

  // Ledger carries the serialized encrypted envelope as bytes. Base64URL slots
  // concatenate to the UTF-8 memo payload for a later Memo instruction.
  const envelopeBytes = new TextEncoder().encode(JSON.stringify(encrypted));
  const slots = encodeToLedgerSlots(envelopeBytes);
  const memoPayload = slots.join("").replace(/=+$/g, "");

  const reconstructedEnvelopeBytes = decodeLedgerSlots(slots);
  const reconstructedEnvelope = JSON.parse(
    new TextDecoder().decode(reconstructedEnvelopeBytes),
  );
  const decryptedRecord = decrypt<typeof TCAP_CREDIT_RECORD>(reconstructedEnvelope, key);

  console.log(JSON.stringify({
    plaintextRecord: TCAP_CREDIT_RECORD,
    encryptedEnvelope: encrypted,
    encryptedEnvelopeByteLength: envelopeBytes.length,
    ledgerEncoding: "base64url",
    ledgerSlotCount: slots.length,
    slots,
    memoPayload,
    memoInstructionByteLength: Buffer.byteLength(memoPayload, "utf-8"),
    reconstructedRecord: decryptedRecord,
    roundTripVerified: JSON.stringify(decryptedRecord) === JSON.stringify(TCAP_CREDIT_RECORD),
  }, null, 2));
}

runTcapLedgerDemo();
