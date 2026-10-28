# `@dbrix/solana`

The Solana adapter sends DBrix text payloads in Memo instructions and reads confirmed Memo payloads back through JSON-RPC. The current sender builds Solana **v1 transactions** and checks wallet support for transaction version 1.

## Install

```sh
npm install @dbrix/solana
```

## Send a Ledger Memo

The `payerSigner` may come from a connected Wallet Standard wallet or a local signer adapter. The selected wallet must support Solana v1 transactions.

```typescript
import { sendMemoV1 } from "@dbrix/solana";

const signature = await sendMemoV1(memoPayload, {
  payerSigner,
  rpcUrl: userConfiguredRpcUrl,
});
```

The caller must provide the RPC endpoint explicitly. DBrix does not choose a cluster or RPC provider for the application.

## Confirmed Devnet example

The recorded DBrix integration run sent the encrypted-and-encoded test record to Devnet and read it back:

```text
RPC:       https://api.devnet.solana.com
Signature: 4oMico9PurQoNgPbAX9qVw62SyByAmJF49YiKbBSaa7k13HyTNVe7ZBuyQjLcXwCMJVi5stwF8YXcGiXiWkzcb3e
Slot:      515844796
Fee:       5,000 lamports
Memo:      1,107 Base64URL characters
Result:    Ledger reconstructed the 830-byte envelope; Core decrypted the original TCAP-shaped test record.
```

This is captured test evidence, not a promise that the historical signature or Devnet endpoint will remain available. The record used synthetic commitment-shaped values; the transaction did not execute a TCAP program instruction or move tokens. See the complete logs in the [root round-trip result](../tx-comp-result.md).

For a connected Wallet Standard account, create a Solana Kit signer with `createWalletStandardTransactionSigner(wallet, account, "solana:devnet")`. The adapter verifies that the wallet account supports transaction version 1 and that signing does not change the transaction message.

`memoPayload` should be the Ledger Base64URL slot stream with terminal `=` padding removed. Memo contents are public transaction data. Encrypt sensitive content with Core before encoding it with Ledger.

## Read a confirmed Memo

```typescript
import { readMemoV1 } from "@dbrix/solana";

const result = await readMemoV1(signature, {
  rpcUrl: userConfiguredRpcUrl,
});
console.log(result.memoPayload);
```

The reader requests the transaction through the selected RPC, requires a successful Solana v1 transaction, finds the Memo instruction, and returns its UTF-8 Base64URL text. Solana's RPC encoding for instruction bytes is Base58; the adapter decodes that RPC representation before returning the Memo payload.

## Package test

The Solana package test sends a real Devnet transaction and spends the configured signer's transaction fee. Run it only when you intend to submit:

```powershell
$env:DBRIX_RUN_SOLANA_MEMO_TEST = "1"
$env:DBRIX_SIGNER_KEYPAIR = "C:\path\to\signer-keypair.json"
$env:DBRIX_SOLANA_RPC = "<your chosen Solana JSON-RPC endpoint>"
npm run test:solana
```

To read a transaction separately:

```sh
npm run read:memo -- <signature> <rpc-url>
```

The CLI accepts the RPC URL as its second argument or from `DBRIX_SOLANA_RPC`. It has no default endpoint.

## Build

```sh
npm run build
```

Built with love by **Agbaka Daniel Ugonna (Big Dreams Web3)**.
