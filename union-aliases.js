"use strict";
//union type
function combine(input1, input2, resultConversion //union type its like you are createing a specific setting to be used later and only that what was set.
) {
    let result;
    //may need runtime check like one below for using union types
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "as-number"); // in the third spot only "as-number" or "as-text" can be put to be used. in this case its in the console.log
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("john", "max", "as-text");
console.log(combinedNames);
//type alias and objects
//before
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// //after using type aliases with objects
// type User = { name: string; age: number };
// function greet(user: User) {
//   console.log("Hi, I am " + user.name);
// }
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
