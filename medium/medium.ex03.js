function tongMang(arr1, arr2) {
  let mangTong = [];
  for (let i = 0; i < arr1.length; i++) {
    mangTong.push(arr1[i] + arr2[i]);
  }

  return mangTong;
}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(tongMang(arr1, arr2));
