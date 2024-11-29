// №1
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

function howNotNaturalInteger(arr) {
  // Линейная сложность O(n)
  // let count = 0;

  // for (let i = 0; i < arr.length; i++) {
  //     if(arr[i] < 0) {
  //         count++
  //     }
  // }
  // более лаконичная запись, сложность O(n)
  //   for (const num of arr) {
  //     if (num < 0) count++;
  //   }

  // return count;

  // Линецная сложность O(n), но более коротная запись
  return arr.reduce((count, num) => {
    return num < 0 ? count + 1 : count;
  }, 0);
}

// №2
// Дан массив с числами. Оставьте в нем только положительные числа.
const numbers = [-1, 0, 1, 2];

// сложность O(n**2), т.к. внутри цикла есть еще одни цикл, который скрыт в реализации splice
// for (let i = numbers.length - 1; i >= 0; i--) {
//   if (numbers[i] <= 0) {
//     numbers.splice(i, 1);
//   }
// }

// сложность O(n) - переместить положительные числа в начало массива, и обрезать через присваивание length
let position = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbers[position] = numbers[i];
    position++;
  }
}
numbers.length = position;

// №3
// Дана строка. Удалите предпоследний символ из этой строки.

// Плохое решение, с промежуточным преобразованием в массив
// let str = "hello";
// const array = str.split("");
// array.splice(-2, 1);
// str = array.join("");

// Хорошее решение:
let str = "hello";
str = str.slice(0, -2) + str.slice(-1);

// №4
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

function divPaths(numbers) {
  const middle = Math.floor(numbers.length / 2);
  const firstPath = numbers.slice(0, middle);
  const secondPath = numbers.slice(middle);

  const sumFirst = getSum(firstPath);
  const sumSecond = getSum(secondPath);

  if (sumSecond === 0) {
    throw new Error("Division by zero! The sum of the second half is zero.");
  }

  return sumFirst / sumSecond;
}
