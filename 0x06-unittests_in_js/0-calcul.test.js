const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	 describe('First number rounded', () => {
                it('should return 3 when a is 1.4 and b is 2', () => {
                        assert.strictEqual(calculateNumber(1.4, 2), 3);
                });
                it('should return 4 when a is 1.5 and b is 2', () => {
                        assert.strictEqual(calculateNumber(1.5, 2), 4);
                });
                it('should return 0 when a is -0.4 and b is 0', () => {
                        assert.strictEqual(calculateNumber(-0.4, 0), 0);
                });
                it('should return -1 when a is -0.6 and b is 0', () => {
                        assert.strictEqual(calculateNumber(-0.6, 0), -1);
                });
        });

	 describe('Both numbers rounded', () => {
                it('should return 4 when a is 1.4 and b is 2.5', () => {
                        assert.strictEqual(calculateNumber(1.4, 2.5), 4);
                });
                it('should return 5 when a is 1.5 and b is 2.5', () => {
                        assert.strictEqual(calculateNumber(1.5, 2.5), 5);
                });
                it('should return 0 when a is 0 and b is 0', () => {
                        assert.strictEqual(calculateNumber(0, 0), 0);
                });
                it('should return -1 when a is -1.4 and b is -0.5', () => {
                        assert.strictEqual(calculateNumber(-1.4, -0.5), -1);
                });
                it('should return -2 when a is -1.5 and b is -1.5', () => {
                        assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
                });
        });

	 describe('Second number rounded', () => {
                it('should return 3 when a is 2 and b is 1.4', () => {
                        assert.strictEqual(calculateNumber(2, 1.4), 3);
                });
                it('should return 4 when a is 2 and b is 1.5', () => {
                        assert.strictEqual(calculateNumber(2, 1.5), 4);
                });
                it('should return 0 when a is 0 and b is -0.4', () => {
                        assert.strictEqual(calculateNumber(0, -0.4), 0);
                });
                it('should return -1 when a is 0 and b is -0.6', () => {
                        assert.strictEqual(calculateNumber(0, -0.6), -1);
                });
                it('should return -2 when a is -1 and b is -1.5', () => {
                        assert.strictEqual(calculateNumber(-1, -1.5), -2);
                });
        });
});
