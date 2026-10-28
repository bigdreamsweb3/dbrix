import { fromBase64Url } from "./base64url";

export function decodeLedgerSlots(slots: string[]): Uint8Array {
  if (!Array.isArray(slots) || slots.length === 0) {
    return new Uint8Array();
  }

  const encoded = slots.join("");
  return fromBase64Url(encoded.replace(/=+$/g, ""));
}
