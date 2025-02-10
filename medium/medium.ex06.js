function thuongMang(arr1, arr2) {
    let mangThuong = [];
    for (let i = 0; i < arr1.length; i++) {
      mangThuong.push(arr2[i] / arr1[i]);
    }
  
    return mangThuong;
  }
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log(thuongMang(arr1, arr2));