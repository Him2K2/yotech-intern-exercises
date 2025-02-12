/**
 * 
 * @param {number} soChia 
 * @param {number} soBiChia 
 * @returns Find the remainder when dividing two numbers
 */
const { run } = require('../utils/runtest.utils.js');
function findRemainder(soChia,soBiChia){
    if(soBiChia===0){
        return false;
    }
    let soDu;
    if(soChia<soBiChia){
        soDu = soBiChia - (soBiChia - soChia);
    }
   while(soChia>=soBiChia){
    soChia = soChia - soBiChia;
   }
   return soChia
}
module.exports = {
    findRemainder,
};

//unit test
const testCase = [
    {input: [5,2], expect: 1},
    {input: [5,0], expect: false},
    {input: [5,5], expect: 0}
];

run(testCase, findRemainder, 9);