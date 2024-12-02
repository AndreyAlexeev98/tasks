// №1
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
function getFirstNumberPosition(str) {
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(+str[i])) {
      return i;
    }
  }
}

// №2
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
function objToTwoArr(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return [keys, values];
}

// №3
// Дано число. Выведите в консоль количество четных цифр в этом числе.
function getEvenNumber(number) {
  const numberStr = number.toString();
  const array = Array.from(numberStr);
  return array.reduce((acc, item) => {
    if (parceInt(item) % 2 === 0) {
      return ++acc;
    }
    return acc;
  }, 0);
}

// №4
// Дана некоторая строка: 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'

function noEvenIndexToUpperCase(str) {
  return str
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
    .join("");
}

// №5
// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

function firstLetterToUpperCase(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
