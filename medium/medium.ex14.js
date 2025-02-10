function tinhThue(mangLuong) {
    let tienThue = 0;
    for (let i = 0; i < mangLuong.length; i++) { 
        if (mangLuong[i] >= 50) {
            tienThue += mangLuong[i] * 2 / 10;
        } 
        else if (mangLuong[i] > 20 && mangLuong[i] < 50) {
            tienThue += mangLuong[i] * 1 / 10;
        } 
        else {
            tienThue += mangLuong[i] * 5 / 100;
        }
    }
    return tienThue;
}

console.log(tinhThue([50, 40, 30, 20])); 
