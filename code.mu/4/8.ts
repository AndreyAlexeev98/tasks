// №1
// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
function getRandomItem<T>(arr: T[]): T {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// №2
// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
function getRandomElems<T>(arr: T[], n = 1): T[] {
  if (arr.length <= 1) return arr;
  const result: T[] = [];
  while (n > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    n--;
  }
  return result;
}

// №3
// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
function getRandomElemsNoDouble<T>(arr: T[], count: number): T[] {
  if (arr.length === 0 || count <= 0) return [];
  if (count > arr.length) count = arr.length;

  const result: T[] = [];
  let lastIndex: number | null = null;

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (randomIndex === lastIndex) continue;

    result.push(arr[randomIndex]);
    lastIndex = randomIndex;
  }

  return result;
}

// №4

// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

// №5

// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.

// №6

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

// №7

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
