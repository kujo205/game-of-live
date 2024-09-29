import Matrix from "@/modules/InfiniteMatrix";

export class GameOfLife {
  height: number;
  width: number;
  matrix: Matrix<string>;

  constructor(matrix: string[][]) {
    this.height = matrix.length;
    this.width = matrix[0].length;
    this.matrix = new Matrix(matrix);
  }

  async getMatrixAfterNGenerations(
    generations: number,
    displayInTerminal = false,
  ) {
    for (let i = 0; i < generations; i++) {
      this.getAllCellsNextGeneration();
      if (displayInTerminal) {
        this.matrix.print();
        await delay(200);
        console.clear();
      }
    }

    return this.matrix;
  }
  getAllCellsNextGeneration() {
    const nextGenMatrix: string[][] = [];

    for (let i = 0; i < this.height; i++) {
      nextGenMatrix.push([]);
      for (let j = 0; j < this.width; j++) {
        nextGenMatrix[i].push(this.getCellNextGeneration(j, i));
      }
    }

    this.matrix = new Matrix(nextGenMatrix);
  }
  getCellNextGeneration(x: number, y: number) {
    let aliveNeighbours = 0;
    let deadNeighbours = 0;
    const isCellAlive = this.matrix.getCell(x, y).value === "x";

    const neighbourCells: string[] = [];

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const neighbour = this.matrix.getCell(x + i, y + j);
        if (neighbour.x === x && neighbour.y === y) continue;

        neighbourCells.push(neighbour.value);
      }
    }

    for (const cell of neighbourCells) {
      if (cell === "x") {
        aliveNeighbours++;
      } else {
        deadNeighbours++;
      }
    }

    if (isCellAlive) {
      if (aliveNeighbours < 2 || aliveNeighbours > 3) {
        return ".";
      }
      return "x";
    }

    if (aliveNeighbours === 3) {
      return "x";
    }

    return ".";
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
