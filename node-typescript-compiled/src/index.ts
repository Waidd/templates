import process from 'node:process';

export function main(): void {
	const example = 42;
	process.stdout.write(example.toString());
}
