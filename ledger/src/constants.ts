export const CHARS =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export const CHAR_BASE = BigInt(CHARS.length);
export const FIXED_SLOT_CHARS = 32;

export const CHAR_INDEX = new Map<string, bigint>(
  [...CHARS].map((c, i) => [c, BigInt(i)])
);
