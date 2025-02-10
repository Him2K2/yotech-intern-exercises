function timViTri(chuoi1, chuoi2) {
  let mang1 = chuoi1.split("");// Chuyển chuỗi1  thành mảng ký tự
  let mang2 = chuoi2.split("");

  for (let i = 0; i <= mang2.length - mang1.length; i++) {
    let match = true;
    for (let j = 0; j < mang1.length; j++) {
      if (mang2[i + j] !== mang1[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

console.log(timViTri("abc","acabcjfid"));
