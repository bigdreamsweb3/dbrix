# `@dbrix/ledger`

Ledger converts arbitrary bytes to a reversible Base64URL stream and splits the stream into fixed 32-character slots. It is an encoding layer only: it does not encrypt, compress, or provide privacy.

## Install

```sh
npm install @dbrix/ledger
```

## Encode and decode

```typescript
import { decodeLedgerSlots, encodeToLedgerSlots } from "@dbrix/ledger";

const bytes = new TextEncoder().encode("Hello ledger world");
const slots = encodeToLedgerSlots(bytes);
const restoredBytes = decodeLedgerSlots(slots);
const restoredText = new TextDecoder().decode(restoredBytes);
```

## Recorded test data

The package test round-trips this exact byte string through Ledger:

```text
Input:    px7y8q9bqt5m2v4k0q6o3rz6lp8zs0p7vzx+xkzzxwzt6z4kf1gv2kc=
Recovered:px7y8q9bqt5m2v4k0q6o3rz6lp8zs0p7vzx+xkzzxwzt6z4kf1gv2kc=
```

The integration test also encoded the 830-byte Core envelope from the recorded TCAP-shaped fixture as **1,107 Base64URL characters across 35 slots**, then reconstructed the envelope byte-for-byte from the Memo readback. The first slots from that run were `eyJkYXRhIjoiVnljd24wbEp5dG5DYWZn`, `SFNob1lTenVBNE44V1FPcWgrNDB3WDhQ`, and `RzIwYThVMnZyYXhzU3ExNGxXb1JtcGow`. These are encoding examples from a synthetic test record, not standalone application data.

Every encoded slot is 32 characters; the final slot is padded with `=` when needed. Decoding concatenates the slots, removes terminal padding, and reconstructs the original bytes. Preserve slot order when storing or transmitting them.

## Use with Core

```typescript
import { decrypt, encrypt } from "@dbrix/core";
import { decodeLedgerSlots, encodeToLedgerSlots } from "@dbrix/ledger";

const key = crypto.getRandomValues(new Uint8Array(32));
const envelope = encrypt({ event: "credit", amount: "1250000" }, key, {
  compression: "deflate",
});
const envelopeBytes = new TextEncoder().encode(JSON.stringify(envelope));
const slots = encodeToLedgerSlots(envelopeBytes);

const recoveredEnvelopeBytes = decodeLedgerSlots(slots);
const recoveredEnvelope = JSON.parse(new TextDecoder().decode(recoveredEnvelopeBytes));
const value = decrypt(recoveredEnvelope, key);
```

Core decides whether compression reduces the plaintext. Ledger encodes the resulting serialized envelope without changing its contents. For Solana Memo, join the slots and remove only trailing `=` padding before passing the text to `@dbrix/solana`.

## Test and build

```sh
npm run test:ledger
npm run build
```

Tests cover text, arbitrary binary data, fixed slot widths, and exact recovery after terminal padding is removed for Memo transport. Solana JSON-RPC may represent compiled instruction bytes using Base58; that is an RPC wire representation handled by the Solana adapter. Ledger slot content remains Base64URL. The full recorded round trip is in [tx-comp-result.md](../tx-comp-result.md).

Built with love by **Agbaka Daniel Ugonna (Big Dreams Web3)**.
