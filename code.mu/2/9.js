// №1
// Дано некоторое число: 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56

function sumPart(number) {
  const numStr = number.toString();
  let result = 0;

  for (let i = 0; i < numStr; i += 2) {
    result += Number(numStr.slice(i, i + 2));
  }

  return result;
}

// №2
// Дан массив с числами: [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

function logReverseItems(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

logReverseItems([1, 2, 3, 4, 5]);
