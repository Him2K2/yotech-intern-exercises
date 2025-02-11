/**
 * input: string 'up', 'down'
 * output: array sorted by input
 */
const arrayUtils = require('../utils/array.utils');

function sort(array, direction) {
    return arrayUtils.sort(array, direction)
}

console.log(sort([5, 2, 9, 1, 5, 6], "up"));  
console.log(sort([5, 2, 9, 1, 5, 6], "down")); 

