const MEMO_PROGRAM_ID = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";
const SOLANA_RPC_BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const SOLANA_RPC_BASE = 58;

interface RpcCompiledInstruction {
  programIdIndex: number;
  data: string;
}

interface RpcTransactionResult {
  slot: number;
  transaction: {
    message: {
      accountKeys: string[];
      instructions: RpcCompiledInstruction[];
    };
  };
  meta: { err: unknown; fee: number } | null;
  version: number | "legacy";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

// Solana JSON-RPC returns compiled instruction bytes as Base58. This decodes
// that RPC wire representation only; Ledger Memo content is Base64URL.
function decodeRpcInstructionData(encoded: string): Uint8Array {
  if (encoded.length === 0) return new Uint8Array();

  let zeroes = 0;
  while (zeroes < encoded.length && encoded[zeroes] === "1") zeroes++;

  const bytes: number[] = [];
  for (let i = zeroes; i < encoded.length; i++) {
    const digit = SOLANA_RPC_BASE58_ALPHABET.indexOf(encoded[i]);
    if (digit < 0) throw new Error("Solana RPC returned invalid instruction data.");

    let carry = digit;
    for (let j = 0; j < bytes.length; j++) {
      carry += bytes[j] * SOLANA_RPC_BASE;
      bytes[j] = carry & 0xff;
      carry >>= 8;
    }
    while (carry > 0) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  const result = new Uint8Array(zeroes + bytes.length);
  for (let i = 0; i < bytes.length; i++) result[result.length - 1 - i] = bytes[i];
  return result;
}

export interface ReadMemoV1Options {
  /** Caller-selected Solana JSON-RPC endpoint. The package has no cluster default. */
  rpcUrl: string;
}

export interface ReadMemoV1Result {
  signature: string;
  rpcUrl: string;
  slot: number;
  feeLamports?: number;
  memoPayload: string;
}

/** Fetches a confirmed Solana v1 transaction and returns its Base64URL Memo payload. */
export async function readMemoV1(
  signature: string,
  options: ReadMemoV1Options,
): Promise<ReadMemoV1Result> {
  const rpcUrl = options.rpcUrl;
  if (!rpcUrl) throw new Error("A Solana RPC URL must be supplied by the caller.");
  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getTransaction",
      params: [signature, {
        commitment: "confirmed",
        encoding: "json",
        maxSupportedTransactionVersion: 1,
      }],
    }),
  });
  if (!response.ok) throw new Error(`Solana RPC returned HTTP ${response.status}.`);
  const rpcResponse: unknown = await response.json();
  if (!isRecord(rpcResponse)) throw new Error("Solana RPC returned an invalid response.");
  if (isRecord(rpcResponse.error)) {
    throw new Error(`Solana RPC getTransaction failed: ${String(rpcResponse.error.message ?? "unknown RPC error")}`);
  }
  const transaction = rpcResponse.result as RpcTransactionResult | null | undefined;
  if (!transaction) throw new Error("Transaction was not found on the selected RPC.");
  if (transaction.meta?.err) throw new Error("Transaction failed on chain.");
  if (transaction.version !== 1) {
    throw new Error(`Expected a Solana v1 transaction; RPC returned version ${String(transaction.version)}.`);
  }

  const message = transaction.transaction.message;
  const instruction = message.instructions.find((candidate) =>
    message.accountKeys[candidate.programIdIndex] === MEMO_PROGRAM_ID,
  );
  if (!instruction) {
    throw new Error("Transaction has no Memo instruction with readable data.");
  }

  const memoPayload = new TextDecoder("utf-8", { fatal: true }).decode(
    decodeRpcInstructionData(instruction.data),
  );
  if (!/^[A-Za-z0-9_-]+={0,31}$/.test(memoPayload)) {
    throw new Error("Memo payload is not a Base64URL Ledger slot stream.");
  }

  return {
    signature,
    rpcUrl,
    slot: transaction.slot,
    feeLamports: transaction.meta?.fee,
    memoPayload,
  };
}
