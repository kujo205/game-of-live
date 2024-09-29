import { parseArgs } from "node:util";

export function readInputArgs() {
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      input: {
        type: "string",
      },
      display_in_terminal: {
        type: "boolean",
        default: false,
      },
      output: {
        type: "string",
        default: "output.txt",
      },
    },
    strict: true,
    allowPositionals: true,
  });

  if (!values.input) {
    throw new Error(
      "Input file path is required, please provide --input <path>",
    );
  }

  if (!values.output) {
    throw new Error(
      "Output file path is required, please provide --output <path>",
    );
  }

  return values;
}
