// №1
// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

function getWordsStartingWithA(wordsStr) {
  return wordsStr.split(" ").filter((word) => word[0]?.toLowerCase() === "a");
}

// №2
// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
function divideByFive(numbers) {
  return numbers.filter((num) => num % 5 === 0);
}

// №3
// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
function hasZeroChar(numbers) {
  //   return numbers.filter((num) => String(num).indexOf("0") !== -1);
  return numbers.filter((num) => String(num).includes("0"));
}

// №4
// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
function hasThreeChar(numbers) {
  //   return numbers.some((num) => String(num).indexOf("3") !== -1);
  return numbers.some((num) => String(num).includes("3"));
}

// №5
// Дано некоторое число: 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:
// 12345
function sortNumbers(number) {
  return String(number)
    .split("")
    .sort((a, b) => a - b)
    .join("");
}

// №6
// Напишите функцию, которая сформирует следующую строку:
// '-1-2-3-4-5-'
function getCount(from = 1, to = 5) {
  let result = "-";
  for (let i = from; i <= to; i++) {
    result += `${i}-`;
  }
  return result;

  // Или
  //   return `-${Array.from({ length: to - from + 1 }, (_, i) => from + i).join("-")}-`;
}

// №7
// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.

function getSumObjcts(obj) {
  return Object.values(obj).reduce(
    (sum, item) =>
      sum + (typeof item === "object" ? getSumObjcts(item) : (sum += item)),
    0
  );
}
