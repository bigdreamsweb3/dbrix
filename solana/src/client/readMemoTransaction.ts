import { decodeLedgerSlots } from "../../../ledger/src/decoder";
import { readMemoV1 } from "./readMemoV1";

async function main(): Promise<void> {
  const [signature, rpcUrlArgument] = process.argv.slice(2);
  const rpcUrl = rpcUrlArgument ?? process.env.DBRIX_SOLANA_RPC;
  if (!signature) {
    throw new Error("Usage: read-memo-transaction <signature> <rpc-url> (or set DBRIX_SOLANA_RPC)");
  }
  if (!rpcUrl) throw new Error("Supply an RPC URL or set DBRIX_SOLANA_RPC.");

  const memoResult = await readMemoV1(signature, { rpcUrl });
  const slots = memoResult.memoPayload.match(/.{1,32}/g) ?? [];
  const decoded = decodeLedgerSlots(slots);

  console.log(JSON.stringify({
    ...memoResult,
    confirmed: true,
    slots,
    decodedByteLength: decoded.length,
    decodedHex: Buffer.from(decoded).toString("hex"),
    decodedUtf8: new TextDecoder().decode(decoded),
  }, null, 2));
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
