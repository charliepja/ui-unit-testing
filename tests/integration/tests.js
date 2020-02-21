const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

	it('should be able to display the result of an operation', function() {
		running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('30')
	})

	it('should be able to chain multiple operations together', function() {
		running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
		element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('25')
	})


	it('should work with negative results', function() {
		running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-10')
	})

	it('should work with decimal results', function() {
		running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
	})

	it('should work with large numbers', function() {
		running_total = element(by.css('#running_total'))
		element(by.css('#number1')).click();
		element(by.css('#number0')).click();
		element(by.css('#number0')).click();
		element(by.css('#number0')).click();
		element(by.css('#number0')).click();
		element(by.css('#number0')).click();
		element(by.css('#number0')).click();
		element(by.css('#operator_multiply')).click();
		element(by.css('#number1')).click();
		element(by.css('#number0')).click();
		element(by.css('#operator_equals')).click();
		expect(running_total.getAttribute('value')).to.eventually.equal('10000000')
	})

	it('should result in error when dividing by 0', function() {
		running_total = element(by.css('#running_total'))
		element(by.css('#number1')).click();
		element(by.css('#number0')).click();
		element(by.css('#operator_divide')).click();
		element(by.css('#number0')).click();
		element(by.css('#operator_equals')).click();
		expect(running_total.getAttribute('value')).to.eventually.equal('Error')
	})

});
