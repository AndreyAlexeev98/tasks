// №1
// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

function hasAtMostTwoUppercase(str) {
  let count = 0;
  for (const letter of str) {
    if (letter >= "A" && letter <= "Z") {
      count++;
    }
  }
  // более лаконичное: [...str].filter(letter => letter >= "A" && letter <= "Z").length;
  // Улучшенное return (str.match(/[A-Z]/g) || []).length <= 2;

  return count <= 2;
}

// №2
// Дана некоторая строка: '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

function deleteLongWord(str, limitChar) {
  const words = str.split(" ");
  return words.filter((word) => word.length <= limitChar).join(" ");
}

// №3
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

function mergeArr(arr1, arr2) {
  if (arr1.length < 2) {
    throw new Error("arr1 должен содержать минимум 2 элемента");
  }
  return [...arr1.slice(0, 2), ...arr2, ...arr1.slice(2)];
}
