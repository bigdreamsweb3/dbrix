import { Keypair } from "@solana/web3.js";
import { KeyError } from "../types";
import bs58 from "bs58";

/**
 * Normalizes input to a valid Solana Keypair.
 * Accepts: string (base58), Uint8Array (32/64 bytes), Keypair object, or anything else (will throw).
 */
export function normalizeSolanaKey(input: unknown): Keypair {
  // Early exit if already correct type
  if (input instanceof Keypair) {
    return input;
  }

  let bytes: Uint8Array;

  if (typeof input === "string") {
    const clean = input.trim();
    if (!clean) {
      throw new KeyError("EMPTY_KEY", "Solana key input is empty");
    }

    try {
      bytes = bs58.decode(clean);
    } catch (err) {
      throw new KeyError(
        KeyError.CODES.INVALID_FORMAT,
        `Invalid Base58 Solana key: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  } else if (input instanceof Uint8Array) {
    bytes = input;
  } else {
    throw new KeyError(
      KeyError.CODES.INVALID_FORMAT,
      `Unsupported key type: ${typeof input}. ` +
        `Expected: string (base58), Uint8Array, or Keypair`
    );
  }

  // Length validation
  switch (bytes.length) {
    case 64:
      return Keypair.fromSecretKey(bytes);
    case 32:
      return Keypair.fromSeed(bytes);
    default:
      throw new KeyError(
        KeyError.CODES.INVALID_LENGTH,
        `Invalid Solana key length: ${bytes.length} bytes. ` +
          `Expected 32 (seed) or 64 (full secret key)`
      );
  }
}
