// Задача 1: Преобразование массива пар в объект
// Дан массив пар [ключ, значение]. Преобразуйте его в объект, где каждая пара становится ключом и значением.

// Пример:

const map = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
]);

function converterUser(userMap) {
  return Object.fromEntries(userMap);
}

// console.log(converterUser(map));
// Output: { name: 'Alice', age: 25, city: 'New York' }

// Задача 2: Преобразование значений в объекте
// Дан объект, где значения — это числа. Увеличьте каждое значение на заданное число.

// Пример:
const scores = {
  Alice: 50,
  Bob: 70,
  Charlie: 90,
};

function increaseScores(scores, increment) {
  // Option 1
  //   const scoresCopy = structuredClone(scores);
  //   for (const score in scoresCopy) {
  //     scoresCopy[score] += increment;
  //   }
  //   return scoresCopy;
  //
  // Option 2
  //
  return Object.fromEntries(
    Object.entries(scores).map(([name, value]) => [name, value + increment])
  );
}

// console.log(increaseScores(scores, 10));
// Output: { Alice: 60, Bob: 80, Charlie: 100 }
