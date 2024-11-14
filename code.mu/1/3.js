// №1
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function getPreLastLetter(str) {
  const result = str.length > 1 ? str[str.length - 2] : undefined;
  console.log(result);
}
// №2
// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function isNumberDiv(firstNumber, secondNumber) {
  return secondNumber !== 0 && firstNumber % secondNumber === 0;
}
