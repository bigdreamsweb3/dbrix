// solana/key_helpers.ts

import nacl from "tweetnacl";

/**
 * Deterministically derives a 32-byte PDK
 * from identity secret + salt
 */
export function derivePdk(
  salt: Uint8Array,
  identitySecret: Uint8Array
): Uint8Array {
  const secretHash = nacl.hash(identitySecret);
  const entropy = secretHash.slice(0, 32);

  const combined = new Uint8Array(salt.length + entropy.length);
  combined.set(salt, 0);
  combined.set(entropy, salt.length);

  return nacl.hash(combined).slice(0, 32);
}

/**
 * Normalizes ANY input into a 32-byte secret key for nacl.secretbox.
 *
 * Accepted inputs:
 * - Uint8Array / Buffer (≥32 bytes)
 * - Base64 string
 * - Hex string
 * - Solana Keypair
 *
 * Throws if input is invalid or too short.
 */
export function deriveKeyFromSecret(input: unknown): Uint8Array {
  let bytes: Uint8Array;

  // ── Buffer (Node.js)
  if (Buffer.isBuffer(input)) {
    bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
  }

  // ── Uint8Array
  else if (input instanceof Uint8Array) {
    bytes = input;
  }

  // ── Solana Keypair (64-byte secretKey)
  else if (
    typeof input === "object" &&
    input !== null &&
    "secretKey" in input &&
    input.secretKey instanceof Uint8Array
  ) {
    bytes = input.secretKey;
  }

  // ── Base64 string
  else if (typeof input === "string") {
    const clean = input.trim();
    if (!clean) {
      throw new Error("Secret key string is empty");
    }

    try {
      // base64 OR hex autodetect
      if (/^[0-9a-fA-F]+$/.test(clean)) {
        bytes = new Uint8Array(Buffer.from(clean, "hex"));
      } else {
        bytes = new Uint8Array(Buffer.from(clean, "base64"));
      }
    } catch {
      throw new Error("Invalid secret key string encoding");
    }
  }

  // ── Unsupported type
  else {
    throw new Error(
      `Unsupported secret key type: ${Object.prototype.toString.call(input)}`
    );
  }

  // ── Length enforcement (NaCl secretbox requires 32 bytes)
  if (bytes.length < 32) {
    throw new Error(`Secret key too short: ${bytes.length} bytes (need ≥32)`);
  }

  // Always return EXACTLY 32 bytes as Uint8Array
  return new Uint8Array(bytes.slice(0, 32));
}
