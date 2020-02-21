var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

	it('it can add two numbers together', function() {
		calculator.previousTotal = 1;
		calculator.add(4)
		assert.equal(5, calculator.runningTotal)
	})

	it('it can subtract two numbers', function() {
		calculator.previousTotal = 7;
		calculator.subtract(4);
		assert.equal(3, calculator.runningTotal);
	})

	it('it can multiply two numbers', function() {
		calculator.previousTotal = 3;
		calculator.multiply(5);
		assert.equal(15, calculator.runningTotal)
	})

	it('it can divide two numbers', function() {
		calculator.previousTotal = 21;
		calculator.divide(7);
		assert.equal(3, calculator.runningTotal)
	})

	it('it can concatenate two numbers', function() {
		calculator.numberClick(1);
		calculator.numberClick(7);
		assert.equal(17, calculator.runningTotal)
	})

	it('it can chain multiple operations together', function() {
		calculator.numberClick(1);
		calculator.numberClick(7);
		calculator.operatorClick('+');
		calculator.numberClick(2);
		calculator.numberClick(0);
		calculator.operatorClick('-');
		calculator.numberClick(7);
		calculator.operatorClick('=');
		assert.equal(30, calculator.runningTotal)
	})

});
