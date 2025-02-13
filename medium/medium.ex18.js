const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} str //chuỗi cần cắt
 * @param {*} batDau //vị trí bắt đầu cắt
 * @param {*} soKyTu //số ký tự cần cắt
 * @returns //chuỗi mới sau khi cắt
 */
function catChuoi(str, batDau, soKyTu) {
  if (typeof str !== "string") {
    return -1;
  }
  if (batDau < 0 || soKyTu < 0 || batDau >= str.length) {
    return -1;
  }
  return str.substr(batDau, soKyTu);
}


//unit test
const testCase = [
  { input: ["Xin Chào", 4, 4], expect: "Chào" },
  { input: ["hfshdjffjjidf", 4, -1], expect: -1 },
]
run(testCase, catChuoi, 18);