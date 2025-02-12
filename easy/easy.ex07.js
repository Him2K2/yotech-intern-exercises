/**
 * Sum of odd numbers in an array
 */
const { run } = require("../utils/runtest.utils.js");

function oddEven(array) {
  return array.reduce((total, value) => {
    return value % 2 === 1 ? total + value : total;
  }, 0);
}
module.exports = {
  oddEven,
};
//Unit test
let array = [1, 2, 3, 4, 5];
const testCase = [{ input: [array], expect: 9 }];
run(testCase, oddEven, 7);
