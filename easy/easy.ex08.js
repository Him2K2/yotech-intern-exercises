isSoNguyenTo = function (number01) {
  if (number01 < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number01); i++) {
    if (number01 % i === 0) return false;
  }

  return true;
};
console.log(isSoNguyenTo(5));
