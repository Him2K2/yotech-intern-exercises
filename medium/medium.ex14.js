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

console.log(tinhThue([50, 40, 30, 20]));
