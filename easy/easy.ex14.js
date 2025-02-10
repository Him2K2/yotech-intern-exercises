function timSo(number01, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number01) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4];
console.log(timSo(0, arr));


