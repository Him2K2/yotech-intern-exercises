const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} stringDad
 * @param {*} stringSon
 * @returns //return number of elements of string2 does not in string1
 */
function elementOfStringSonInStringDad(stringSon, stringDad) {
  let arrayDad = stringDad.split("");
  let arraySon = stringSon.split("");
  let count = 0;

  for (let i = 0; i < arrayDad.length; i++) {
    for (let j = 0; j < arraySon.length; j++) {
      if (arrayDad[i] === arraySon[j]) {
        count++;
      }
    }
  }

  return arrayDad.length - count;
}

//unit test
const testCase = [
  { input: ["abc", "acabcjfid"], expect: 4 },
  { input: ["a", "aaaaaaa"], expect: 0 },
];
run(testCase, elementOfStringSonInStringDad, 10);
