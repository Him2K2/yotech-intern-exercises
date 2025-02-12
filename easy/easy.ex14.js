const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} number01 input number 
 * @param {*} array  input array
 * @returns index of the number in the array if it exists, otherwise return -1
 */
function findNumber(number01, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number01) {
      return i;
    }
  }
  return -1;
}
module.exports = {
  findNumber,
};

//unit test
let arr = [1, 2, 3, 4];
const testCase = [
  { input: [3, arr], expect: 2 },
  { input: [5, arr], expect: -1 },
];
run(testCase, findNumber, 14);



