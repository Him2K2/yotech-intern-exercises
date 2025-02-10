function catChuoi(str, batDau, soKyTu) {
  if (typeof str !== "string") {
    return -1;
  }
  if (batDau < 0 || soKyTu < 0 || batDau >= str.length) {
    return -1;
  }
  return str.substr(batDau, soKyTu);
}

console.log(catChuoi("Xin chào", 4, 5));
