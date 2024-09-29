import { describe, expect, test } from "bun:test";
import InfiniteMatrix from "@/modules/InfiniteMatrix";

describe("InfiniteMatrix suite", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const instance = new InfiniteMatrix(matrix);

  test("Correctly access left neighbour out of range of matrix", () => {
    expect(instance.getCell(-1, 0)).toEqual({ value: 3, x: 2, y: 0 });
  });

  test("Correctly access right neighbour out of range of matrix", () => {
    expect(instance.getCell(3, 0)).toEqual({ value: 1, x: 0, y: 0 });
  });

  test("Correctly access top neighbour out of range of matrix", () => {
    expect(instance.getCell(0, -1)).toEqual({ value: 7, x: 0, y: 2 });
  });

  test("Correctly access bottom neighbour out of range of matrix", () => {
    expect(instance.getCell(0, 3)).toEqual({ value: 1, x: 0, y: 0 });
  });
});
