// №1
// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
function deleteLongWords(words) {
  return words.filter((word) => word.length <= 3);
}

// №2
// Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.
function isAllDigitsOdd(number) {
  for (const digit of number.toString()) {
    if (Number(digit) % 2 === 0) {
      return false;
    }
  }
  return true;
}

// №3
// Дано некоторое слово: 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

function isPalindrome(word) {
  const wordLowerCase = word.toLowerCase().trim();
  return wordLowerCase === wordLowerCase.split("").reverse().join("");
}

// №4
// Дан массив:

// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.

function sumElemsArrays(arr) {
  return arr.reduce(
    (sum, subArr) =>
      (sum += subArr.reduce(
        (subSum, subSubArr) =>
          (subSum += subSubArr.reduce(
            (subSubSum, number) => (subSubSum += number)
          ))
      ))
  );
  // Более читабельный:
  //   return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
  // Либо написать рекурсию в ручную:
  // return arr.reduce(
  //     (sum, item) => sum + (Array.isArray(item) ? sumElemsArrays(item) : item),
  //     0
  //   );
}
