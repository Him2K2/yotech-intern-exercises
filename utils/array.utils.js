function swapTwoNumberInAnArrayByIndex(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];  
}

function sortUp(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapTwoNumberInAnArrayByIndex(array, j, j+1);
            }
        }
    }
    return array;
}

function sortDown(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                swapTwoNumberInAnArrayByIndex(array, j, j+1);
            }
        }
    }
    return array;
}

function sort(array, direction) {
    switch (direction) {
        case 'up':
            return sortUp(array);
        case 'down':
            return sortDown(array);
        default:
            return sortUp(array);
    }
}

module.exports = {
    swapTwoNumberInAnArrayByIndex,
    sort
}