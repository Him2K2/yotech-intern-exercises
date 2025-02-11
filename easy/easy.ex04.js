/**
 * return the number of even numbers in the array
 */

const { run } = require('../utils/runtest.utils.js');

function countEvenNumber(array) {
  let countNumber = 0;
  array.forEach(num => {
    if (num % 2 === 0) countNumber++;
  });
  return countNumber;
}
let array = [2,4,5,6,445,666,555,777,888]

const testCase = [
  { input: [array], expect: 5 }
]

run(testCase, countEvenNumber, 4);
