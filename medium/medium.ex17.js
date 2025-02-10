function catChuoi(str, batDau, ketThuc) {
  if (typeof str !== "string") {
    return -1;
  }
  if (batDau < 0 || ketThuc > str.length || batDau >= ketThuc) {
    return -1;
  }

  return str.slice(batDau, ketThuc);
}


console.log(catChuoi("hfshdjffjjidf", 4, 9));

