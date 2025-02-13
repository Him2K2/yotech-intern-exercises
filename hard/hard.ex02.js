/**
 * 
 * @returns //random number in range a to b
 */
function random() {
    return Math.random(); 
}

function randomRange(numberA, numberB) {
    if(numberB<numberA) return -1;
    return Math.floor(numberA + random() * (numberB - numberA)); 
}

//unit test
let a = 1;
let b = 3;
let c = randomRange(a, b);
if(c >= a && c <= b){
    console.log('ex2: Test case 1: Passed');
}
