const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} array1 //array input sorted increment
 * @param {*} array2 //array input sorted increment
 * @returns //array = arr2 + arr1 decreased
 */
function merge2ArrayDecreased(array1, array2) {
  let arrMerge = [];
  let i = array1.length - 1,
    j = array2.length - 1,
    k = 0;

  while (i >= 0 && j >= 0) {
    if (array1[i] > array2[j]) {
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
      [1, 3, 5],
      [2, 4, 6],
    ],
    expect: [6, 5, 4, 3, 2, 1],
  },
];
run(testCase, merge2ArrayDecreased, 6);

