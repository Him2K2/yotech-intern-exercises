var demchan = 0;
function demSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      demchan++;
    }
  }
}
let arr = [1, 2, 3, 4, 5];
demSo(arr);

if (demchan === 3) {
  console.log(true);
}
