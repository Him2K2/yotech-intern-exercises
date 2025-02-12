/**
 *
 * @param {number} number1
 * @param {number} number2
 * @returns String report the result of two numbers
 */

const { run } = require("../utils/runtest.utils.js");
function dongNhat(number1, number2) {
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    return "even number";
  } else if (number1 % 2 === 1 && number2 % 2 === 1) {
    return "odd number";
  } else {
    return "1 even number, 1 odd number";
  }
}
module.exports = {
  dongNhat,
};

// Unit test
const testCase = [
  { input: [2, 4], expect: "even number" },
  { input: [1, 3], expect: "odd number" },
  { input: [1, 4], expect: "1 even number, 1 odd number" },
];

run(testCase, dongNhat, 3);
