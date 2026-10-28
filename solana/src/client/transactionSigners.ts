import {
  address,
  createKeyPairSignerFromBytes,
  type SignatureDictionary,
  type SignatureBytes,
  type Transaction,
  type TransactionPartialSigner,
} from "@solana/kit";

/** Creates a Kit local signer from a Solana JSON keypair's 64-byte secret key. */
export async function createKeyPairTransactionSigner(
  secretKey: Uint8Array,
): Promise<TransactionPartialSigner> {
  if (secretKey.length !== 64) throw new Error("Solana keypair secret key must contain 64 bytes.");
  return createKeyPairSignerFromBytes(secretKey);
}

/** Adapts a remote message-signing service to the partial-signer contract used by v1 sends. */
export function createRemoteTransactionSigner(
  publicKey: string,
  signMessage: (messageBytes: Uint8Array) => Promise<Uint8Array>,
): TransactionPartialSigner {
  const signerAddress = address(publicKey);
  return {
    address: signerAddress,
    async signTransactions(transactions: readonly Transaction[]): Promise<readonly SignatureDictionary[]> {
      return Promise.all(transactions.map(async (transaction) => {
        const signature = await signMessage(Uint8Array.from(transaction.messageBytes));
        if (!(signature instanceof Uint8Array) || signature.length !== 64) {
          throw new Error("Remote Solana signer must return a 64-byte Ed25519 signature.");
        }
        return { [signerAddress]: signature as SignatureBytes };
      }));
    },
  };
}
