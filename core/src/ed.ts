// packages/core/src/ed.ts
import {
  createNonce,
  decryptFromCipherText,
  encryptToCipherText,
  fromBase64,
  fromUtf8,
  toBase64,
  toUtf8,
  validNonceLength,
} from "./crypto/index";
import { deriveKeyFromSecret } from "./crypto/kdf";
import { deflateIfSmaller, inflateBounded } from "./compression/deflate";
import { DecryptionError, KeyError } from "./types";

/**
 * Encrypted payload format (type information is now hidden inside ciphertext)
 */
export interface EncryptedData {
  /** Base64-encoded ciphertext (includes 1-byte type prefix + actual data) */
  data: string;
  /** Base64-encoded nonce (24 bytes) */
  nonce: string;
  /** Present when the encrypted plaintext was reduced with zlib-compatible Deflate. */
  compression?: "deflate";
  /** Optional version field (for future breaking changes) */
  v?: number;
}

export interface EncryptOptions {
  /** Compress the typed plaintext before encryption when Deflate makes it smaller. */
  compression?: "deflate";
}

// Internal type mapping (single byte — very compact)
const TYPE_BYTES: Record<"string" | "json" | "bytes", number> = {
  string: 0x01,
  json: 0x02,
  bytes: 0x03,
};

const TYPE_FROM_BYTE: Record<number, "string" | "json" | "bytes"> = {
  0x01: "string",
  0x02: "json",
  0x03: "bytes",
};

/**
 * Encrypts a value using XSalsa20 + Poly1305 (secretbox).
 * The type hint is encrypted together with the data (not exposed in plaintext).
 *
 * @param value - Value to encrypt (string | object | number | boolean | null | Uint8Array | ArrayBuffer | Buffer)
 * @param key - 32-byte secret key
 * @throws {KeyError}
 */
export function encrypt(
  value: unknown,
  secretKey: unknown,
  options: EncryptOptions = {},
): EncryptedData {
  const key = deriveKeyFromSecret(secretKey);

  if (key.length !== 32) {
    throw new KeyError(KeyError.CODES.INVALID_LENGTH);
  }

  const nonce = createNonce();

  let typeByte: number;
  let message: Uint8Array;

  if (typeof value === "string") {
    typeByte = TYPE_BYTES.string;
    message = fromUtf8(value);
  } else if (
    value instanceof Uint8Array ||
    value instanceof ArrayBuffer ||
    (value as any)?.constructor?.name === "Buffer"
  ) {
    typeByte = TYPE_BYTES.bytes;
    message =
      value instanceof Uint8Array
        ? value
        : new Uint8Array(value as ArrayBuffer);
  } else {
    // JSON fallback for objects, arrays, numbers, booleans, null
    typeByte = TYPE_BYTES.json;
    message = fromUtf8(JSON.stringify(value));
  }

  // Prepend type byte to message
  const fullMessage = new Uint8Array(1 + message.length);
  fullMessage.set([typeByte], 0);
  fullMessage.set(message, 1);

  const compressed = options.compression === "deflate"
    ? deflateIfSmaller(fullMessage)
    : undefined;
  const ciphertext = encryptToCipherText(compressed?.bytes ?? fullMessage, nonce, key);

  return {
    data: toBase64(ciphertext),
    nonce: toBase64(nonce),
    ...(compressed ? { compression: compressed.compression } : {}),
  };
}

/**
 * Decrypts payload created by encrypt()
 * Reconstructs the original value using the embedded type information.
 *
 * @param payload - Encrypted data object
 * @param key - 32-byte secret key
 * @returns Original value (string | object | number | boolean | null | Uint8Array)
 * @throws {DecryptionError|KeyError|CryptoError}
 */
export function decrypt<T = unknown>(
  payload: EncryptedData,
  secretKey: unknown
): T {
  // Basic structure validation
  if (!payload?.data || !payload?.nonce) {
    throw new DecryptionError(DecryptionError.CODES.MISSING_FIELDS, {
      receivedKeys: Object.keys(payload ?? {}),
    });
  }

  // Conservative DoS protection (~750KB base64 → ~560KB plaintext)
  if (payload.data.length > 1_000_000) {
    throw new DecryptionError(DecryptionError.CODES.PAYLOAD_TOO_LARGE);
  }

  const key = deriveKeyFromSecret(secretKey);

  if (key.length !== 32) {
    throw new KeyError(KeyError.CODES.INVALID_LENGTH);
  }

  let nonceBytes: Uint8Array;
  let ciphertext: Uint8Array;

  try {
    nonceBytes = fromBase64(payload.nonce);
  } catch {
    throw new DecryptionError(DecryptionError.CODES.INVALID_BASE64_NONCE);
  }

  try {
    ciphertext = fromBase64(payload.data);
  } catch {
    throw new DecryptionError(DecryptionError.CODES.INVALID_BASE64_DATA);
  }

  if (nonceBytes.length !== validNonceLength) {
    throw new DecryptionError(DecryptionError.CODES.INVALID_NONCE_LENGTH, {
      expected: validNonceLength,
      received: nonceBytes.length,
    });
  }

  let decryptedFull = decryptFromCipherText(ciphertext, nonceBytes, key);
  if (!decryptedFull || decryptedFull.length === 0) {
    throw new DecryptionError(DecryptionError.CODES.WRONG_KEY_OR_TAMPERED);
  }

  if (payload.compression !== undefined) {
    if (payload.compression !== "deflate") {
      throw new DecryptionError(DecryptionError.CODES.INVALID_COMPRESSED_DATA);
    }
    try {
      decryptedFull = inflateBounded(decryptedFull);
    } catch (error) {
      if (error instanceof RangeError) {
        throw new DecryptionError(DecryptionError.CODES.PAYLOAD_TOO_LARGE);
      }
      throw new DecryptionError(DecryptionError.CODES.INVALID_COMPRESSED_DATA);
    }
  }

  const typeByte = decryptedFull[0];
  const payloadBytes = decryptedFull.subarray(1);

  const type = TYPE_FROM_BYTE[typeByte];

  if (type === undefined) {
    throw new DecryptionError(DecryptionError.CODES.UNKNOWN_TYPE, {
      typeByte: `0x${typeByte.toString(16).padStart(2, "0")}`,
    });
  }

  switch (type) {
    case "string":
      return toUtf8(payloadBytes) as unknown as T;
    case "bytes":
      return payloadBytes as unknown as T;
    case "json":
      try {
        return JSON.parse(toUtf8(payloadBytes)) as T;
      } catch {
        throw new DecryptionError(DecryptionError.CODES.NOT_JSON, {
          preview: toUtf8(payloadBytes).slice(0, 200) + "...",
        });
      }
  }
}

// Convenience exports (very common pattern)
export { encrypt as smartEncrypt, decrypt as smartDecrypt };
