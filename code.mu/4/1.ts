// №1
// Сделайте функцию, которая вернет текущий день недели словом.
function getDayOfTheWeek(): string {
  // Map в данном случае избыточек по производительности
  // const dayOfWeekMap: Map<number, string> = new Map<number, string>([
  //   [0, "Воскресенье"],
  //   [1, "Понедельник"],
  //   [2, "Вторник"],
  //   [3, "Среда"],
  //   [4, "Четверг"],
  //   [5, "Пятница"],
  //   [6, "Суббота"],
  // ]);

  // // Обьект быстрее
  // const dayOfWeekMap: Record<number, string> = {
  //   0: "Воскресенье",
  //   1: "Понедельник",
  //   2: "Вторник",
  //   3: "Среда",
  //   4: "Четверг",
  //   5: "Пятница",
  //   6: "Суббота",
  // }

  // Но наиболее быстрый и лаконичный способ - через обычный массив, т.к. date.getDay() вернет число,
  // остается только корректно расставить значения по индексу в массиве :

  const dayOfWeekMap: string[] = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return dayOfWeekMap[new Date().getDay()];
}

// №2
// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
function getDayFromDate(date: Date) {
  const dayOfWeekMap = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return dayOfWeekMap[date.getDay()];
}

// №3
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function secToDays(sec: number): number {
  return Math.floor(sec / 86400); // полных дней. 60 sec * 60 min * 24 hours = 86400 sec in 1 day
}

// №4
// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
function setTextLength(length: number, text: string): string {
  return text.slice(0, length);
}

// №5
// Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.

type ZodiacValues =
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

function getZodiacSign(date: Date): ZodiacValues {
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
  /**
   *
   * @param month месяц из даты
   * @param day день из даты
   * @param start начало диппазона
   * @param end конец
   * @returns Boolean, попадает ли дата в диапазон
   * @description  Объединение месяца и дня даты через умножение (например на 100) делает удобным сравнение дат, как будто это просто числа. 1е Января = 101, 31е декабря = 3001 (101 < 3001).
   * Формула: месяц * 100 + день
   */
  function isDateInRange(
    month: number,
    day: number,
    start: [number, number],
    end: [number, number]
  ): boolean {
    const dateValue = month * 100 + day;
    const startValue = start[0] * 100 + start[1];
    const endValue = end[0] * 100 + end[1];

    if (startValue <= endValue) {
      // Диапазон в пределах одного года
      return dateValue >= startValue && dateValue <= endValue;
    } else {
      // Диапазон через Новый год
      return dateValue >= startValue || dateValue <= endValue;
    }
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  for (const { sign, start, end } of zodiacRanges) {
    if (isDateInRange(month, day, start, end)) {
      return sign;
    }
  }

  throw new Error(`Не удалось определить знак зодиака для даты: ${date}`);
}

// Пример вызова:
// const testDate = new Date("1994-10-23");
// console.log(getZodiacSign(testDate)); // Весы

// №6
// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

function getDigitSum(num: number): number {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => {
      return (sum += +digit);
    }, 0);
}
