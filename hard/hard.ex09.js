/**
 *
 */

const { run } = require("../utils/runtest.utils.js");

function demChuoi(stringToBeSearch, stringSearch) {
  if (stringSearch.length > stringToBeSearch.length) return 0;
  if (stringSearch.length === 0) return -1;

  let count = 0;
  for (let i = 0; i <= stringToBeSearch.length - stringSearch.length; i++) {
    if (stringToBeSearch[i] === stringSearch[0]) {
      let found = true;
      for (let j = 1; j < stringSearch.length; j++) {
        if (stringToBeSearch[i + j] !== stringSearch[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        count++;
      }
    }
  }
  return count;
}

//unit test
const testCase = [
  { input: ["abc", "abc"], expect: 1 },
  { input: ["ababababab", "ab"], expect: 5 },
  { input: ["abcdef", "a"], expect: 1 },
  { input: ["abcaef", "a"], expect: 2 },
  { input: ["aabbaa", " "], expect: -1 },
  { input: ["aabbaa", "aasadasas"], expect: 0 },
];
run(testCase, demChuoi, 9);
