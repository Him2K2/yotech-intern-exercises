/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns String report the result of two numbers
 */

const { run } = require('../utils/runtest.utils.js');
function dongNhat(number1, number2) {
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    return "even number";
  } else if (number1 % 2 === 1 && number2 % 2 === 1) {
    return 'odd number';
  } else {
    return "1 even number, 1 odd number";
  }
}
module.exports = {
  dongNhat,
};


// Unit test
const testCase = [
  { input: [2, 4], expect: "even number" },
  { input: [1, 3], expect: 'odd number' },
  { input: [1, 4], expect: "1 even number, 1 odd number" }
];

 run(testCase, dongNhat, 3);




// let testDongnhat = dongNhat(2, 4);
// let test1 = testDongnhat === "cung chan" ? 1 : 0;
// let testLe = dongNhat(1,3);
// let test2 = testLe ==="cung le"?1:0;
// let test1Chan1Le = dongNhat(1,4);
// let tets3 = test1Chan1Le==="1 chẵn, 1 lẻ"? 1 : 0;

// if(test1 === 1 && test2 && tets3){
//   console.log(true);
// }
