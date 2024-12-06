// №1
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

function hasNoMoreThanThreeLetters(str) {
  const matches = str.match(/[a-z]/gi);
  return (matches ? matches.length : 0) <= 3;
}

// №2
// Дано число. Получите первую четную цифру с конца этого числа.
function getLastEvenNumber(number) {
  const numStr = number.toString();
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] % 2 === 0) {
      return numStr[i];
    }
  }
  return null;
}

// №3
// Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

function replaceFirstChar(str) {
  const words = str.split(" ");
  return words
    .map((word) => {
      return "!" + word.slice(1);
    })
    .join(" ");
}

// №4
// Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
function hasAdjacentDuplicates(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      return true;
    }
  }
  return false;
}
