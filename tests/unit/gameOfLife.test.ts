import { describe, expect, test } from "bun:test";
import { GameOfLife } from "@/modules/gameOfLife";

describe("Game of live", () => {
  describe("getCellNextGeneration suite", () => {
    describe("Alive cell", () => {
      test("Dies because of no alive neighbours", () => {
        const game = new GameOfLife([
          [".", ".", "."],
          [".", "x", "x"],
          [".", ".", "."],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });

      test("Dies because of 1 alive neighbour", () => {
        const game = new GameOfLife([
          [".", ".", "."],
          [".", "x", "x"],
          [".", ".", "."],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });

      test("Persists to live because of 2 alive neighbour", () => {
        const game = new GameOfLife([
          [".", ".", "x"],
          [".", "x", "x"],
          [".", ".", "."],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual("x");
      });

      test("Persists to live because of 3 alive neighbours", () => {
        const game = new GameOfLife([
          [".", "x", "x"],
          [".", "x", "x"],
          [".", ".", "."],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual("x");
      });

      test("Dies because of 4 alive neighbours", () => {
        const game = new GameOfLife([
          [".", ".", "."],
          ["x", "x", "x"],
          ["x", "x", "."],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });

      test("Dies because of 5 alive neighbours", () => {
        const game = new GameOfLife([
          [".", ".", "."],
          ["x", "x", "x"],
          ["x", "x", "x"],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });
      test("Dies because of 6 alive neighbours", () => {
        const game = new GameOfLife([
          [".", ".", "x"],
          ["x", "x", "x"],
          ["x", "x", "x"],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });
      test("Dies because of 7 alive neighbours", () => {
        const game = new GameOfLife([
          [".", "x", "x"],
          ["x", "x", "x"],
          ["x", "x", "x"],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });
      test("Dies because of 8 alive neighbours", () => {
        const game = new GameOfLife([
          ["x", "x", "x"],
          ["x", "x", "x"],
          ["x", "x", "x"],
        ]);
        expect(game.getCellNextGeneration(1, 1)).toEqual(".");
      });
    });

    describe("Dead cell", () => {
      test("keeps to be dead if all neighbours dead", () => {
        const game = new GameOfLife([
          [".", ".", "."],
          [".", ".", "."],
          [".", ".", "."],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });

      test("keeps to be dead if 1 neighbour alive", () => {
        const game = new GameOfLife([
          [".", ".", "x"],
          [".", ".", "."],
          [".", ".", "."],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });

      test("keeps to be dead if 2 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          [".", ".", "."],
          [".", ".", "."],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });

      test("becomes alive if 3 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          [".", ".", "."],
          [".", "x", "."],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual("x");
      });

      test("keeps to be dead if 4 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          ["x", "x", "."],
          [".", ".", "."],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });

      test("keeps to be dead if 5 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          ["x", "x", "x"],
          [".", ".", "."],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });

      test("keeps to be dead if 6 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          ["x", "x", "x"],
          [".", ".", "x"],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });
      test("keeps to be dead if 7 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          ["x", "x", "x"],
          [".", "x", "x"],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });
      test("keeps to be dead if 8 neighbours alive", () => {
        const game = new GameOfLife([
          ["x", ".", "x"],
          ["x", "x", "x"],
          ["x", "x", "x"],
        ]);

        expect(game.getCellNextGeneration(1, 0)).toEqual(".");
      });
    });
  });

  describe("getAllCellsNextGeneration suite", () => {
    test("successfully calculates next generation without interacting with border", () => {
      const game = new GameOfLife([
        [".", ".", ".", ".", "."],
        [".", ".", "x", ".", "."],
        [".", ".", "x", ".", "."],
        [".", ".", "x", ".", "."],
        [".", ".", ".", ".", "."],
      ]);
      expect(
        (() => {
          game.getAllCellsNextGeneration();
          return game.matrix.getMatrix();
        })(),
      ).toEqual([
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", "x", "x", "x", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
      ]);
    });

    test("successfully calculates next generation with interacting with border", () => {
      const game = new GameOfLife([
        [".", ".", "x", ".", "."],
        [".", ".", "x", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", "x", ".", "."],
      ]);
      expect(
        (() => {
          game.getAllCellsNextGeneration();
          return game.matrix.getMatrix();
        })(),
      ).toEqual([
        [".", "x", "x", "x", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
      ]);
    });
  });

  describe("getMatrixAfterNGenerations suite", () => {
    test("successfully completing 5 iterations of Acorn figure", () => {
      const game = new GameOfLife([
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "x", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", "x", ".", ".", ".", "."],
        [".", "x", "x", ".", ".", "x", "x", "x", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
      ]);
      expect(
        (() => {
          game.getMatrixAfterNGenerations(5);
          return game.matrix.getMatrix();
        })(),
      ).toEqual([
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "x", "x", ".", "x", "x", ".", "."],
        [".", ".", "x", ".", ".", ".", "x", "x", "."],
        [".", ".", ".", "x", "x", ".", ".", "x", "."],
        [".", ".", ".", ".", "x", "x", "x", ".", "."],
      ]);
    });
  });
});
