import {
  address,
  getTransactionDecoder,
  getTransactionEncoder,
  type SignatureDictionary,
  type Transaction,
  type TransactionPartialSigner,
} from "@solana/kit";

export type SolanaWalletChain =
  | "solana:mainnet"
  | "solana:devnet"
  | "solana:testnet"
  | "solana:localnet";

export interface WalletStandardAccount {
  address: string;
  publicKey: Uint8Array;
  chains: readonly string[];
  features: readonly string[];
}

interface SignTransactionInput {
  account: WalletStandardAccount;
  transaction: Uint8Array;
  chain: SolanaWalletChain;
}

interface SignTransactionOutput {
  signedTransaction: Uint8Array;
}

export interface SolanaWalletStandard {
  accounts: readonly WalletStandardAccount[];
  features: {
    "solana:signTransaction": {
      supportedTransactionVersions: readonly ("legacy" | number)[];
      signTransaction: (
        ...inputs: readonly SignTransactionInput[]
      ) => Promise<readonly SignTransactionOutput[]>;
    };
  };
}

function equalBytes(left: Uint8Array, right: Uint8Array): boolean {
  return left.length === right.length && left.every((byte, index) => byte === right[index]);
}

/** Adapts a connected Wallet Standard account to the Solana Kit signer API. */
export function createWalletStandardTransactionSigner(
  wallet: SolanaWalletStandard,
  account: WalletStandardAccount,
  chain: SolanaWalletChain,
): TransactionPartialSigner {
  const feature = wallet.features["solana:signTransaction"];
  if (!feature) throw new Error("Connected wallet does not support solana:signTransaction.");
  if (!account.features.includes("solana:signTransaction")) {
    throw new Error("Selected wallet account cannot sign Solana transactions.");
  }
  if (!account.chains.includes(chain)) {
    throw new Error(`Selected wallet account is not connected to ${chain}.`);
  }
  if (!feature.supportedTransactionVersions.includes(1)) {
    throw new Error("Connected wallet does not support Solana v1 transactions.");
  }

  const signerAddress = address(account.address);
  const encodeTransaction = getTransactionEncoder();
  const decodeTransaction = getTransactionDecoder();

  return {
    address: signerAddress,
    async signTransactions(
      transactions: readonly Transaction[],
    ): Promise<readonly SignatureDictionary[]> {
      const signatures: SignatureDictionary[] = [];

      for (const transaction of transactions) {
        const [result] = await feature.signTransaction({
          account,
          transaction: Uint8Array.from(encodeTransaction.encode(transaction)),
          chain,
        });
        if (!result) throw new Error("Connected wallet returned no signed transaction.");

        const signed = decodeTransaction.decode(result.signedTransaction);
        if (!equalBytes(
          Uint8Array.from(transaction.messageBytes),
          Uint8Array.from(signed.messageBytes),
        )) {
          throw new Error("Connected wallet changed the memo transaction message before signing.");
        }

        const signature = signed.signatures[signerAddress];
        if (!signature) throw new Error("Connected wallet did not sign as the selected account.");
        signatures.push({ [signerAddress]: signature });
      }

      return signatures;
    },
  };
}
