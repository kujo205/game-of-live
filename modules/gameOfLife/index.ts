import Matrix from "@/modules/InfiniteMatrix";

export class GameOfLife {
	height: number;
	width: number;
	matrix: Matrix;

	constructor(matrix: string[][]) {
		this.height = matrix.length;
		this.width = matrix[0].length;

		this.matrix = new Matrix(matrix);
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

export class GameOfLifeError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "FileParsingError";
	}
}
