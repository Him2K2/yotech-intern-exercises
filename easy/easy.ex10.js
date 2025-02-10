function timGiaTriLonNhat(arr){
    for(let i = 0 ; i<= arr.length;i++){
        if(soNhoNhat<=arr[i]){
            soNhoNhat = arr[i];
        }
    }
    return soNhoNhat
}
arr=[1,2,3,4,5]
var soNhoNhat = arr[0];
console.log(timGiaTriLonNhat(arr));
