function hieuMang(arr1, arr2) {
    let mangHieu = [];
    for (let i = 0; i < arr1.length; i++) {
      mangHieu.push(arr2[i] - arr1[i]);
    }
  
    return mangHieu;
  }
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log(hieuMang(arr1, arr2));