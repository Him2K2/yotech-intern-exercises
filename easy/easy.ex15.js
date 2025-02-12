/**
 * Factorial
 */
const { calculateFactorial } = require("../utils/factorial.utils");
const { run } = require("../utils/runtest.utils");

// Unit test
let number = 5;
const testCase = [{ input: [5], expect: 120 }];
run(testCase, calculateFactorial, 15);
