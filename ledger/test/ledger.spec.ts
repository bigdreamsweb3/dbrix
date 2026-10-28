import { describe, it, expect } from "vitest";
import { encodeToLedgerSlots, decodeLedgerSlots } from "../src";

describe("@dbrix/ledger – integrity", () => {
  it("reconstructs original text exactly", () => {
    const input = "px7y8q9bqt5m2v4k0q6o3rz6lp8zs0p7vzx+xkzzxwzt6z4kf1gv2kc=";

    const bytes = new TextEncoder().encode(input);
    const slots = encodeToLedgerSlots(bytes);
    const recovered = decodeLedgerSlots(slots);
    const output = new TextDecoder().decode(recovered);

    console.log("Original input:", input);
    console.log("Slots:", slots);
    console.log("Recovered output:", output);

    expect(output).toBe(input);
  });
  //
  it("handles arbitrary binary data", () => {
    const binary = crypto.getRandomValues(new Uint8Array(256));

    const slots = encodeToLedgerSlots(binary);
    const recovered = decodeLedgerSlots(slots);

    expect(recovered).toEqual(binary);
  });

  it("always produces fixed 32-character slots", () => {
    const data = new TextEncoder().encode("dbrix ledger test");
    const slots = encodeToLedgerSlots(data);

    for (const slot of slots) {
      expect(slot.length).toBe(32);
    }
  });

  it("round-trips arbitrary binary data with Base64URL slots", () => {
    const binary = crypto.getRandomValues(new Uint8Array(256));

    const slots = encodeToLedgerSlots(binary);
    const recovered = decodeLedgerSlots(slots);

    expect(recovered).toEqual(binary);
    expect(slots.every((slot) => slot.length === 32)).toBe(true);
    expect(slots.join("")).toMatch(/^[A-Za-z0-9_-]+=*$/);
  });

  it("round-trips Base64URL slots through an unpadded Memo payload", () => {
    const binary = crypto.getRandomValues(new Uint8Array(1194));
    const slots = encodeToLedgerSlots(binary);
    const memoPayload = slots.join("").replace(/=+$/g, "");
    const memoSlots = memoPayload.match(/.{1,32}/g) ?? [];

    expect(memoPayload).not.toMatch(/=/);
    expect(decodeLedgerSlots(memoSlots)).toEqual(binary);
  });
});
