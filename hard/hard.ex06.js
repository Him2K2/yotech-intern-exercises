function tron2MangGiamDan(arr1, arr2) {
    let arrTron = [];
    let i = 0, j = arr2.length - 1, k = 0;

    while (i < arr1.length && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arrTron[k++] = arr1[i++];
        } else {
            arrTron[k++] = arr2[j--];
        }
    }

    while (i < arr1.length) {
        arrTron[k++] = arr1[i++];
    }

    while (j >= 0) {
        arrTron[k++] = arr2[j--];
    }

    return arrTron;
}

// Test
console.log(tron2MangGiamDan([9, 7, 5], [1, 3, 6])); 
