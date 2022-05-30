import process from 'node:process';

export function main(): void {
	const example = add(41, 1);
	process.stdout.write(example.toString());
}

export function add(a: number, b: number): number {
	return a + b;
}
