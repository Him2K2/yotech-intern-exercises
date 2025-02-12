function calculateFactorial(factorialNumber) {
    if (factorialNumber === 0 || factorialNumber === 1) return 1;
    return factorialNumber * calculateFactorial(factorialNumber - 1);
}

module.exports = {
calculateFactorial,
};