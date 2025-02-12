const{calculateFactorial} = require('../utils/factorial.utils');

function findTailNumber(number) {
    let result = calculateFactorial(number);
    let strResult = result.toString();

    for (let i = strResult.length - 1; i >= 0; i--) {
        if (strResult[i] !== "0") {
            return strResult[i]}
}
}
console.log(findTailNumber(5)); //returns 2
