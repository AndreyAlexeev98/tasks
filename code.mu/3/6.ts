// №1
// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
function filterShortNumbers(arr: number[], limit: number = 3): number[] {
  return arr.filter((num) => String(num).length <= limit);
}

// №2
// Дано число, например, вот такое:
// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.
function areAllDigitsPositive(number: number): boolean {
  return String(number)
    .split("")
    .every((digit) => +digit > 0);
}

// №3
// Дан некоторый массив, например, вот такой:
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
function mergeAllElements(arr: number[]): number[] {
  const mergeElems: string[] = [];
  arr.forEach((num) => mergeElems.push(...String(num).split("")));
  return mergeElems.map((num) => +num);

  //  return arr.flatMap((num) => Array.from(String(num), (digit) => parseInt(digit, 10)));
}

// №4
// Дан следующая структура:
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.
interface DataObj {
  1: number;
  2: number;
  3: number;
}

function getSum(arr: DataObj[]): number {
  return arr.reduce(
    (total, obj) =>
      total + Object.values(obj).reduce((sum, num) => sum + num, 0),
    0
  );
}
