/**
 * 
 * @param {Array} array1 //aray input 1
 * @param {Array} array2 //array input 2
 * @returns array = arr1 + arr2
 */

const { run } = require("../utils/runtest.utils");

function linkArray(array1, array2) {
  let array = [];
  for (let i = 0; i < array1.length; i++) {
    array.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    array.push(array2[i]);
  }
  return array;
}
//unit test
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
run([{ input: [arr1, arr2], expect: [1, 2, 3, 4, 5, 6] }], linkArray, 2);



