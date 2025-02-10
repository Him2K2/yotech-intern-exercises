function timChuoiFibonaci(SoNguyen){
    let chuoiFibonaci=[0,1];
    for(let i = 2 ; i<=SoNguyen ; i++){
        let next = chuoiFibonaci[i - 1] + chuoiFibonaci[i - 2];
        chuoiFibonaci.push(next);
    }

    return chuoiFibonaci;

}
console.log(timChuoiFibonaci(20));