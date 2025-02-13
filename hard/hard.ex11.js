/**
 * Task description: Write a method that finds the last digit of the factorial of a number.
 */
const{calculateFactorial} = require('../utils/factorial.utils');
const { run } = require('../utils/runtest.utils');

function findTailNumber(number) {
    let result = calculateFactorial(number);
    let strResult = result.toString();

    for (let i = strResult.length - 1; i >= 0; i--) {
        if (strResult[i] !== "0") {
            return strResult[i]}
}
}

//unit test
const testCase = [
    { input: [5], expect: "2" },
    { input: [1], expect: "1" },
    { input: [0], expect: "1" },
]
run(testCase, findTailNumber, 11);