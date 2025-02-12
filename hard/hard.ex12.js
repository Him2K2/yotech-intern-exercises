const{calculateFactorial} = require('../utils/factorial.utils');

function findTailNumber(number) {
    let result = calculateFactorial(number);
    let strResult = result.toString();

    for (let i = strResult.length - 1; i >= 0; i--) {
        if (strResult[i] == "0") {
            return i}
}
}
console.log(findTailNumber(5)); //fisrt number 0 index 2 
