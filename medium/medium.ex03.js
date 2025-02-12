const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {array} array1 
 * @param {array} array2 
 * @returns array = arr1 + arr2
 */
function arraySum(array1, array2) {
  let sumArray = [];
  for (let i = 0; i < array1.length; i++) {
    sumArray.push(array1[i] + array2[i]);
  }

  return sumArray;
}

//unit test
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, 5, 6, 7];
let arr4 = [-2, 2, 3, 4];
const testCase = [
  { input: [arr1, arr2], expect: [5, 7, 9] },
  {input: [arr3,arr4],expect:[-2,7,9,11]}
]
run(testCase, arraySum, 3);