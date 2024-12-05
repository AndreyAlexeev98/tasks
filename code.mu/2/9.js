// №1
// Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

function getPairSum(number) {
  const numStr = number.toString();
  let sum = 0;
  for (let i = 0; i < numStr.length; i += 2) {
    sum += +(numStr[i] + (numStr[i + 1] || ""));
  }
  return sum;
}

// №2
// Дан массив с числами: [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

function reverseArrLog(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
