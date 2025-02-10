function catMang( arr, viTriDau, viTriCuoi){
    let mangMoi=[];
 for(let i = 0; i<=arr.length; i++){
     if(i>=viTriDau && i<=viTriCuoi ){
        mangMoi.push(arr[i])
     }
 }
 return mangMoi;
}

let arr = [1,2,3,4,5];
console.log(catMang(arr,2,3));

