/**
 * return the number of even numbers in the array
 */

// const { run } = require('../utils/runtest.utils.js');

function countEvenNumber(array) {
  let countNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) countNumber++;
  }
  return countNumber;
}
module.exports = {
  countEvenNumber,
};

//unit test
var array = [2, 4, 5, 6, 445, 666, 555, 777, 888];
if (countEvenNumber(array) === 5) {
  console.log("test passed");
}

// const testCase = [
//   { input: array, expect: 5 }
// ]

// run(testCase, countEvenNumber, 4);
