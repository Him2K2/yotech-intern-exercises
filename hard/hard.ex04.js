function tron2MangGiamDan(arr1, arr2) {
    let arrTron = [];
    let i = 0, j = 0, k = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        arrTron[k++] = arr1[i++];
      } else {
        arrTron[k++] = arr2[j++];
      }
    }
  
    while (i < arr1.length) {
      arrTron[k++] = arr1[i++];
    }
  
    while (j < arr2.length) {
      arrTron[k++] = arr2[j++];
    }
  
    return arrTron;
  }
  
  console.log(tron2MangGiamDan([5, 3, 1], [6, 4, 2]));
  