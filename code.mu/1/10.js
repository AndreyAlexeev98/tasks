// №1
// Заполните массив случайными числами из промежутка от 1 до 100.
function createRandomNumbersFromRange(start, end, limit = 10) {
  const randomNumbers = [];
  while (randomNumbers.length < limit) {
    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

createRandomNumbersFromRange(1, 100);

// №2
// Дано некоторое число: 12345
// Выведите в консоль все его символы с конца.
function withdrawal(number) {
  number
    .toString()
    .split("")
    .reverse()
    .forEach((digit) => console.log(digit));
  // Либо перебор массива с конца:
  // const str = number.toString();
  // for (let i = str.length - 1; i >= 0; i--) {
  //   console.log(str[i]);
  // }
}

// №3
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2] // [3, 4] // [5, 6]
function getSubArrays(array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array.slice(i, i + 2));
  }

  // Либо через reduce
  //   array.reduce((_, _, i) => {
  //     if (i % 2 === 0) {
  //       console.log(array.slice(i, i + 2))
  //     }
  //   }, [])
}

// №4
// Даны два массива 2 отсортированных массива чисел. Из них нужно получить 1, но тоже отсортированный массив. Решить задачу простым (неоптимальным) и оптимальным с точки зрения время выполнения алгоритма.

// Пример
mergeArrays([1, 2, 3], [4, 5, 6]); //  [1, 2, 3, 4, 5, 6]
mergeArrays([1, 5, 10], [2, 6, 15]); // [[ 1, 2, 5, 6, 10, 15 ]
mergeArrays([1, 3, 7, 9], [2, 4]); // [ 1, 2, 3, 4, 7, 9 ]
mergeArrays([2], [1]); // [ 1, 2 ]
mergeArrays([], [2, 4, 6]); // [ 2, 4, 6 ]

function mergeArrays(arr1, arr2) {
  // НЕоптимальное решение (sort ресурсозатратный метод)
  // return arr1.concat(arr2).sort();

  // Оптимальное решение:
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}
