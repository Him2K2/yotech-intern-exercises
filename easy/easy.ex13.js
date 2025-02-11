function daoNguocMang(arr){
    let mangDaoNguoc = [];
    for (let i = arr.length - 1; i >= 0; i--) { 
        mangDaoNguoc.push(arr[i]); 
      }
      return mangDaoNguoc;
}
let arr = [1, 2, 3, 4, 5];
console.log(daoNguocMang(array))
