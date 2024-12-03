// №1
// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'

function shortWordToUpperCase(str) {
  if (!str.trim()) return str;

  return str
    .split(" ")
    .map((word) => (word.length <= 3 ? word.toUpperCase() : word))
    .join(" ");
}
// №2
// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
function whichCharCase(char) {
  if (char.length !== 1) return "Введите один символ";

  if (char >= "a" && char <= "z") {
    return "Символ в нижнем регистре";
  } else if (char >= "A" && char <= "Z") {
    return "Символ в верхнем регистре";
  } else {
    return "Символ не является буквой";
  }
}

// №3
// Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

function removeOddNumbers(number) {
  if (!Number.isInteger(number) || number < 0) {
    return "Введите положительное целое число";
  }

  return number
    .toString()
    .split("")
    .filter((char) => char % 2 === 0)
    .join("");
}
