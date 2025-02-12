const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} numberInteger input number is a integer
 * @returns // return chain of Fibonaci with number of elements is numberInteger
 */
function findChainFibonaci(numberInteger) {
  let chainFibonaci = [0, 1];
  for (let i = 2; i <= numberInteger; i++) {
    let next = chainFibonaci[i - 1] + chainFibonaci[i - 2];
    chainFibonaci.push(next);
  }

  return chainFibonaci;
}

//unit test
const testCase = [
  { input: [5], expect: [0, 1, 1, 2, 3, 5] },
  { input: [10], expect: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] },
];
run(testCase, findChainFibonaci, 16);