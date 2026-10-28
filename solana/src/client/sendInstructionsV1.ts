import {
  AccountRole,
  address,
  addSignersToTransactionMessage,
  appendTransactionMessageInstructions,
  assertIsTransactionWithBlockhashLifetime,
  assertIsTransactionWithinSizeLimit,
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  createTransactionMessage,
  getSignatureFromTransaction,
  getTransactionEncoder,
  pipe,
  sendAndConfirmTransactionFactory,
  setTransactionMessageConfig,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionMessageWithSigners,
  type TransactionPartialSigner,
  type TransactionSigner,
  type Instruction,
} from "@solana/kit";
import type { TransactionInstruction } from "@solana/web3.js";

const MAX_COMPUTE_UNIT_LIMIT = 1_400_000;
const MAX_LOADED_ACCOUNTS_DATA_SIZE = 64 * 1024 * 1024;
const MAX_V1_TRANSACTION_BYTES = 4_096;

export interface SendInstructionsV1Options {
  /** Fee payer and one of the transaction signers. */
  payerSigner: TransactionPartialSigner;
  /** Other local or remote signers required by instruction account metas. */
  additionalSigners?: readonly TransactionSigner[];
  /** Caller-selected Solana JSON-RPC endpoint. The package has no cluster default. */
  rpcUrl: string;
}

function websocketUrl(rpcUrl: string): string {
  const url = new URL(rpcUrl);
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  return url.toString();
}

type V1Instruction = Instruction | TransactionInstruction;

function toKitInstruction(instruction: V1Instruction): Instruction {
  if (!("programId" in instruction)) return instruction;
  return {
    programAddress: address(instruction.programId.toBase58()),
    accounts: instruction.keys.map((key) => ({
      address: address(key.pubkey.toBase58()),
      role: key.isSigner
        ? key.isWritable ? AccountRole.WRITABLE_SIGNER : AccountRole.READONLY_SIGNER
        : key.isWritable ? AccountRole.WRITABLE : AccountRole.READONLY,
    })),
    data: Uint8Array.from(instruction.data),
  };
}

/** Sends caller-built Solana instructions as one signed and confirmed v1 transaction. */
export async function sendInstructionsV1(
  instructions: readonly V1Instruction[],
  options: SendInstructionsV1Options,
): Promise<string> {
  if (instructions.length === 0) throw new Error("At least one Solana instruction is required.");
  if (!options.rpcUrl) throw new Error("A Solana RPC URL must be supplied by the caller.");

  const rpc = createSolanaRpc(options.rpcUrl);
  const rpcSubscriptions = createSolanaRpcSubscriptions(websocketUrl(options.rpcUrl));
  const { value: latestBlockhash } = await rpc
    .getLatestBlockhash({ commitment: "confirmed" })
    .send();
  const signers: TransactionSigner[] = [options.payerSigner, ...(options.additionalSigners ?? [])];
  const message = pipe(
    createTransactionMessage({ version: 1 }),
    (tx) => setTransactionMessageFeePayerSigner(options.payerSigner, tx),
    (tx) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, tx),
    (tx) => appendTransactionMessageInstructions(instructions.map(toKitInstruction), tx),
    (tx) => addSignersToTransactionMessage(signers, tx),
    (tx) => setTransactionMessageConfig({
      computeUnitLimit: MAX_COMPUTE_UNIT_LIMIT,
      loadedAccountsDataSizeLimit: MAX_LOADED_ACCOUNTS_DATA_SIZE,
    }, tx),
  );

  const signedTransaction = await signTransactionMessageWithSigners(message);
  assertIsTransactionWithBlockhashLifetime(signedTransaction);
  assertIsTransactionWithinSizeLimit(signedTransaction);
  const wire = getTransactionEncoder().encode(signedTransaction);
  if (wire.length > MAX_V1_TRANSACTION_BYTES) {
    throw new Error(`Solana v1 transaction is ${wire.length} bytes; maximum is ${MAX_V1_TRANSACTION_BYTES}.`);
  }

  console.info(`Solana v1 transaction built: ${wire.length}/${MAX_V1_TRANSACTION_BYTES} bytes.`);
  const sendAndConfirm = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions });
  await sendAndConfirm(signedTransaction, { commitment: "confirmed" });
  const signature = getSignatureFromTransaction(signedTransaction);
  console.info(`Solana v1 transaction confirmed: ${signature}`);
  return signature;
}
