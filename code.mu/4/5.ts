// №1
// Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
function isNumericString(number: string): boolean {
  // Втроенным методом
  //   return isFinite(+number);
  // Регулярным выражением, где метод String.search возвращает -1 если искомое не найдено, а \D означает любой нечисловойсимвол в регулярном выражении
  return number.search(/\D/) === -1;

  // или
  //   return /^\d+$/.test(number);
}

// №2
// Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
function hasFractional(numberStr: string): boolean {
  const num = +numberStr;
  if (isNaN(num)) throw new Error("Argument is not a valid number");

  // 1й вариант
  //   if (Math.round(num) === num) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  // 2 более лаконичный вариант
  return num % 1 !== 0;
}

// №3
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
function findSecondLargest(numbers: number[]): number {
  if (numbers.length < 2) throw new Error("At least two numbers are required");

  const uniqueNumbers = [...new Set(numbers)]; // Убираем дубликаты
  if (uniqueNumbers.length < 2) throw new Error("Not enough unique numbers");

  uniqueNumbers.sort((a, b) => b - a); // Сортировка по убыванию
  return uniqueNumbers[1];
}

// №4
// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
function setRange(from: number, to: number): number[] {
  const range: number[] = [];
  from = Math.floor(from);
  to = Math.floor(to);

  let count = from;

  while (count <= to) {
    range.push(count);
    count++;
  }

  return range;
}

// №5
// Сделайте функцию, которая заполнит массив случайными латинскими буквами.
function generateRandomLetters(limit: number = 10): string[] {
  const ASCII_RANGE: [number, number] = [97, 122]; // [min, max] - tapple

  const minCeiled = Math.ceil(ASCII_RANGE[0]); // min
  const maxFloored = Math.floor(ASCII_RANGE[1]); // max
  const result: string[] = [];

  for (let i = 1; i <= limit; i++) {
    const integer = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );
    result.push(String.fromCharCode(integer));
  }

  return result;

  // Или более лаконичный вариант:
  //   return Array.from({ length: limit }, () =>
  //     String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  //   );
}

// №6
// Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
function fibonacci(n: number): number {
  if (n <= 0 || n === 1) return 0;

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.reduce((sum, num) => (sum += num));
}
