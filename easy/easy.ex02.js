function tinhMu(number01, number02) {
   if (number02 === 0) return 1;
   if (number02 < 0) return 1 / tinhMu(number01, -number02);
   return number01 * tinhMu(number01, number02 - 1);
}

// Unit test
let testGiaTriBinhThuong = tinhMu(5, 2); 
let testGiaTriBang0 = tinhMu(5, 0);
let testGiaTriAm = tinhMu(2, -3); 

let test1 = testGiaTriBinhThuong === 25 ? 1 : 0;
let test2 = testGiaTriBang0 === 1 ? 1 : 0;
let test3 = testGiaTriAm === 1 / 8 ? 1 : 0;

if (test1 === 1 && test2 === 1 && test3 === 1) {
   console.log(true);
} else {
   console.log(false);
}
