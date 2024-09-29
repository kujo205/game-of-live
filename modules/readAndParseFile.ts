import fs from "node:fs";

export function readAndParseFile(filePath?: string) {
  if (!filePath) throw new Error("File path is required");

  const input = fs.readFileSync(filePath).toString();

  return parseFileInput(input);
}

export function parseFileInput(file: string) {
  const lines = file.split("\n");

  mathRegex(/^-?\d+$/, lines[0], 1);
  const generations = Number.parseInt(lines[0]);

  mathRegex(/^\d+\s\d+$/, lines[1], 2);
  const [width, height] = lines[1].trim().split(" ").map(Number);

  const field = lines.slice(2, 2 + height);

  if (field.length !== height) {
    throw new FileParsingError(
      "Error parsing matrix, matrix height does not match specified height",
    );
  }

  for (let i = 0; i < height; i++) {
    const line = field[i];
    mathRegex(new RegExp(`^[.x]{${width}}$`), line, i + 3);
  }

  const matrix = field.map((line) => line.split(""));

  return { generations, width, height, matrix };
}

function mathRegex(regex: RegExp, str: string, line: number) {
  if (!regex.test(str)) {
    throw new FileParsingError(
      `Error parsing line ${line} of your input file: ${str}`,
    );
  }
}

export class FileParsingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FileParsingError";
  }
}
