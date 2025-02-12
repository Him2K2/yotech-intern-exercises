const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} mangLuong //mảng lương của 1 người theo nhiều tháng theo hệ số 0.000001 
 * @returns //tính thuế thu nhập cá nhân của người đó
 */
function tinhThue(mangLuong) {
  let tienThue = 0;
  for (let i = 0; i < mangLuong.length; i++) {
    const mangLuongItem = mangLuong[i];
    let multiplier = 1;
    if (mangLuongItem >= 50) {
      multiplier = 0.2;
      tienThue+=(mangLuongItem*multiplier);
    } else if (mangLuongItem > 20 && mangLuongItem < 50) {
      multiplier = 0.1;
      tienThue+=(mangLuongItem*multiplier);
    } else {
      multiplier = 0.05;
      tienThue+=(mangLuongItem*multiplier);
    }
    
  }
  return tienThue;
}

//unit test
const testCase = [
  { input: [[20, 30, 50, 60]], expect: 26 },
  { input: [[10, 20, 30, 40]], expect: 8.5 },
  { input: [[5, 10, 15, 20]], expect: 2.5},
]
run(testCase, tinhThue, 14);