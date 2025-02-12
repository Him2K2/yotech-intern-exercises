/**
 *
 * @param {number} array //array of numbers
 * @returns //min number in the array
 */
const { run } = require("../utils/runtest.utils");

function findMinValue(array) {
  var minNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }

  return minNumber;
}
module.exports = {
  findMinValue,
};

//unit test
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 92, 100, 10];
const testCase = [
  { input: [arr1], expect: 1 },
  { input: [arr2], expect: 10 },
];
run(testCase, findMinValue, 11);
