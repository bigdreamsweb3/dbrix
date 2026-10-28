import { FIXED_SLOT_CHARS } from "./constants";
import { toBase64Url } from "./base64url";

export function encodeToLedgerSlots(data: Uint8Array): string[] {
  const encoded = toBase64Url(data);

  const slots: string[] = [];
  for (let i = 0; i < encoded.length; i += FIXED_SLOT_CHARS) {
    const slice = encoded.slice(i, i + FIXED_SLOT_CHARS);
    slots.push(slice.padEnd(FIXED_SLOT_CHARS, "="));
  }

  return slots;
}
