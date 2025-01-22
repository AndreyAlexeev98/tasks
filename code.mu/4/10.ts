// №1
// Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.
const cyrillicOrLatinLetter = function (letter: string): "Cyrillic" | "Latin" {
  if (letter.length !== 1) throw new Error("Ожидается одна буква");

  if (letter.match(/[а-яёА-ЯЁ]/)) return "Cyrillic";
  if (letter.match(/[a-zA-Z]/)) return "Latin";

  throw new Error("Некорректная строка");
};

// №2
// Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
function randomSorted<T>(array: T[]): T[] {
  return array.slice().sort(() => Math.random() * (1 - -1) + -1); // или Math.random() - 0.5

  // либо Fisher–Yates Shuffle для лучшей случайности:
  //   const shuffled = array.slice();
  //   for (let i = shuffled.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //   }
  //   return shuffled;
}

// №3
// Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.

interface wordsMap {
  [key: string]: string[];
}
function generateWordsMap(text: string): wordsMap {
  const wordsMap: wordsMap = {};
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ")
    .forEach((word) => {
      const key = word[0];
      if (wordsMap[key]) {
        wordsMap[key].push(word);
      } else {
        wordsMap[key] = [word];
      }
    });

  return wordsMap;
}

// №4
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.
function findPrimeDividersNum(num: number): number[] {
  const dividers = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (isPrime(i)) dividers.push(i);
      if (i !== num / i && isPrime(num / i)) dividers.push(num / i);
    }
  }
  return dividers;

  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

// №5
// Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.

function breakWordIntoSyllables(word: string) {
  return (
    word.match(
      /[ЙЦКНГШЩЗХЪФВПРЛДЖЧСМТЬБ]*[ЁУЕЫАОЭЯИЮ][ЙЦКНГШЩЗХЪФВПРЛДЖЧСМТЬБ]*?(?=$|[^А-ЯЁ]|[ЦКНГШЩЗХФВПРЛДЖЧСМТБ]?[ЁУЕЫАОЭЯИЮ]|Й[АИУЕО])/gi
    ) || []
  );
}
