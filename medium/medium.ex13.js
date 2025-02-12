const { run } = require("../utils/runtest.utils");

/**
 *
 * @param {*} gioVao //giờ vào phongf
 * @param {*} gioRa // giờ ra phòng
 * @returns //số tiền phải trả cho giờ thuê không quá 24h
 */
function tinhTienNhaNghi(gioVao, gioRa) {
  let tongTien = 0;
  //qua dem
  if (gioVao < 24 && gioRa >= 24) {
    tongTien += 160;

    let gioRaSangHomSau = gioRa - 24;

    if (gioRaSangHomSau > 8) {
      let gioPhat = gioRaSangHomSau - 8;
      tongTien += gioPhat * 40;
    }
  } else {
    let soGio = gioRa - gioVao;

    if (soGio > 0) {
      if (soGio <= 2) {
        tongTien = soGio * 70;
      } else {
        tongTien = 2 * 70 + (soGio - 2) * 50;
      }
    }
  }

  return tongTien;
}
const testCase = [
  { input: [8, 15], expect: 390 },
  { input: [22, 26], expect: 160 },
  { input: [22, 23], expect: 70 },
];
run(testCase, tinhTienNhaNghi, 13);
