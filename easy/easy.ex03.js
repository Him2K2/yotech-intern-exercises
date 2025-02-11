function dongNhat(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return "cung chan";
  } else if (a % 2 === 1 && b % 2 === 1) {
    return 'cung " le';
  } else {
    return "1 chẵn, 1 lẻ";
  }
}

// Unit test
let testDongnhat = dongNhat(2, 4);
let test1 = testDongnhat === "cung chan" ? 1 : 0;
let testLe = dongNhat(1,3);
let test2 = testLe ==="cung le"?1:0;
let test1Chan1Le = dongNhat(1,4);
let tets3 = test1Chan1Le==="1 chẵn, 1 lẻ"? 1 : 0;

if(test1 === 1 && test2 && tets3){
  console.log(true);
}
