function runtest(testCase, func, number) {
  for (let i = 0; i < testCase.length; i++) {
    const { input, expect } = testCase[i];
    const result = func(...input);
    const resultString = JSON.stringify(result); 
    const expectString = JSON.stringify(expect);

    if (resultString === expectString) {
      console.log(`ex${number}: Test case ${i + 1}: Passed`);
    } else {
      console.log(`ex${number}: Test case ${i + 1}: Failed`);
    }
  }
}

module.exports = {
  run: runtest,
};
