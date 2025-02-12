/**
 * Factorial
 */
const{calculateFactorial} = require('../utils/factorial.utils');
const { run } = require('../utils/runtest.utils');

let number = 5;
console.log(calculateFactorial(number));

module.exports = {
calculateFactorial,
}
// Unit test
const testCase = [{ input: [5], expect: 120 }];
run(testCase, calculateFactorial, 15);