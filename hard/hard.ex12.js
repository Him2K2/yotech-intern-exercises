/**
 * return the index of the first tailing zero in the factorial of a number if dont have return -1
 */
const{calculateFactorial} = require('../utils/factorial.utils');
const { run } = require('../utils/runtest.utils');

function findTailNumber(number) {
    let result = calculateFactorial(number);
    let strResult = result.toString();

    for (let i = strResult.length - 1; i >= 0; i--) {
        if (strResult[i] == "0") {
            return i}
}
return -1;
}

//unit test
const testCase = [
    { input: [5], expect: 2 },
    { input: [1], expect: -1 },
    { input: [6], expect: 2 },
];
run(testCase, findTailNumber, 12);