"use strict";
function add1(n1, n2, showResult, phrase) {
    if (showResult) {
        const result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "result is: ";
const result = add1(number1, number2, printResult, resultPhrase);
