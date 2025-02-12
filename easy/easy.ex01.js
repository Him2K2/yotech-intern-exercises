/**
 *
 * @param {number} number01 the first number to swap
 * @param {number} number02 the second number to swap
 * @param {number} number03 the third number to swap
 * @returns [number, number, number] the swapped values of three numbers
*/
const { run } = require('../utils/runtest.utils.js');

function swapThreeNumbers(number01, number02, number03) {
  return number01 === number02
    ? [number03, number02, number01]
    : number01 === number03
    ? [number02, number01, number03]
    : [number02, number03, number01];
}
module.exports = {
  swapThreeNumbers,
};

// Unit tests
const testCases = [
  {input: [1, 2, 3], expect: [2, 3, 1]},
  {input: [2, 2, 5], expect: [5, 2, 2]},
  {input: [1, 3, 3], expect: [3, 3, 1]}
];

run(testCases, swapThreeNumbers, 1);
