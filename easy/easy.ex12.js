/**
 * 
 * @param {number} array array of numbers 
 * @returns the average of the array
 */
const { run } = require("../utils/runtest.utils");
function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i <= array.length-1; i++) {
    sum = sum + array[i];
  }
  var averageValue = sum / array.length;
  return averageValue;
}

module.exports = {
  calculateAverage,
};


//unit test
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 92, 100, 10];
const testCase = [
  { input: [arr1], expect: 3 },
  { input: [arr2], expect: 53.25 },
]
run(testCase, calculateAverage, 12);