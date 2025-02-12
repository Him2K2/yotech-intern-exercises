const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {number} number 
 * @returns 
 */
function sumOfNumber(number) {
    let arrayNumber = String(number).split(''); // Chuyển số thành chuỗi, rồi tách từng chữ số
    let numberSum = 0;

    for (let i = 0; i < arrayNumber.length; i++) {
        numberSum += Number(arrayNumber[i]); 
    }
    
    return numberSum;
}

//unit test
const testCase = [
    { input: [123], expect: 6 },
    { input: [1234], expect: 10 },
    { input: [12345], expect: 15 },
]
run(testCase, sumOfNumber, 15);
