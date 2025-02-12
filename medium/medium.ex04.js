const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} array1 
 * @param {*} array2 
 * @returns //array = arr2 - arr1
 */
function subArray(array1, array2) {
    let arraySub = [];
    for (let i = 0; i < array1.length; i++) {
      arraySub.push(array2[i] - array1[i]);
    }
  
    return arraySub;
  }
  //unitest
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  const testCase = [
    { input: [arr1, arr2], expect: [3, 3, 3] }
  ]
  run(testCase, subArray, 4);