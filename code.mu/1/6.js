// №1
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function squareNumber(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2; // Либо Math.pow(numbers[i], 2)
  }
  // тоже самое через reduce:
  // sum = numbers.reduce((sum, num) => sum + num ** 2, 0)

  return sum;
}
// №2
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function squareRootNumber(numbers) {
  return numbers.reduce((sum, num) => {
    return sum + Math.sqrt(num);
  }, 0);
}

// №3
// Дан массив с числами. Найдите сумму положительных элементов этого массива.
function sumNaturalNumbers(numbers) {
  return numbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

  // Или более развернутая запись:
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] > 0) {
  //       sum += numbers[i];
  //     }
  //   }
  //   return sum;
}

// №4
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function getNumbersRange(arr, start, end) {
  return arr.reduce((sum, num) => (num > start && num < end ? num : sum), 0);

  // Более развернутый вариант
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > start && arr[i] < end) {
  //       sum += arr[i];
  //     }
  //   }
  //   return sum;
}

getNumbersRange([0, 1, 27, 6, 10], 0, 10);

// №5 * - даны 2 отсортированных массива чисел. Из них нужно получить 1, но тоже отсортированный массив. Решить задачу простым (неоптимальным) и оптимальным с точки зрения время выполнения алгоритма.

// Неоптимальное решение:
function mergeSortedArraysNoPerformance(arrFirst, arrSecond) {
  const mergeNoSortArray = arrFirst.concat(arrSecond);
  mergeNoSortArray.sort();
  return mergeNoSortArray;
}

// Оптимальное решение
function mergeSortedArrays(arrFirst, arrSecond) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  // Используем указатели для слияния
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArraysNoPerformance([1, 5, 10], [2, 6, 15]));
console.log(mergeSortedArraysNoPerformance([1, 3, 7, 9], [2, 4]));
console.log(mergeSortedArraysNoPerformance([], [2, 4, 6]));
