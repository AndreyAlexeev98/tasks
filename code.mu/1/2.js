// №1
// Дано число. Выведите в консоль первую цифру этого числа.
function firstDigit(number) {
  console.log(String(Math.abs(number))[0]); // Math.abs - на случай если передадут отрисательное число
}
// №2
// Дано число. Выведите в консоль последнюю цифру этого числа.
function lastDigit(number) {
  const stringType = number.toString();
  console.log(stringType[stringType.length - 1]);
}
// №3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function sumFirstLastDigit(number) {
  if (!isFinite(number)) {
    throw new Error("Это не число!");
  }
  const stringType = Math.abs(number).toString();
  const firstDigit = Number(stringType[0]);
  const lastDigit = Number(stringType[stringType.length - 1]);
  const result = firstDigit + lastDigit;
  console.log(result);
}

// №4
// Дано число. Выведите количество цифр в этом числе.
function numberOfDigits(number) {
  return String(Math.abs(number)).length;
}

// №5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function isFirstDigitIdentical(firstNumber, lastNumber) {
  return String(Math.abs(firstNumber))[0] === String(Math.abs(lastNumber))[0];
}
