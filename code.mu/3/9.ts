// №1
// Дана строка. Проверьте, что эта строка состоит только из цифр.

function includesOnlyDigit(text: string): boolean {
  return /^\d+$/.test(text);
}

// №2
// Дана строка. Проверьте, что эта строка состоит только из четных цифр.
function allEvenNumbers(text: string): boolean {
  return text.split("").every((n) => +n % 2 === 0);
}

// №3
// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
function filterDoubleZeroNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => !num.toString().includes("00"));
}

// №4
// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
function findNumbersWithDigitSum(to: number, sum: number): number[] {
  const numbers = [];
  for (let i = 1; i <= to; i++) {
    const digitSum = i
      .toString()
      .split("")
      .reduce((acc, num) => acc + +num, 0);
    if (digitSum === sum) {
      numbers.push(i);
    }
  }
  return numbers;
}

// №5
// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

function createArrays(): number[][] {
  const result: number[][] = [];
  let counter = 1;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[i].push(counter);
      counter++;
    }
  }

  return result;
}
