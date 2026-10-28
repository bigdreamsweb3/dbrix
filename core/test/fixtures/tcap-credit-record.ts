import { randomBytes } from "node:crypto";

// Synthetic record with fresh 32-byte commitment-shaped values. These values
// model commitment entropy and encoding; they are not derived protocol commitments.
export function createTcapCreditRecord() {
  return {
    protocol: "TCAP",
    instruction: "credit_tcap_tin_tip_v2",
    version: 1,
    tokenId: 1,
    mint: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
    amountBaseUnits: "1250000",
    authorizationDigest: randomBytes(32).toString("hex"),
    validAfterSlot: "515812000",
    expiresAtSlot: "515812200",
    previousCommitment: randomBytes(32).toString("hex"),
    newCommitment: randomBytes(32).toString("hex"),
    sequence: "2",
    policyCommitment: randomBytes(32).toString("hex"),
    gpruScopeCommitment: randomBytes(32).toString("hex"),
    nullifier: randomBytes(32).toString("hex"),
    dnaKeyCommitment: randomBytes(32).toString("hex"),
  };
}

export const TCAP_CREDIT_RECORD = createTcapCreditRecord();
