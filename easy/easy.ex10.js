/**
 *
 * @param {number} array //array of numbers
 * @returns //max number in the array
 */
const { run } = require("../utils/runtest.utils");

function findMaxValue(array) {
  var maxNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
}
module.exports = {
  findMaxValue,
};


//unit test
let arr = [1, 2, 3, 4, 5];
let arr2 = [11, 92, 100, 10];
const testCase = [
  { input: [arr], expect: 5 },
  { input: [arr2], expect: 100 },
];
run(testCase, findMaxValue, 10);
