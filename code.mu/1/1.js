// №1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function isNaturalNamber(number) {
  console.log(number < 0 ? "Число Отрицательное" : "Число НЕ Отрицательное");
}

// №2
// Дана строка. Выведите в консоль длину этой строки.
function stringLength(str) {
  console.log(str.length);
}

// №3
// Дана строка. Выведите в консоль последний символ строки.
function lastSymbol(str) {
  console.log(str[str.length - 1]);
}

// №4
// Дано число. Проверьте, четное оно или нет.
function isEvenNumber(number) {
  return number % 2 === 0;
}

// №5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
function isFirstLetterIdentical(firstWord, secondWord) {
  return firstWord[0].toLowerCase() === secondWord[0].toLowerCase();
}

// №6
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
function getLastLetter(word) {
  return word[word.length - 1] === "ь"
    ? word[word.length - 2]
    : word[word.length - 1];
}
