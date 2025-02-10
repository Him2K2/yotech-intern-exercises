function thuongMang(arr1, arr2) {
    let mangTich = [];
    for (let i = 0; i < arr1.length; i++) {
      mangTich.push(arr2[i] * arr1[i]);
    }
  
    return mangTich;
  }
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log(thuongMang(arr1, arr2));