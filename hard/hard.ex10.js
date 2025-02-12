const {swapTwoNumberInAnArrayByIndex} = require('../utils/array.utils');
function mergeArrays(array){
    for(let i = array.length - 1 ; i >= 0 ; i--) {
        let j = Math.floor(Math.random() * (i + 1));
       swapTwoNumberInAnArrayByIndex(array, i, j);
    }
    return array;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mergeArrays(array));