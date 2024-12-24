// №1
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
function deleteDoublesItem<T>(arr: T[] = []): T[] {
  return [...new Set(arr)];
}

// №2
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
function deleteMoreThreeElems<T>(arr: T[]): T[] {
  const map = new Map();
  const result: T[] = [];

  for (const item of arr) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  for (const [key, count] of map) {
    if (key <= 3) {
      result.push(...Array(count).fill(key));
    }
  }

  return result;
}

// №3
// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
function deleteSameNextItem<T>(arr: T[]): T[] {
  if (!arr.length) return [];
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

// №4
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }

function getMinMaxNumbers(
  numbers: number[]
): { max: number; min: number } | null {
  if (numbers.length === 0) {
    return null; // Либо выбросить исключение
  }
  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers),
  };
}
