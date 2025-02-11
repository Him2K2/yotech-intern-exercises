/**
 * Sum of even numbers in an array
 */
const { run } = require("../utils/runtest.utils.js");

function sumEven(array) {
  return array.reduce((total, value) => {
    return value % 2 === 0 ? total + value : total;
  }, 0);
}
//Unit test
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testCase = [{ input: [array], expect: 30 }];
run(testCase, sumEven, 6);
