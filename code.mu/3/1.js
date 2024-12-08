// №1
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

function isNumbersIncrement(number) {
  const numberStr = number.toString();
  for (let i = 0; i < numberStr.length - 1; i++) {
    if (+numberStr[i] >= +numberStr[i + 1]) {
      return false;
    }
  }
  return true;
}

// №2
// Дан массив: [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
function clearEmptyElems(arr) {
  return arr.filter((item) => item !== "");
}

// №3
// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

function sortSubArray(arr) {
  return arr.map((subArr) => [...subArr].sort((a, b) => a - b));
}

// №4
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

function makeEqual(arr1, arr2) {
  const minLength = Math.min(arr1.length, arr2.length);
  return [arr1.slice(0, minLength), arr2.slice(0, minLength)];
}
