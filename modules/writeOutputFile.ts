import fs from "node:fs";

export function writeOutputFile(matrix: string[][], filepath = "output.txt") {
  const out = formatForOutput(matrix);
  fs.writeFileSync(filepath, out);
}

export function formatForOutput(matrix: string[][]) {
  const rows = [];

  for (const row of matrix) {
    rows.push(row.join(""));
  }

  return rows.join("\n");
}
