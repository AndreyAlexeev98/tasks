// №1
// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

function setDoubleItem<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (const item of arr) {
    result.push(item, item);
  }
  return result;
}

// №2
// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
function filterDivideNumbers(arr: number[], divisible: number): number[] {
  return arr.filter((num) => divisible % num === 0);
}

// №3
// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
function getDititsIncludes(...numbers: [number, number]): number[] {
  const [firstNumber, secondNumber] = numbers;
  const result: number[] = [];

  const secondDigits = new Set(String(secondNumber));

  for (const digit of String(firstNumber)) {
    if (secondDigits.has(digit)) result.push(Number(digit));
  }

  return result;
}

// №4
// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
function getThreeIndexes(number: number): number[] {
  if (number < 10) return [];
  const numberToString = String(number);
  const result: number[] = [];
  for (let i = 1; i < numberToString.length - 1; i++) {
    if (numberToString[i] === "3") result.push(i);
  }
  return result;
}

// №5
// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
function filterSameNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => {
    const numToString = String(num);
    const uniqueDigits = new Set(numToString);
    return uniqueDigits.size === numToString.length;
  });
}

// №6
// Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flatArr(arr: number[][]): number[] {
  // Через forEach
  // const result: number[] = [];
  // arr.forEach((subArr) => result.push(...subArr))
  // return result;
  //
  // Через reduce
  return arr.reduce((result, subArr) => {
    result.push(...subArr);
    return result;
  }, []);

  // if ES 19
  // return arr.flat();
}
