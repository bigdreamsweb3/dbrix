import { deflate, Inflate } from "pako";

const MAX_DECOMPRESSED_BYTES = 1_000_000;

export interface CompressedBytes {
  bytes: Uint8Array;
  compression: "deflate";
}

/** Deflate only when the compressed output is strictly smaller than the input. */
export function deflateIfSmaller(input: Uint8Array): CompressedBytes | undefined {
  const compressed = deflate(input, { level: 9 });
  return compressed.length < input.length
    ? { bytes: compressed, compression: "deflate" }
    : undefined;
}

/** Inflates with an output cap so a small hostile payload cannot expand without bound. */
export function inflateBounded(
  input: Uint8Array,
  maxOutputBytes = MAX_DECOMPRESSED_BYTES,
): Uint8Array {
  const inflater = new Inflate({ chunkSize: 16 * 1024 });
  const chunks: Uint8Array[] = [];
  let outputLength = 0;

  inflater.onData = (data) => {
    const chunk = data instanceof Uint8Array ? data : new Uint8Array(data);
    outputLength += chunk.length;
    if (outputLength > maxOutputBytes) {
      throw new RangeError("Inflated data exceeds the configured size limit.");
    }
    chunks.push(chunk);
  };

  inflater.push(input, true);
  if (inflater.err) throw new Error(inflater.msg || "Invalid Deflate stream.");

  const output = new Uint8Array(outputLength);
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.length;
  }
  return output;
}
