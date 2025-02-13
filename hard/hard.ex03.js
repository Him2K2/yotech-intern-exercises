const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} array1 //aray input sorted increment
 * @param {*} array2 //array input sorted increment
 * @returns //array = arr2 + arr1 increment
 */
function merge2Array(array1, array2) {
  let arrMerge = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      arrMerge[k++] = array1[i++];
    } else {
      arrMerge[k++] = array2[j++];
    }
  }

  while (i < array1.length) {
    arrMerge[k++] = array1[i++];
  }
  while (j < array2.length) {
    arrMerge[k++] = array2[j++];
  }

  return arrMerge;
}
//unit test
const testCase = [
  {
    input: [
      [1, 3, 5],
      [2, 4, 6],
    ],
    expect: [1, 2, 3, 4, 5, 6],
  },
];
run(testCase, merge2Array,3);
