// №1
// Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

function remainingDays() {
  function findHighYear(): number {
    let currentYear = new Date().getFullYear();
    let result: null | number = null;
    while (!result) {
      if (new Date(currentYear, 2, 0).getDate() === 29) {
        result = currentYear;
      } else {
        currentYear++;
      }
    }

    return result;
  }

  const now = new Date();
  // new Date(year, month, date, hours = 0, minutes = 0, seconds = 0, ms = 0)
  const findDate = new Date(findHighYear(), 1, 29);

  return Math.floor((findDate.getTime() - now.getTime()) / 1000 / 60 / 60 / 24);
}

// либо так:
/*
function remainingDays(): number {
  function findNextLeapYear(): number {
    const currentYear = new Date().getFullYear();
    // Проверяем, високосный ли текущий год
    if (isLeapYear(currentYear) && new Date().getTime() <= Date.UTC(currentYear, 1, 29)) {
      return currentYear;
    }
    // Если нет, ищем следующий високосный год
    let year = currentYear + 1;
    while (!isLeapYear(year)) {
      year++;
    }
    return year;
  }

  function isLeapYear(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  const now = new Date();
  const nextLeapDay = new Date(findNextLeapYear(), 1, 29); // 29 февраля

  // Разница в миллисекундах, переводим в дни
  const diffInMs = nextLeapDay.getTime() - now.getTime();
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // Округление вверх для точности
}
*/

// №2
// Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
//
function getNextMaslenitsaDate(): string {
  const now = new Date();

  function findMaslDay(date: Date): Date {
    const year = date.getFullYear();
    let index = 0;
    while (new Date(year, 2, index).getDay() !== 0) {
      index--;
    }
    return new Date(year, 2, index);
  }

  if (now.getTime() < findMaslDay(now).getTime()) return `${findMaslDay(now)}`;

  return `${findMaslDay(new Date(now.setFullYear(now.getFullYear() + 1)))}`;
}

// Или более лаконично:
// function getNextMaslenitsaDate(): string {
//   const now = new Date();

//   // Функция для нахождения даты последнего воскресенья февраля
//   function findMaslenitsaDay(year: number): Date {
//     let day = new Date(year, 2, 0); // Последний день февраля
//     while (day.getDay() !== 0) {
//       day.setDate(day.getDate() - 1); // Отматываем назад до воскресенья
//     }
//     return day;
//   }

//   const currentYearMaslenitsa = findMaslenitsaDay(now.getFullYear());

//   // Если масленица уже прошла в этом году, ищем для следующего года
//   if (now.getTime() < currentYearMaslenitsa.getTime()) {
//     return currentYearMaslenitsa.toLocaleDateString();
//   }

//   const nextYearMaslenitsa = findMaslenitsaDay(now.getFullYear() + 1);
//   return nextYearMaslenitsa.toLocaleDateString();
// }

// №3
// Сделайте функцию, которая будет возвращать случайный цвет.
function generateRandomColorHexFormat(): string {
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const component = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    color += component;
  }
  return color;
}

// №4
// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.

// №5
// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
