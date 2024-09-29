import { parseArgs } from "node:util";

export function readInputArgs() {
	const { values } = parseArgs({
		args: Bun.argv,
		options: {
			input: {
				type: "string",
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

	return values;
}
