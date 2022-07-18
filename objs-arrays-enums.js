"use strict";
//typescript types
//number 1,2,4,5
//string "hi",'hi',`hi`
//boolean tru,false
//objects
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple type fixed length array.
// } = {
//   name: "john",
//   age: 40,
//   //array
//   hobbies: ["Sports", "Cooking", "Fishing", "coding"],
//   role: [2, "author"], //tuples
// };
// console.log(person.name, person.age);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()) here we get an error because map does not exist on type string.
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const Author = 2; use enum instead of all the consts here
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {})); // can add your own values to identifiers ADMIN = 5,READ_ONLY = 100, Author =200 and also strings or mix.
const person = {
    name: "john",
    age: 40,
    //array
    hobbies: ["Sports", "Cooking", "Fishing", "coding"],
    role: Role.ADMIN,
};
console.log(person.name, person.age);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) here we get an error because map does not exist on type string.
}
if (person.role === Role.Author) {
    console.log("is Author");
}
//any
