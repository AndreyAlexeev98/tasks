// №1
// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
function isValidDate(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;

  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
}

// №2
// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
function generateRandomString(length: number = 10): string {
  let randomString = "";
  let count = 1;

  const ASCII_RANGE: [number, number] = [97, 122]; // a-z
  const [minIndex, maxIndex] = ASCII_RANGE;

  while (count <= length) {
    const index = Math.floor(
      Math.random() * (maxIndex - minIndex + 1) + minIndex
    );
    randomString += String.fromCharCode(index);
    count++;
  }

  return randomString;
}

// №3
// Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
function getFirstCharUpperCase(text: string): string {
  let result = "";
  text.split(" ").forEach((word) => {
    result += word[0];
  });

  return result.toUpperCase();

  // Или
  //   return text
  //   .split(" ")
  //   .filter((word) => word) // Убираем пустые элементы
  //   .map((word) => word[0])
  //   .join("")
  //   .toUpperCase();
}

// №4
// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
function createSubArrayDividers(numbers: number[]): number[][] {
  const result: number[][] = [];

  for (const num of numbers) {
    const subArr: number[] = [];
    for (let i = num; i > 0; i--) {
      if (num % i === 0) subArr.push(i);
    }

    result.push(subArr);
  }

  return result;

  // Или
  //   return numbers.map((num) => {
  //     const divisors: number[] = [];
  //     for (let i = 1; i <= num; i++) {
  //       if (num % i === 0) divisors.push(i);
  //     }
  //     return divisors;
  //   });
}

// №5
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

type ParseSecondsKeys = "d" | "h" | "m" | "s";

function parseSeconds(sec: number): Record<ParseSecondsKeys, number> {
  const SECOND_IN_DAY = 86_400; // 1 day = 24 hour (86400 sec = 24 * 3600)
  const SECOND_IN_HOURS = 3_600; // 1 hour = 60 min (3600 sec = 60 * 60)
  const SECOND_IN_MINUTS = 60; // 1 min = 60 sec

  let remainder = sec;
  const days = Math.floor(sec / SECOND_IN_DAY);
  remainder = sec % SECOND_IN_DAY;

  const hours = Math.floor(remainder / SECOND_IN_HOURS);
  remainder = remainder % SECOND_IN_HOURS;

  const minutes = Math.floor(remainder / SECOND_IN_MINUTS);
  const seconds = remainder % SECOND_IN_MINUTS;

  // Или:
  //   const days = Math.floor(sec / SECOND_IN_DAY);
  //   const hours = Math.floor((sec % SECOND_IN_DAY) / SECOND_IN_HOUR);
  //   const minutes = Math.floor((sec % SECOND_IN_HOUR) / SECOND_IN_MINUTE);
  //   const seconds = sec % SECOND_IN_MINUTE;

  return { d: days, h: hours, m: minutes, s: seconds };
}
