/**
 * 
 * @param {number} number base number
 * @param {number} number02 exponent number
 * @returns number the result of number01 to the power of number02
 */
const { run } = require('../utils/runtest.utils.js');


function tinhMu(number01, number02) {
   if (number02 === 0) return 1;
   if (number02 < 0) return 1 / tinhMu(number01, -number02);
   return number01 * tinhMu(number01, number02 - 1);
}
module.exports = {
   tinhMu,
 };


// Unit test
const testCase = [
   { input: [5, 2], expect: 25 },
   { input: [5, 0], expect: 1 },
   { input: [2, -3], expect: 1 / 8 }
];

run(testCase, tinhMu, 2);
// let testGiaTriBinhThuong = tinhMu(5, 2); 
// let testGiaTriBang0 = tinhMu(5, 0);
// let testGiaTriAm = tinhMu(2, -3); 

// let test1 = testGiaTriBinhThuong === 25 ? 1 : 0;
// let test2 = testGiaTriBang0 === 1 ? 1 : 0;
// let test3 = testGiaTriAm === 1 / 8 ? 1 : 0;

// if (test1 === 1 && test2 === 1 && test3 === 1) {
//    console.log(true);
// } else {
//    console.log(false);
// }
