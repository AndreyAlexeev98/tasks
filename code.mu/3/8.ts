// №1
// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
function areAllNumbersContainThree(numbers: number[]): boolean {
  return numbers.every((num) => String(num).includes("3"));
}

// №2
// Дана строка в формате:
// 'kebab-case'
// Преобразуйте ее в формат:
// 'snake_case'
function kebabToSnakeCase(text: string): string {
  return text.replace(/-/g, "_");
}

// №3
// Дана строка в формате:
// 'snake_case'
// Преобразуйте ее в формат:
// 'camelCase'
function snakeToCamelCase(text: string): string {
  return text
    .split(" ")
    .map((word) => {
      const notUsedCharIndex = word.indexOf("_");

      if (notUsedCharIndex === -1) {
        return word;
      }

      return (
        word.slice(0, notUsedCharIndex) +
        word[notUsedCharIndex + 1].toUpperCase() +
        word.slice(notUsedCharIndex + 2)
      );
    })
    .join(" ")
    .trim();
}

// №4
// Дана строка в формате:
// 'camelCase'
// Преобразуйте ее в формат:
// 'snake_case'
console.log(camelToSnakeCase("camelCase lolCase лолКейс"));
function camelToSnakeCase(text: string): string {
  function getUppercaseCharIndex(chars: string): number {
    for (let i = 0; i < chars.length; i++) {
      if (chars[i].toUpperCase() === chars[i]) {
        return i;
      }
    }
    return -1;
  }

  return text
    .split(" ")
    .map((word) => {
      const uppercaseCharIndex: number = getUppercaseCharIndex(word);
      return (
        word.slice(0, uppercaseCharIndex) +
        "_" +
        word[uppercaseCharIndex].toLowerCase() +
        word.slice(uppercaseCharIndex + 1)
      );
    })
    .join(" ");

  // Либо (если мы получаем только латинские буквы):
  //  return text.replace(/([A-Z])/g, "_$1").toLowerCase();
}

// №5
// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

function createArr(digits: number[], length = 5): number[][] {
  return Array.from({ length }, () => [...digits]);
}
