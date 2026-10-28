export interface EncryptedPayload {
  encrypted: string;
  iv: string;
}

/**
 * **CRITICAL SECURITY WARNING**
 *
 * This library uses a raw 32-byte secret key directly with NaCl secretbox.
 * In any real application with actual users, **NEVER** use a raw key!
 *
 * ALWAYS derive the encryption key from a user password/master key using
 * a strong, memory-hard KDF:
 *   - Argon2id (strongly recommended in 2025–2026)
 *   - scrypt
 *   - PBKDF2-HMAC-SHA256 with ≥600,000 iterations
 *
 * Example (pseudo-code):
 * ```ts
 * const salt = crypto.randomBytes(16);
 * const derivedKey = await argon2id(password, salt, { t: 3, m: 64*1024, p: 4 });
 * ```
 */
export class CryptoError extends Error {
  constructor(
    public readonly code: string,
    message?: string,
    public readonly cause?: unknown,
    public readonly context?: Record<string, unknown>
  ) {
    super(message ?? code);
    this.name = "CryptoError";
  }
}

export class DecryptionError extends CryptoError {
  static readonly CODES = {
    WRONG_KEY_OR_TAMPERED: "WRONG_KEY_OR_TAMPERED",
    INVALID_NONCE_LENGTH: "INVALID_NONCE_LENGTH",
    INVALID_BASE64_DATA: "INVALID_BASE64_DATA",
    INVALID_BASE64_NONCE: "INVALID_BASE64_NONCE",
    MISSING_FIELDS: "MISSING_FIELDS",
    NOT_JSON: "NOT_JSON",
    PAYLOAD_TOO_LARGE: "PAYLOAD_TOO_LARGE",
    UNKNOWN_TYPE: "UNKNOWN_TYPE",
    MALFORMED_TYPE: "MALFORMED_TYPE",
    INVALID_COMPRESSED_DATA: "INVALID_COMPRESSED_DATA",
  } as const;

  constructor(
    code: (typeof DecryptionError.CODES)[keyof typeof DecryptionError.CODES],
    context?: Record<string, unknown>
  ) {
    super(code, undefined, undefined, context);
    this.name = "DecryptionError";
  }
}

export class KeyError extends CryptoError {
  static readonly CODES = {
    INVALID_LENGTH: "INVALID_KEY_LENGTH",
    INVALID_FORMAT: "INVALID_KEY_FORMAT",
    EMPTY_KEY: "EMPTY_KEY",
  } as const;

  constructor(
    code: (typeof KeyError.CODES)[keyof typeof KeyError.CODES],
    message?: string,
    cause?: unknown,
    context?: Record<string, unknown>
  ) {
    super(code, message ?? `Invalid key: ${code}`, cause, context);
    this.name = "KeyError";
  }
}
