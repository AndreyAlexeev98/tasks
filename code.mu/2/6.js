// №1
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
function getNumbersPosition(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (isFinite(str[i]) && str[i] !== " ") {
      result.push(i);
    }
  }

  return result;
}

// №2
// Дан массив с некоторыми числами, например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]

function reverseSymbols(arr) {
  return arr.map((number) => +number.toString().split("").reverse().join(""));
}

// №3
// Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'

function formatNumber(string) {
  if (string.length <= 3) return string;
  const arr = string.split("");
  for (let i = arr.length - 3; i > 0; i = i - 3) {
    arr.splice(i, 0, " ");
  }
  return arr.join("");

  // Более оптимальное решение:
  //   return string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// №4
// Дана некоторая строка: 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'

function reverseLetterCase(str) {
  let reverseStr = "";
  for (const char of str) {
    if (char === char.toUpperCase()) {
      reverseStr += char.toLowerCase();
    } else {
      reverseStr += char.toUpperCase();
    }
  }
  return reverseStr;

  // Либо более кратко:
  //   return [...str].map(char =>
  //  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  // ).join('');
}

// №5
// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]

function concatNumbers(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i += 2) {
    result.push(+`${numbers[i]}${numbers[i + 1] || ""}`);
  }

  return result;
}

// №6
// Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

function firstCharToUpperCase(str) {
  const arrStr = str.split(" ");

  return arrStr
    .map((word, i) =>
      (i + 1) % 2 === 0 ? word.at(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
}
