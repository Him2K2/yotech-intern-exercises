const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} array
 * @param {*} firstIndex
 * @param {*} lastIndex
 * @returns //array = arr[firstIndex] to arr[lastIndex]
 */
function cutArray(array, firstIndex, lastIndex) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (i >= firstIndex && i <= lastIndex) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
//unit test
const testCase = [{ input: [[1, 2, 3, 4, 5], 2, 3], expect: [3, 4] }];

let arr = [1, 2, 3, 4, 5];
run(testCase, cutArray, 7);

