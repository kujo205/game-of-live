import { describe, expect, test } from "bun:test";
import { formatForOutput } from "@/modules/writeOutputFile";

describe("Write to output file", () => {
  test("Format matrix", () => {
    expect(
      formatForOutput([
        [".", "."],
        [".", "."],
      ]),
    ).toEqual("..\n..");
  });
});
