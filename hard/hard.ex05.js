const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} array1 //array input sorted decreased
 * @param {*} array2 //array input sorted decreased
 * @returns //array = arr2 + arr1 increment
 */
function merge2ArrayIncrement(array1, array2) {
  let arrMerge = [];
  let i = array1.length - 1,
    j = array2.length - 1,
    k = 0;

  while (i >= 0 && j >= 0) {
    if (array1[i] < array2[j]) {
      arrMerge[k++] = array1[i--];
    } else {
      arrMerge[k++] = array2[j--];
    }
  }

  while (i >= 0) {
    arrMerge[k++] = array1[i--];
  }

  while (j >= 0) {
    arrMerge[k++] = array2[j--];
  }

  return arrMerge;
}

// Test
const testCase = [
  {
    input: [
      [5 , 3, 1],
      [6, 4, 2],
    ],
    expect: [1, 2, 3, 4, 5, 6],
  },
];
run(testCase, merge2ArrayIncrement, 5);
