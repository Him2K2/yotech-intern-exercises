/**
 * 
 * @param {*} number01 
 * @param {*} number02 
 * @param {*} number3 
 * @returns 
 */
function swapThreeNumbers(number01, number02, number3) {
  if (number01 === number02) {
    return [number3, number02, number01];
  } else if (number01 === number3) {
    return [number02, number01, number3];
  } else {
    return [number02, number3, number01];
  }
}

// Unit tests
let a = 1, b = 2, c = 3;
[a, b, c] = swapThreeNumbers(a, b, c);
if (a === 2 && b === 3 && c === 1) {
    console.log(true);
} else {
    console.log(false);
}

a = 2, b = 2, c = 5;
[a, b, c] = swapThreeNumbers(a, b, c);
if (a === 5 && b === 2 && c === 2) {
    console.log(true);
} else {
    console.log(false);
}

// normal case
// abnormal case
// edge case

