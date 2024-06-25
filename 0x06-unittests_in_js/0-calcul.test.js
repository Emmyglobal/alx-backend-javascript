const assert = require('assert');
const calculateNumber = require('../0-calcul');

describe('calculateNumber', function() {
	it('should return 4 when a is 1.4 and b is 2.5', () => {
		assert.strictEqual(calculateNumber(1.4, 2.5), 4);
	});
	it('should return 5 when a is 1.5 and b is 2.5', () => {
		assert.strictEqual(calculateNumber(1.5, 2.5), 5);
	});
	it('should return 0 when a is 0 and b is 0', () => {
		assert.strictEqual(calculateNumber(0, 0), 0);
	});
	it('should return -2 when a is -1.4 and b is -0.5', () => {
		assert.strictEqual(calculateNumber(-1.4, -0.5), -2);
	});
	it('should return -3 when a is -1.5 and b is -1.5', () => {
		assert.strictEqual(calculateNumber(-1.5, -1.5), -3);
	});
});
