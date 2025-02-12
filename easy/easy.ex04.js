/**
 * return the number of odd numbers in the array
 */

const { run } = require('../utils/runtest.utils.js');

function countNumber(array) {
  let countNumber = 0;
  array.forEach(num => {
    if (num % 2 === 0) countNumber++;
  });
  return countNumber;
}
module.exports = {
  countOddNumber: countNumber,
};

//unit test
let array = [2,4,5,6,445,666,555,777,888]

const testCase = [
  { input: [array], expect:5  }
]

run(testCase, countNumber, 4);
