/**
 * input: string 'up', 'down'
 * output: array sorted by input
 */
const arrayUtils = require('../utils/array.utils');
const { run } = require('../utils/runtest.utils');

function sort(array, direction) {
    return arrayUtils.sort(array, direction)
}

// console.log(sort([5, 2, 9, 1, 5, 6], "up"));  
// console.log(sort([5, 2, 9, 1, 5, 6], "down")); 

//unit test
let array = [5, 2, 9, 1, 5, 6];
const testCase = [
    {input: [array, "up"], expect: [1, 2, 5, 5, 6, 9]},
    {input: [array, "down"], expect: [9, 6, 5, 5, 2, 1]}
];
run(testCase, sort, 1);