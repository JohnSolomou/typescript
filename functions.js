"use strict";
//function return types void and undefined
function add(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    //:void will be void type
    console.log("Result:" + num); // this means this function doesn't have a  return statement thats why its showing void. if i add a return will give undefined
    return;
}
//function types and callbacks
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult1(add(5, 12));
// if printResult gets logged out to console will return undefined
console.log("printResult===", printResult1(add(5, 12)));
let combineValues; // this line says that whatever is stored in this variable has to be a function and nothing else. Function is a typescript type.this also is stating that it takes two numbers as parameters and returns a number.
combineValues = add;
console.log("combineValues===", combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log("addAndHandle result===", result);
});
