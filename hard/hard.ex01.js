function daoNguocKyTuTrongTu(cau) {
  return cau
    .split(" ") // Tách câu thành mảng các từ
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
console.log(daoNguocKyTuTrongTu("Xin chào"));
