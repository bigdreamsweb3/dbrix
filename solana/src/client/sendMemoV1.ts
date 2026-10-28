import {
  AccountRole,
  address,
  appendTransactionMessageInstruction,
  assertIsTransactionWithBlockhashLifetime,
  assertIsTransactionWithinSizeLimit,
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  createTransactionMessage,
  estimateResourceLimitsFactory,
  getSignatureFromTransaction,
  pipe,
  sendAndConfirmTransactionFactory,
  setTransactionMessageComputeUnitLimit,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLoadedAccountsDataSizeLimit,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionMessageWithSigners,
  type TransactionPartialSigner,
} from "@solana/kit";

const MEMO_PROGRAM_ADDRESS = address(
  "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
);
const MAX_COMPUTE_UNIT_LIMIT = 1_400_000;
const MAX_LOADED_ACCOUNTS_DATA_SIZE = 64 * 1024 * 1024;
const LOADED_ACCOUNTS_DATA_PAGE = 32 * 1024;

export interface SendMemoV1Options {
  /** Connected wallet signer; invoking it prompts the user to approve the transaction. */
  payerSigner: TransactionPartialSigner;
  /** Caller-selected Solana JSON-RPC endpoint. The package has no cluster default. */
  rpcUrl: string;
}

function websocketUrl(rpcUrl: string): string {
  const url = new URL(rpcUrl);
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  return url.toString();
}

/** Sends a Ledger Base64URL slot payload in one Solana v1 transaction. */
export async function sendMemoV1(
  memoPayload: string,
  options: SendMemoV1Options,
): Promise<string> {
  if (!/^[A-Za-z0-9_-]+={0,31}$/.test(memoPayload)) {
    throw new Error("Memo payload must be a non-empty Base64URL Ledger stream.");
  }

  const rpcUrl = options.rpcUrl;
  if (!rpcUrl) throw new Error("A Solana RPC URL must be supplied by the caller.");
  const rpc = createSolanaRpc(rpcUrl);
  const rpcSubscriptions = createSolanaRpcSubscriptions(websocketUrl(rpcUrl));
  const payerSigner = options.payerSigner;
  const { value: balance } = await rpc.getBalance(payerSigner.address).send();
  console.log(`Payer balance: ${Number(balance) / 1_000_000_000} SOL`);

  const { value: latestBlockhash } = await rpc
    .getLatestBlockhash({ commitment: "confirmed" })
    .send();

  const memoInstruction = {
    programAddress: MEMO_PROGRAM_ADDRESS,
    accounts: [{ address: payerSigner.address, role: AccountRole.READONLY_SIGNER }],
    data: new TextEncoder().encode(memoPayload),
  };

  const message = pipe(
    createTransactionMessage({ version: 1 }),
    (tx) => setTransactionMessageFeePayerSigner(payerSigner, tx),
    (tx) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, tx),
    (tx) => appendTransactionMessageInstruction(memoInstruction, tx),
  );

  const estimateResourceLimits = estimateResourceLimitsFactory({ rpc });
  const estimate = await estimateResourceLimits(message, { commitment: "confirmed" });
  const computeUnitLimit = Math.min(
    Math.ceil(estimate.computeUnitLimit * 1.1),
    MAX_COMPUTE_UNIT_LIMIT,
  );
  const loadedAccountsDataSizeLimit = Math.min(
    (Math.floor(estimate.loadedAccountsDataSizeLimit / LOADED_ACCOUNTS_DATA_PAGE) + 1) *
      LOADED_ACCOUNTS_DATA_PAGE,
    MAX_LOADED_ACCOUNTS_DATA_SIZE,
  );
  const configuredMessage = pipe(
    message,
    (tx) => setTransactionMessageComputeUnitLimit(computeUnitLimit, tx),
    (tx) => setTransactionMessageLoadedAccountsDataSizeLimit(loadedAccountsDataSizeLimit, tx),
  );
  console.info(
    `Solana v1 resource limits: compute=${computeUnitLimit} CUs; loadedAccounts=${loadedAccountsDataSizeLimit} bytes.`,
  );

  const signedTransaction = await signTransactionMessageWithSigners(configuredMessage);
  assertIsTransactionWithBlockhashLifetime(signedTransaction);
  assertIsTransactionWithinSizeLimit(signedTransaction);

  const sendAndConfirm = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions });
  await sendAndConfirm(signedTransaction, { commitment: "confirmed" });

  const signature = getSignatureFromTransaction(signedTransaction);
  console.log(`Solana v1 memo transaction confirmed: ${signature}`);
  return signature;
}
