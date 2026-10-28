import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

export const fromBase64 = naclUtil.decodeBase64;
export const toBase64 = naclUtil.encodeBase64;
export const fromUtf8 = naclUtil.decodeUTF8;
export const toUtf8 = naclUtil.encodeUTF8;

export const validNonceLength = nacl.secretbox.nonceLength;

/**
 * Creates a cryptographically secure random nonce (24 bytes) for nacl.secretbox
 * @remarks Must be unique for each encryption operation with the same key
 * @returns 24-byte Uint8Array nonce
 */
export function createNonce(): Uint8Array {
  return nacl.randomBytes(nacl.secretbox.nonceLength);
}

/**
 * Creates a cryptographically secure random 32-byte key
 * @remarks Suitable for direct use with nacl.secretbox
 * @returns 32-byte Uint8Array secret key
 */
export function createSecretKey(): Uint8Array {
  return nacl.randomBytes(nacl.secretbox.keyLength); // keyLength = 32
}

/**
 * Generates a cryptographically secure random salt (usually 16 bytes)
 * @remarks Recommended for key derivation functions (Argon2id, scrypt, PBKDF2)
 * @param length - Number of bytes (default: 16)
 * @returns Random Uint8Array salt
 */
export function createSalt(length: number = 16): Uint8Array {
  if (length < 8) {
    throw new Error("Salt should be at least 8 bytes for security");
  }
  return nacl.randomBytes(length);
}

/**
 * Generates a cryptographically secure random value suitable for IDs, tokens, etc.
 * @param length - Number of bytes (default: 32 → 256 bits)
 * @returns Random Uint8Array
 */
export function createRandomBytes(length: number = 32): Uint8Array {
  return nacl.randomBytes(length);
}

/**
 * Encrypts a message using a secret key and a unique nonce.
 * @param message - The message to encrypt (string or Uint8Array)
 * @param key - The secret key (Uint8Array)
 * @param nonce - A unique random nonce (Uint8Array)
 * @returns Encrypted ciphertext (Uint8Array)
 */
export function encryptToCipherText(
  message: Uint8Array,
  nonce: Uint8Array,
  key: Uint8Array
): Uint8Array {
  return nacl.secretbox(
    toUint8Array(message),
    toUint8Array(nonce),
    toUint8Array(key)
  );
}

/**
 * Decrypts a ciphertext using the secret key and nonce.
 * @param ciphertext - The encrypted message (Uint8Array)
 * @param key - The secret key (Uint8Array)
 * @param nonce - The nonce used during encryption (Uint8Array)
 * @returns Decrypted message as Uint8Array
 * @throws Error if decryption fails (invalid key/nonce/ciphertext)
 */
export function decryptFromCipherText(
  ciphertext: Uint8Array,
  nonce: Uint8Array,
  key: Uint8Array
): Uint8Array {
  const data = nacl.secretbox.open(
    toUint8Array(ciphertext),
    toUint8Array(nonce),
    toUint8Array(key)
  );

  if (!data) {
    throw new Error("Decryption failed: invalid key, nonce, or ciphertext");
  }

  return data;
}

export function toUint8Array(
  input: Uint8Array | Buffer | ArrayBuffer
): Uint8Array {
  return new Uint8Array(Buffer.isBuffer(input) ? input : input);
}
