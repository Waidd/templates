import {add} from '../src/index.js';

describe('index - unit tests', () => {
	describe('method add', () => {
		it('should add two number', () => {
			const result = add(1, 2);

			expect(result).toEqual(3);
		});
	});
});
