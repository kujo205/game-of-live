class InfiniteMatrix {
	private readonly matrix: any[][];
	private readonly height: number;
	private readonly width: number;

	constructor(matrix: any[][]) {
		this.matrix = matrix;
		this.height = matrix.length;
		this.width = matrix[0].length;
	}

	private getYX(x: number, y: number) {
		const wrappedX = ((x % this.width) + this.width) % this.width;
		const wrappedY = ((y % this.height) + this.height) % this.height;
		return {
			x: wrappedX,
			y: wrappedY,
		};
	}

	setCell(_x: number, _y: number, value: string) {
		const { x, y } = this.getYX(_x, _y);
		this.matrix[y][x] = value;
	}

	getCell(_x: number, _y: number) {
		const { x, y } = this.getYX(_x, _y);

		return {
			x: x,
			y: y,
			value: this.matrix[y][x],
		};
	}

	print() {
		console.log("matrix", this.matrix);
	}
}

export default InfiniteMatrix;
