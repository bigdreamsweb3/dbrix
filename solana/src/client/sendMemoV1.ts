import { AccountRole, address, type TransactionPartialSigner } from "@solana/kit";
import { sendInstructionsV1 } from "./sendInstructionsV1";

const MEMO_PROGRAM_ADDRESS = address(
  "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
);
export interface SendMemoV1Options {
  /** Connected wallet signer; invoking it prompts the user to approve the transaction. */
  payerSigner: TransactionPartialSigner;
  /** Caller-selected Solana JSON-RPC endpoint. The package has no cluster default. */
  rpcUrl: string;
}

/** Sends a Ledger Base64URL slot payload in one Solana v1 transaction. */
export async function sendMemoV1(
  memoPayload: string,
  options: SendMemoV1Options,
): Promise<string> {
  if (!/^[A-Za-z0-9_-]+={0,31}$/.test(memoPayload)) {
    throw new Error("Memo payload must be a non-empty Base64URL Ledger stream.");
  }

  const memoInstruction = {
    programAddress: MEMO_PROGRAM_ADDRESS,
    accounts: [{ address: options.payerSigner.address, role: AccountRole.READONLY_SIGNER }],
    data: new TextEncoder().encode(memoPayload),
  };

  return sendInstructionsV1([memoInstruction], options);
}
