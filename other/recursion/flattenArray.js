// Задача: Обработка вложенного массива.
// Напишите функцию, которая принимает массив произвольной вложенности и возвращает его "плоскую" версию (все элементы на одном уровне).

// console.log(flattenArray([1, [2, [3, [4, 5]], 6], 7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(flattenArray([[[1, 2], 3], [[4, 5]], 6])); //  [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4]], 5], [], [6, [7, 8, [9]]]])); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flattenArray(arr) {
  const result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result.push(...flattenArray(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

/*
Итеративное решение:
function flattenArrayIterative(arr) {
  const stack = [...arr]; // Создаем копию массива и помещаем его в стек
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop(); // Извлекаем последний элемент из стека

    if (Array.isArray(current)) {
      stack.push(...current); // Разворачиваем массив и добавляем его элементы в стек
    } else {
      result.push(current); // Если это не массив, добавляем элемент в результат
    }
  }

  return result.reverse(); // Так как элементы добавляются в обратном порядке
}

*/
