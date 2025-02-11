function tron2MangTangDan(arr1, arr2) {
    let arrTron = [];
    let i = arr1.length - 1, j = arr2.length - 1, k = 0;

    while (i >= 0 && j >= 0) {
        if (arr1[i] < arr2[j]) {
            arrTron[k++] = arr1[i--];
        } else {
            arrTron[k++] = arr2[j--];
        }
    }

    while (i >= 0) {
        arrTron[k++] = arr1[i--];
    }

    while (j >= 0) {
        arrTron[k++] = arr2[j--];
    }

    return arrTron;
}

// Test
console.log(tron2MangTangDan([5, 3, 1], [6, 4, 2])); 
