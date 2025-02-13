const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} array1 //aray input sorted decreased
 * @param {*} array2 //array input sorted decreased
 * @returns //array = arr2 + arr1 decreased
 */
function mergeArray(array1, array2) {
    let arrayMerge = [];
    let i = 0, j = 0, k = 0;
  
    while (i < array1.length && j < array2.length) {
      if (array1[i] > array2[j]) {
        arrayMerge[k++] = array1[i++];
      } else {
        arrayMerge[k++] = array2[j++];
      }
    }
  
    while (i < array1.length) {
      arrayMerge[k++] = array1[i++];
    }
  
    while (j < array2.length) {
      arrayMerge[k++] = array2[j++];
    }
  
    return arrayMerge;
  }
  
  //unit test

  const testCase = [
    {
      input: [
        [5, 3, 1],
        [6, 4, 2],
      ],
      expect: [6, 5, 4, 3, 2, 1],
    },
  ]
  run(testCase, mergeArray, 4);