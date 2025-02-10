function tinhTrungBinh(arr) {
  let tong = 0;
  for (let i = 0; i <= arr.length-1; i++) {
    tong = tong + arr[i];
  }
  var giaTriTrungBinh = tong / arr.length;
  return giaTriTrungBinh;
}
arr = [1, 2, 3, 4, 5];

console.log(tinhTrungBinh(arr));
