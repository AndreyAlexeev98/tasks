// №1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
function isEqualLetters(firstWord, secondWord) {
  if (!firstWord || !secondWord) return false;
  return firstWord.at(-1) === secondWord[0];
}

// №2
// Дана некоторая строка. Найдите позицию третьего нуля в строке.
function getThirdZeroPosition(str) {
  let zeroCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      zeroCounter++;
    }
    if (zeroCounter === 3) {
      return i;
    }
  }
  return -1; // Возвращаем -1, если третьего нуля нет
}

// №3
// Даны числа, разделенные запятыми: '12,34,56'
// Найдите сумму этих чисел.
function sumStrings(string) {
  const numbers = string.split(",");
  const sum = numbers.reduce((sum, num) => sum + Number(num), 0);
  return sum;
}

// №4
// Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

function stringToDate(str) {
  const arrDate = str.split("-");
  return {
    year: arrDate[0],
    month: arrDate[1],
    day: arrDate[2],
  };
}
