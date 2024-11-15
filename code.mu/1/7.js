// №1
// Дана строка:
// 'abcde'
// Получите массив букв этой строки.
function stringToArrayString(str) {
  return str.split("");
}

// №2
// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.
function numberToArrayNumber(number) {
  const arrayString = String(number).split("");
  const arrayNumbers = arrayString.map((number) => +number);
  return arrayNumbers;
  // или return String(number).split("").map(Number);
}

// №3
// Дано некоторое число: 12345
// Переверните его: 54321
function reverseNumber(number) {
  const arrayString = number.toString().split("");
  const reverseArray = [];

  for (let i = arrayString.length - 1; i >= 0; i--) {
    reverseArray.push(parseInt(arrayString[i]));
  }

  return +reverseArray.join("");
  // Оптимальное решение return +number.toString().split("").reverse().join("");
}

// №4
// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.
function sumNumbers(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, num) => (sum += +num), 0);
  // Из за 2х циклов (в split и reduce) - решение не оптимальное
  // Оптимальное:
  // let sum = 0;
  // while (number) {
  //   sum += number % 10; // Берём последнюю цифру
  //   number = Math.floor(number / 10); // Убираем последнюю цифру
  // }
  // return sum;
}
