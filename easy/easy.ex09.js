/**
 * 
 * @param {number} soChia 
 * @param {number} soBiChia 
 * @returns Find the remainder when dividing two numbers
 */

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
console.log(findBalance(5,2))
