// №1
// Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
function dividersCount(number: number): number {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) count++;
  }

  return count;
}

// №2
// Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
type ZodiacVal =
  | "Козерог"
  | "Водолей"
  | "Рыбы"
  | "Овен"
  | "Телец"
  | "Близнецы"
  | "Рак"
  | "Лев"
  | "Дева"
  | "Весы"
  | "Скорпион"
  | "Стрелец";

function getSignZodiac(birthday: Date): ZodiacVal {
  const zodiacRanges: {
    sign: ZodiacValues;
    start: [number, number]; // [month, day]
    end: [number, number]; // [month, day]
  }[] = [
    { sign: "Козерог", start: [12, 22], end: [1, 20] },
    { sign: "Водолей", start: [1, 21], end: [2, 20] },
    { sign: "Рыбы", start: [2, 21], end: [3, 20] },
    { sign: "Овен", start: [3, 21], end: [4, 20] },
    { sign: "Телец", start: [4, 21], end: [5, 20] },
    { sign: "Близнецы", start: [5, 21], end: [6, 21] },
    { sign: "Рак", start: [6, 22], end: [7, 22] },
    { sign: "Лев", start: [7, 23], end: [8, 23] },
    { sign: "Дева", start: [8, 24], end: [9, 23] },
    { sign: "Весы", start: [9, 24], end: [10, 23] },
    { sign: "Скорпион", start: [10, 24], end: [11, 22] },
    { sign: "Стрелец", start: [11, 23], end: [12, 21] },
  ];

  function inRange(
    date: Date,
    range: [[number, number], [number, number]]
  ): boolean {
    const day = date.getDate();
    const month = date.getMonth() + 1; // в формате 12ти месяцев в году
    const [start, end] = range;

    const dayValue = month * 100 + day;
    const startValue = start[0] * 100 + start[1];
    const endValue = end[0] * 100 + end[1];

    if (startValue <= endValue) {
      // Диапазон в пределах одного года
      return dayValue >= startValue && dayValue <= endValue;
    } else {
      // Диапазон через Новый год
      return dayValue >= startValue || dayValue <= endValue;
    }
  }

  for (const { sign, start, end } of zodiacRanges) {
    if (inRange(birthday, [start, end])) {
      return sign;
    }
  }

  throw new Error("Ошибка оптеределия знака зодиака");
}

// №3
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
function getDividesList(number: number): number[] {
  const divides = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divides.push(i);
    }
  }

  return divides;
}

// №4
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrimeNumber(number: number): boolean {}

// №5

// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

// №6

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
