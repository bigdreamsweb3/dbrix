import { describe, expect, it } from "vitest";
import { decrypt, encrypt } from "../src";
import { CORE_TEST_ENCRYPTION_KEY } from "./keys.test";
import { TCAP_CREDIT_RECORD } from "./fixtures/tcap-credit-record";

describe("@dbrix/core – encryption", () => {
  it("encrypts and decrypts the configured TCAP test record", () => {
    const key = new Uint8Array(CORE_TEST_ENCRYPTION_KEY);
    console.info("[Core input]", JSON.stringify(TCAP_CREDIT_RECORD, null, 2));

    const encryptedEnvelope = encrypt(TCAP_CREDIT_RECORD, key);
    console.info("[Core encrypted envelope]", JSON.stringify({
      data: encryptedEnvelope.data,
      nonce: encryptedEnvelope.nonce,
      ciphertextBase64Length: encryptedEnvelope.data.length,
    }, null, 2));

    const decryptedRecord = decrypt<typeof TCAP_CREDIT_RECORD>(encryptedEnvelope, key);
    console.info("[Core decrypted result]", JSON.stringify(decryptedRecord, null, 2));
    expect(decryptedRecord).toEqual(TCAP_CREDIT_RECORD);
  });

  it("uses lossless Deflate when it shrinks the encrypted record", () => {
    const key = new Uint8Array(CORE_TEST_ENCRYPTION_KEY);
    const plainEnvelope = encrypt(TCAP_CREDIT_RECORD, key);
    const compressedEnvelope = encrypt(TCAP_CREDIT_RECORD, key, { compression: "deflate" });

    expect(compressedEnvelope.compression).toBe("deflate");
    expect(JSON.stringify(compressedEnvelope).length).toBeLessThan(
      JSON.stringify(plainEnvelope).length,
    );
    expect(decrypt<typeof TCAP_CREDIT_RECORD>(compressedEnvelope, key)).toEqual(
      TCAP_CREDIT_RECORD,
    );
  });

  it("keeps incompressible bytes uncompressed and lossless", () => {
    const key = new Uint8Array(CORE_TEST_ENCRYPTION_KEY);
    const bytes = crypto.getRandomValues(new Uint8Array(256));
    const envelope = encrypt(bytes, key, { compression: "deflate" });

    expect(envelope.compression).toBeUndefined();
    expect(decrypt<Uint8Array>(envelope, key)).toEqual(bytes);
  });
});
