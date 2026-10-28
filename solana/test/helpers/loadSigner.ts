import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Keypair } from "@solana/web3.js";
import { createKeyPairSignerFromBytes } from "@solana/kit";

export async function loadSignerFromEnv() {
  const keypairPath = process.env.DBRIX_SIGNER_KEYPAIR;
  if (!keypairPath) {
    throw new Error("Set DBRIX_SIGNER_KEYPAIR to the Solana signer keypair JSON path.");
  }
  const encoded = JSON.parse(await readFile(resolve(keypairPath), "utf8"));
  if (!Array.isArray(encoded) || encoded.length !== 64 || encoded.some(
    (byte) => !Number.isInteger(byte) || byte < 0 || byte > 255,
  )) {
    throw new Error("Signer keypair JSON must contain a 64-byte secret-key array.");
  }
  const secretKey = Uint8Array.from(encoded);
  return {
    keypair: Keypair.fromSecretKey(secretKey),
    signer: await createKeyPairSignerFromBytes(secretKey),
  };
}
