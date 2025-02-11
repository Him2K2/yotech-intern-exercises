/**
 * input : number01 //number integer
 */
const { run } = require('../utils/runtest.utils.js');
function isPrimeNumber(number01) {
  if (number01 < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number01); i++) {
    if (number01 % i === 0) return false;
  }
  return true;
}

//unit test
const testCase = [
  {input: [2], expect: true},
  {input: [3], expect: true},
  {input: [4], expect: false}
];

run(testCase, isPrimeNumber, 8);
