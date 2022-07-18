"use strict";
//unknown type better than any type
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = "max";
//can only change userInput to = userName if inside if check
// if (typeof userInput === "string") {
//   userName = userInput;
// }
//never type
function generateanError(message, code) {
    throw { message: message, errorCode: code };
    //function with infinite loop will also never return anything
    // while (true ){}
}
generateanError("An error occurred!", 500);
