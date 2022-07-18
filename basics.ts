function add1(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): any {
  if (showResult) {
    const result = n1 + n2;
    console.log(phrase + result);
  } else {
    return result;
  }
}
const number1: number = 5;
const number2: number = 2.8;
const printResult = true;
const resultPhrase: string = "result is: ";
const result = add1(number1, number2, printResult, resultPhrase);
