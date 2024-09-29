import { readAndParseFile } from "@/modules/readAndParseFile";
import { readInputArgs } from "@/modules/readInputArgs";

main().catch(console.error);

async function main() {
	const { input } = readInputArgs();
	readAndParseFile(input);
}
