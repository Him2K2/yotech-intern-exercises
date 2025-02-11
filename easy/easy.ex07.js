const array = [1, 2, 3];

const sumEven = array.reduce((total, value) => {
    return value % 2 === 1 ? total + value : total;
}, 0);


//Unit test 
if(sumEven === 4){
    console.log(true);
}
