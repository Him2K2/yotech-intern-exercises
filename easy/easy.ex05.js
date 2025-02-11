var demChan = 0;
function demSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      demChan++;
    }
  }
}
let arr = [1, 2, 3, 4, 5];
demSo(arr);

if (demChan === 3) {
  console.log(true);
}
