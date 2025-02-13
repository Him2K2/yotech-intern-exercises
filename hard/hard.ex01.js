const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} inputString 
 * @returns //reverse string
 */
function reverseString(inputString) {
  return inputString
    .split(" ") 
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

//unit test
const testCase = [
  { input: ["Ia am"], expect: "aI ma" },
  { input: ["xin chào"], expect: "nix oàhc" },
]
  
run(testCase, reverseString, 1);