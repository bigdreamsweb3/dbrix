# 🧱 `@dbrix/core`

**Low-level, identity-agnostic cryptographic primitives for authenticated data encryption.**

`@dbrix/core` encrypts strings, JSON values, and binary data with NaCl secretbox (XSalsa20-Poly1305). It can optionally apply lossless Deflate compression before encryption when compression reduces the typed input. The package handles encryption and decryption; it does not require a particular identity system or blockchain.

## Features

- Authenticated symmetric encryption with XSalsa20-Poly1305.
- Automatic recovery of string, JSON, and byte input types after decryption.
- Type information is placed inside the encrypted plaintext.
- Optional lossless Deflate compression, used only when it makes the typed input smaller.
- Defensive validation for keys, nonces, ciphertext, and inflated payload size.
- Byte-based APIs suitable for applications that manage key material themselves.

## Installation

```sh
npm install @dbrix/core
```

## Basic usage

Generate a 32-byte secret key, encrypt structured data, and decrypt the returned envelope with the same key:

```typescript
import { createSecretKey, decrypt, encrypt } from "@dbrix/core";

const key = createSecretKey();
const record = {
  protocol: "TCAP",
  instruction: "credit_tcap_tin_tip_v2",
  mint: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  amountBaseUnits: "1250000",
};

const envelope = encrypt(record, key, { compression: "deflate" });
const restored = decrypt<typeof record>(envelope, key);

console.log(restored);
```

The key above is generated in memory for a demonstration. A real application must retain and protect its key according to its own recovery and access-control design; losing the key makes the ciphertext unrecoverable.

Core also supports strings and raw bytes:

```typescript
const encryptedText = encrypt("payment note", key);
const text = decrypt<string>(encryptedText, key);

const encryptedBytes = encrypt(new Uint8Array([0, 1, 2, 255]), key);
const bytes = decrypt<Uint8Array>(encryptedBytes, key);
```

## TCAP-shaped test record

The recorded DBrix integration test encrypts a TCAP-shaped credit record. Its commitment-like values are generated randomly for testing; they are not commitments or proofs produced by TCAP or GPRU, and the record does not represent a user's balance.

```json
{
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "d7095b07298c5f7e10e03b97618a5460a97d9b787031124faad875b0a603a14e",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2b5b86a7b68e3c3d786be74dab147de7b5c44ea145edbd7c9bcef0be4555b3e9",
  "newCommitment": "d62b0a14cae30a9684f20f57e1c3cb4ec08434b4745d0269c93d44bafad8c62b",
  "sequence": "2",
  "policyCommitment": "fb48f3f13ae184e581ca3efefbd0a4bfd981d9854c55df350caa772197079d51",
  "gpruScopeCommitment": "cabd303dc81924d3cd08549d82c864f9fb482f3d082c6573ecfe0883ec10c477",
  "nullifier": "a1c4f0f2da86237d5ad2dbf4f72ff0f6f836bf757f1ad3da1143d2c54ebf8145",
  "dnaKeyCommitment": "9b02b0450f00f3e438c74d8c9e8ae69a9cb15bb16bd906f353309d455dfcfa56"
}
```

The run encrypted the record into an 830-byte serialized envelope with Deflate enabled, then decrypted it back to the exact input. At six token decimals, `1250000` base units represents 1.25 tokens. The ciphertext and nonce change on each run because Core generates a fresh nonce.

## Envelope format

`encrypt` returns an object containing Base64 ciphertext and a Base64 nonce. When Deflate reduced the typed plaintext, the envelope also includes a compression marker:

```typescript
interface EncryptedData {
  data: string;
  nonce: string;
  compression?: "deflate";
  v?: number;
}
```

The type marker for strings, JSON, or bytes is encrypted with the value and restored by `decrypt`. The optional `compression` field remains visible so the decoder knows whether to inflate after authenticated decryption. Ciphertext length is also observable.

## Compression behavior

Compression is opt-in with `{ compression: "deflate" }`. Core compresses the type-prefixed plaintext and uses the compressed form only when it is smaller. Random or already-compressed content may not shrink, so compression is not guaranteed to reduce every payload. Decompression is bounded to limit oversized inflated input.

In the recorded full-pipeline fixture, the serialized envelope changed from **1,194 bytes to 830 bytes**, and its Base64URL Memo payload changed from **1,592 characters to 1,107 characters**. That fixture measured a **30.5% reduction**. This is one test result, not a guaranteed ratio; see the [full DBrix round-trip log](../tx-comp-result.md).

## Key handling and security

Secretbox is symmetric encryption: any party with the same secret key can decrypt and create valid ciphertext. Core is not a password-hardening KDF, public-key encryption system, zero-knowledge proof system, or homomorphic encryption library. For password-based use, derive key material with a suitable password KDF outside this package; do not use a human password directly as a secret key.

- Use high-entropy secret key material and keep it out of source control, public bundles, and logs.
- Keep nonce and key handling within the application’s security boundary. Core generates a fresh nonce for each `encrypt` call and includes it in the envelope.
- Treat ciphertext as untrusted input and handle decryption errors.
- Compression happens before encryption, so the compression marker and ciphertext length can reveal whether compression was applied and the approximate payload size. Avoid compressing secrets together with attacker-controlled text when that length signal could disclose information.

## Test and build

```sh
npm run test:core
npm run build
```

The Core tests cover encryption and decryption of a TCAP-shaped record, compressed recovery, and incompressible binary input. The package test is local and does not submit a Solana transaction. The root integration suite demonstrates Core → Ledger → Solana → Ledger → Core.

## Related DBrix packages

- [`@dbrix/ledger`](../ledger/README.md) encodes envelope bytes into reversible Base64URL slots.
- [`@dbrix/solana`](../solana/README.md) carries Ledger text in Solana Memo transactions and reads it back.

## License

MIT

Built with love by **Agbaka Daniel Ugonna (Big Dreams Web3)**.
