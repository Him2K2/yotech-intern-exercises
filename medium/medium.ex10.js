function tongSoPhanTu(chuoi1, chuoi2) {
    let mang1 = chuoi1.split(""); 
    let mang2 = chuoi2.split(""); 
    let count = 0;

    for (let i = 0; i < mang1.length; i++) {
        for (let j = 0; j < mang2.length; j++) {
            if (mang1[i] === mang2[j]) {
                count++;
            }
        }
    }

    return mang1.length - count;
}