function tinhTongCuaMotSoNguyen(soNguyen) {
    let mangChuSo = String(soNguyen).split(''); // Chuyển số thành chuỗi, rồi tách từng chữ số
    let tongChuSo = 0;

    for (let i = 0; i < mangChuSo.length; i++) {
        tongChuSo += Number(mangChuSo[i]); 
    }
    
    return tongChuSo;
}

console.log(tinhTongCuaMotSoNguyen(1234));
