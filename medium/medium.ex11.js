/**
 * 
 * @param {number} a input number is a integer
 * @returns 
 */
function random(a) {
    return Math.floor(Math.random() * a);
}

//unit test
let a =10
let b = random(a);
if (typeof b === "number" && b >0 && b<=10) {
    console.log('ex11: Test case 1: Passed');
}
