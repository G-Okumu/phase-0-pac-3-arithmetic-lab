function add(a, b) {
    let result = a + b;
    return result;
}

function subtract(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;

}

function divide(a, b) {
    let result = a / b;
    return result;
}

function increment(n) {
    let result = n + 1;
    return result;
}

function decrement(n) {
    return n - 1;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    let parsedNumber = parseFloat(n);
    return parsedNumber;
}