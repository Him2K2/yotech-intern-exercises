/**
 *
 * @param {number} number01 the first number to swap
 * @param {number} number02 the second number to swap
 * @param {number} number03 the third number to swap
 * @returns [number, number, number] the swapped values of three numbers
*/
const { run } = require('../utils/runtest.utils.js');

function swapThreeNumbers(number01, number02, number03) {
  // if (number01 === number02) {
  //   return [number03, number02, number01];
  // }
  // if (number01 === number03) {
  //   return [number02, number01, number03];
  // }
  // return [number02, number03, number01];
  return number01 === number02
    ? [number03, number02, number01]
    : number01 === number03
    ? [number02, number01, number03]
    : [number02, number03, number01];
}
// module.exports = {
//   run: swapThreeNumbers
// };

// Unit tests
const testCase = [
  {input: [1, 2, 3], expect: [2, 3, 1]},
  {input: [2, 2, 5], expect: [5, 2, 2]},
  {input: [1, 3, 3], expect: [3, 3, 1]}
];

run(testCase, swapThreeNumbers, 1);

// function runtest(testCase,swapThreeNumbers){
//   for (let i = 0; i < testCase.length; i++) {
//     const {input, expect} = testCase[i];
//     const result = swapThreeNumbers(...input);
//     if (result.toString() === expect.toString()) {
//       console.log(`ex1: Test case ${i + 1}: Passed`);
//     } else {
//       console.log(`ex1: Test case ${i + 1}: Failed`);
//     }
//   }
// }
// runtest(testCase,swapThreeNumbers);


// for (a; a < 4; a++) {
//   [a, b, c] = swapThreeNumbers(a, b, c);
  
// }
// [a, b, c] = swapThreeNumbers(a, b, c);
// console.log(`ex1:testcase1:${a === 2 && b === 3 && c === 1}`);


// (a = 2), (b = 2), (c = 5);
// [a, b, c] = swapThreeNumbers(a, b, c);
// console.log(console.log(`ex1:testcase2:${a === 5 && b === 2 && c === 2}`));

// normal case
// abnormal case
// edge case
