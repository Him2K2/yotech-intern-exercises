const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} stringDad 
 * @param {*} stringSon 
 * @returns //return index of string2 in string1
 */
function findIndexStartString2InString1(stringDad, stringSon) {
  let string1 = stringDad.split("");
  let string2 = stringSon.split("");

  for (let i = 0; i <= string2.length - string1.length; i++) {
    let match = true;
    for (let j = 0; j < string1.length; j++) {
      if (string2[i + j] !== string1[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

//unit test
let string1 = "abc";
let string2 = "acabcjfid";
let string3 = "aaaaaaa";

const testCase = [
  { input: [string1, string2], expect: 2 },
  { input: [string1, string3], expect: -1 },
]
run(testCase, findIndexStartString2InString1, 8);