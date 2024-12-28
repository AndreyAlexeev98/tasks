// №1
// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
function sortWords(text: string): string {
  return text
    .trim()
    .split(" ")
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
}

// №2
// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  //   return arr1.concat(arr2);
  // Или
  //   return [...arr1, ...arr2];
  // Или
  const deep = structuredClone(arr1); // глубокое копирование
  deep.splice(deep.length, 0, ...arr2);
  return deep;
}

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr1 = ["1", "2", "3"];
// const arr2 = ["4", "5", "6"];

// const arr1: Record<string, number>[] = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const arr2: { [key: string]: number }[] = [{ d: 4 }, { f: 5 }, { g: 6 }];

// №3
// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

let previousNumberGlobalVar: number | null = null;

function getRandomNumber(): number {
  let newNumber: number;
  do {
    newNumber = Math.floor(Math.random() * 100); // Диапазон чисел [0, 99]
  } while (newNumber === previousNumberGlobalVar);
  previousNumberGlobalVar = newNumber;
  return newNumber;
}

// №4
// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
let arr = [1, 2, 3, 4, 5];

// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function getNextElem<T>(arr: T[], prevElem: T): T {
  if (!prevElem) {
    throw new Error("Element not found in array");
  }
  const nextElem = arr[arr.indexOf(prevElem) + 1];

  if (!nextElem) {
    return arr[0];
  }
  return nextElem;
}
