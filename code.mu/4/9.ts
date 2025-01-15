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

// №3
// Сделайте функцию, которая будет возвращать случайный цвет.

// №4
// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.

// №5
// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
