const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEven = arr.reduce((total, value) => {
    return value % 2 === 0 ? total + value : total;
}, 0);


//Unit test 
if(sumEven === 30){
    console.log(true);
    
}
