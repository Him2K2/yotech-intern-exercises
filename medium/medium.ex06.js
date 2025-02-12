const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} array1 
 * @param {*} array2 
 * @returns array = arr2 / arr1 if arr1[i] !== 0 else return -1
 */
function divArray(array1, array2) {
    let arrayDivision = [];
    for (let i = 0; i < array1.length; i++) {
      if(array1[i] === 0){
        return -1;
      }
    }
    for (let i = 0; i < array1.length; i++) {
      arrayDivision.push(array2[i] / array1[i]);
    }
  
    return arrayDivision;
  }

  //unit test
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, 5, 6];
  const testCase = [
    {input :[arr1,arr2],expect:[4,2.5,2]},
    {input :[arr3,arr1],expect:-1}
  ]
  run(testCase, divArray, 6);