// №1
// Дана строка со словами. Отсортируйте слова в алфавитном порядке.
function sortWords(words: string): string {
  if (!words.trim()) return "";
  return words
    .split(" ")
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
}

// №2
// Дано число. Получите массив делителей этого числа.
function getDivideList(num: number): number[] {
  if (num <= 0) return []; // Нет делителей для отрицательных и нуля
  const divideList = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divideList.push(i);
    }
  }
  return divideList;
}
// №3
// Даны два числа. Получите массив общих делителей этих чисел.
type DivideParams = [number, number];
function getDivideFromTwoNum([num1, num2]: DivideParams): number[] {
  if (num1 <= 0 || num2 <= 0) return [];

  const getDivideList = (num: number): number[] => {
    const divideList = new Set<number>();
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divideList.add(i);
        divideList.add(num / i);
      }
    }
    return Array.from(divideList);
  };

  const divisors1 = new Set(getDivideList(num1));
  const divisors2 = getDivideList(num2);

  return divisors2.filter((num) => divisors1.has(num)).sort((a, b) => a - b);
}

// №4
// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
function hasExactlyOneProperDivisor(number: number): boolean {
  if (number <= 1) return false;
  let divisorCount = 0;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisorCount++;
      if (i !== number / i) divisorCount++;
      if (divisorCount > 1) return false;
    }
  }

  return divisorCount === 1;
}

// №5
// Через запятую написаны числа. Получите максимальное из этих чисел.
function getMaxNum(numbers: string): number {
  if (!numbers.trim()) throw new Error("Input string is empty"); // Обработка пустой строки

  const numArray = numbers
    .split(",")
    .map((strNum) => Number(strNum.trim()))
    .filter((num) => !isNaN(num)); // Фильтруем некорректные числа

  if (numArray.length === 0) throw new Error("No valid numbers in the input");

  return Math.max(...numArray);
}

// №6
// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
function duplicateSingleDigitNumbers(numbers: number[]): number[] {
  const result: number[] = [];
  for (const num of numbers) {
    result.push(num);
    if (Math.abs(num) < 10) {
      result.push(num);
    }
  }
  return result;
}

// №7
// Дана строка. Удалите из нее все гласные буквы.
function removeVowelLetters(string: string): string {
  const exceptions = new Set(["a", "e", "i", "o", "u", "y"]);
  let result = "";
  const chars = Array.from(string.toLowerCase());
  for (const char of chars) {
    if (exceptions.has(char)) {
      continue;
    }
    result += char;
  }
  return result;
  // Вариант 2:
  // const vowels = new Set(["a", "e", "i", "o", "u", "y"]);
  // return Array.from(string)
  //   .filter((char) => !vowels.has(char.toLowerCase()))
  //   .join("");
  // Вариант 3:
  // return string.replace(/[aeiouy]/gi, "");
}

// №8
// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
function setUpperCaseLastLetter(text: string): string {
  return text
    .split(" ")
    .map((word) =>
      word.length > 0
        ? word.slice(0, -1) + word[word.length - 1].toUpperCase()
        : ""
    )
    .join(" ");
}

// №9
// Дан следующая структура:
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Найдите сумму элементов этой структуры.

function getTotalSum(data: { [key: number]: number[] }[]): number {
  let totalSum = 0;

  for (const obj of data) {
    const values = Object.values(obj);

    for (const arr of values) {
      totalSum += arr.reduce((sum, num) => sum + num, 0);
    }
  }

  return totalSum;
}
