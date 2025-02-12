const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} stringDad 
 * @param {*} stringSon 
 * @returns //return number of elements of string2 in string1
 */
function elementOfStringSonInStringDad(stringDad, stringSon) {
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

    return count;
}

//unit test
const testCase = [
    { input: ["abc", "acabcjfid"], expect: 5 },
    { input: ["abc", "aaaaaaa"], expect: 7 },
]
run(testCase, elementOfStringSonInStringDad, 9);