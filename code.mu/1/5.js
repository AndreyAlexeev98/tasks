// №1
// Найдите сумму всех целых чисел от 1 до 100.
function sumAllNaturalNumbers() {
  let result = 0;
  // но быстрее использовать формулу арифметической прогрессии (100 * (100 + 1)) / 2;
  for (let i = 1; i <= 100; i++) {
    result += i;
  }
  return result;
}

// №2
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
function sumEvenNumbersInRange(startRange, endRange) {
  let accumulator = 0;
  for (let i = startRange; i <= endRange; i++) {
    if (i % 2 === 0) {
      accumulator += i;
    }
  }

  return accumulator;
}

sumEvenNumbersInRange(1, 100);

// №3
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
function sumAllNaturalNoEvenNumbers(start, end) {
  let accumulator = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      accumulator += i;
    }
  }

  return accumulator;
}

sumAllNaturalNoEvenNumbers(1, 100);

// №4
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
function remainderDivision(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw new Error("Деление на ноль невозможно");
  }
  return firstNumber % secondNumber;
}

// №5
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
function iteratingEnd(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}
