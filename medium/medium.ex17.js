/**
 * Viết hàm catChuoi(str, batDau, ketThuc) để cắt và trả về chuỗi mới từ vị trí bắt đầu đến vị trí kết thúc trong chuỗi str.
 */

const { run } = require("../utils/runtest.utils");

function catChuoi(str, batDau, ketThuc) {
  if (typeof str !== "string") {
    return -1;
  }
  if (batDau < 0 || ketThuc > str.length || batDau >= ketThuc) {
    return -1;
  }

  return str.slice(batDau, ketThuc);
}


//unit test
const testCase = [
  { input: ["hfshdjffjjidf", 4, 9], expect: "djffj" },
  { input: ["hfshdjffjjidf", 4, 1], expect: -1 },
]

run(testCase, catChuoi, 17);

