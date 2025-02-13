/**
 * Write a function that takes an array of integers and returns an array of the same length, where the values at each index are the product of all the integers in the input array except for the integer at that index.
 */
const {swapTwoNumberInAnArrayByIndex} = require('../utils/array.utils');
function mergeArrays(array){
    for(let i = array.length - 1 ; i >= 0 ; i--) {
        let j = Math.floor(Math.random() * (i + 1));
       swapTwoNumberInAnArrayByIndex(array, i, j);
    }
    return array;
}

function runtest(testCase, func, number) {
    for (let i = 0; i < testCase.length; i++) {
      const { input, expect } = testCase[i];
      const result = func(...input[0]);
      const resultString = JSON.stringify(result); 
      const expectString = JSON.stringify(expect);
  
      if (resultString !== expectString) {
        console.log(`ex${number}: Test case ${i + 1}: Passed`);
      
      } else {
        console.log(`ex${number}: Test case ${i + 1}: Failed`);
      }
    }
  }
  // console.log(mergeArrays(array));

//unit test
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
runtest([{input:[array], expect:array}], mergeArrays, 10);
