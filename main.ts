import { GameOfLife } from "@/modules/gameOfLife";
import { readAndParseFile } from "@/modules/readAndParseFile";
import { readInputArgs } from "@/modules/readInputArgs";
import { writeOutputFile } from "@/modules/writeOutputFile";

main().catch(console.error);

async function main() {
  const { input, display_in_terminal, output } = readInputArgs();
  const { matrix, generations } = readAndParseFile(input);
  const gameOfLife = new GameOfLife(matrix);

  const outputMatrix = await gameOfLife.getMatrixAfterNGenerations(
    generations,
    !!display_in_terminal,
  );

  writeOutputFile(outputMatrix.getMatrix(), output);
}
