/**
 * 
 * @param {*} a number
 * @returns //random number in range -a to a
 */
function randomIntInRange(a) {
    return Math.floor(Math.random() * (2 * a + 1)) - a;
}

a = 10;
//tets case
let b = randomIntInRange(a);
if (typeof b === "number" && b >(-a) && b<=a) {
    console.log('ex12: Test case 1: Passed');
}