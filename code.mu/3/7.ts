// №1
// Дана строка со словами. Отсортируйте слова в алфавитном порядке.
function sortWords(words: string): string {
  return words.split(" ").sort().join(" ");
}

// №2
// Дано число. Получите массив делителей этого числа.
function getDivideList(num: number): number[] {
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
function getDivideFromTwoNum(params: DivideParams): number[] {
  const [num1, num2] = params;
  const divideList: number[] = [];
  for (let i = 1; i <= num1 || i <= num2; i++) {
    if (num1 % i === 0 || num2 % i === 0) {
      divideList.push(i);
    }
  }
  return divideList;
}
// №4
// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
function isOneDivide(number: number): boolean {
  let divideCount = 0;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      divideCount++;
    }
  }
  return divideCount === 1;
}

// №5
// Через запятую написаны числа. Получите максимальное из этих чисел.
function getMaxNum(numbers: string): number {
  const numberNums = numbers.split(",").map((strNum) => +strNum);
  return Math.max(...numberNums);
}

// №6
// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
function addSomeNumber(numbers: number[]): number[] {
  const result: number[] = [];
  for (const num of numbers) {
    result.push(num);
    if (num > -10 && num < 10) {
      result.push(num);
    }
  }
  return result;
}

// №7
// Дана строка. Удалите из нее все гласные буквы.
function removeVowelLetters(string: string): string {
  const exceptions = new Set(["a", "e", "y", "o", "u", "y"]);
  let result = "";
  const chars = Array.from(string.toLowerCase());
  for (const char of chars) {
    if (exceptions.has(char)) {
      continue;
    }
    result += char;
  }
  return result;
}

// №8
// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
function setUpperCaseLastLetter(text: string): string {
  let result = "";
  const words = text.split(" ");
  const resultWords: string[] = [];
  for (let i = 0; i < words.length; i++) {
    resultWords.push(words[i][words[i].length - 1]);
  }
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
