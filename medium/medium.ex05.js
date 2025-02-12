const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} array1 
 * @param {*} array2 
 * @returns array = arr2 * arr1
 */
function mulArray(array1, array2) {
    let arrayMultiplication = [];
    for (let i = 0; i < array1.length; i++) {
      arrayMultiplication.push(array2[i] * array1[i]);
    }
  
    return arrayMultiplication;
  }
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  
  //unit test
  const testCase = [
    {input :[arr1,arr2],expect:[4,10,18]}
  ]
  run(testCase, mulArray, 5);