const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} arr array input 
 * @returns array swap
 */
function swapArray(arr){
    let arraySwap = [];
    for (let i = arr.length - 1; i >= 0; i--) { 
        arraySwap.push(arr[i]); 
      }
      return arraySwap;
}
module.exports = {
  swapArray,
};


//unit test
let arr = [1, 2, 3, 4, 5];
const testCase = 
[{ input: [arr], expect: [5, 4, 3, 2, 1] }];
run(testCase, swapArray, 13);
