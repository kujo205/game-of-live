class InfiniteMatrix<T> {
  private readonly matrix: T[][];
  private readonly height: number;
  private readonly width: number;

  constructor(matrix: T[][]) {
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

  setCell(_x: number, _y: number, value: T) {
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
    const rows = [];

    for (const row of this.matrix) {
      rows.push(row.join("").replaceAll("x", "🟡").replaceAll(".", "⬛️"));
    }

    console.log(rows.join("\n"), "\n");
  }
  getMatrix() {
    return this.matrix;
  }
}

export default InfiniteMatrix;
