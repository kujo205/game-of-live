import { describe, expect, test } from "bun:test";
import { FileParsingError, parseFileInput } from "@/modules/readAndParseFile";

describe("Input parser suite", () => {
  test("Valid file", () => {
    const input = "3\n8 5\n........\n..x.....\n..x.....\n..x.....\n........";

    expect(parseFileInput(input)).toEqual({
      generations: 3,
      width: 8,
      height: 5,
      matrix: [
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "x", ".", ".", ".", ".", "."],
        [".", ".", "x", ".", ".", ".", ".", "."],
        [".", ".", "x", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
      ],
    });
  });

  test("Invalid file: height doesn't match input matrix", () => {
    const input = "3\n8 5\n........\n..x.....\n..x.....\n..x.....";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });

  test("Invalid file: width doesn't match input matrix", () => {
    const input = "\n8 5\n.......\n.x.....\n.x.....\n.x.....\n.......";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });

  test("Invalid file: no number of iterations", () => {
    const input = "\n8 5\n........\n..x.....\n..x.....\n..x.....\n........";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });

  test("Invalid file: word instead of number of iterations", () => {
    const input = "qw\n8 5\n........\n..x.....\n..x.....\n..x.....\n........";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });

  test("Invalid file: extra whitespace near the number of iteration", () => {
    const input = "3 \n8 5\n........\n..x.....\n..x.....\n..x.....\n........";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });

  test("Invalid file: no width and height of field specified", () => {
    const input = "3 \n \n........\n..x.....\n..x.....\n..x.....\n........";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });

  test("Invalid file: extra whitespaces in width and height line", () => {
    const input =
      "3 \n8  5   \n........\n..x.....\n..x.....\n..x.....\n........";

    expect(() => parseFileInput(input)).toThrowError(FileParsingError);
  });
});
