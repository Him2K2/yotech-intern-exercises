function sapXep(arr, cachSapXep) {
    switch (cachSapXep) {
        case "up": 
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
                    }
                }
            }
            break;

        case "down": 
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] < arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
                    }
                }
            }
            break;

    }
    return arr;
}


console.log(sapXep([5, 2, 9, 1, 5, 6], "up"));  
console.log(sapXep([5, 2, 9, 1, 5, 6], "down")); 
