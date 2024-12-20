// №1
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function getSumAllDigit(num: number): number {
  if (!isFinite(num)) throw new Error("Аргумент должен быть числом!");
  return Math.abs(num) // Убираем знак
    .toString()
    .split("")
    .reduce((sum, char) => sum + Number(char), 0); // Суммируем цифры
}

// №2
// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
function clearZeroDigit(num: number): number {
  if (!isFinite(num)) throw new Error("Аргумент должен быть числом!");
  const result = num.toString().replace(/0/g, ""); // Удаляем все нули
  return Number(result) || 0; // Возвращаем 0, если результат пуст
}

// №3
// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
function getRestDay(targetDate: Date) {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Обнуляем время
  targetDate.setHours(0, 0, 0, 0); // Обнуляем время
  const diffInMs = targetDate.getTime() - now.getTime();
  const msInDay = 24 * 60 * 60 * 1000;
  const restDay = Math.floor(diffInMs / msInDay);
  return restDay > 0
    ? `Осталось ${restDay} дней`
    : `Прошло ${Math.abs(restDay)} дней`;
}

// №4
// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.
function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// №5
// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.
function getAllLeapYearsOfLastCentury(): number[] {
  const currentYear = new Date().getFullYear();
  const fromYear = currentYear - 100;
  const leapYearsList = [];
  for (let i = currentYear; i >= fromYear; i--) {
    if (isLeapYear(i)) {
      leapYearsList.push(i);
    }
  }

  return leapYearsList;
}

// №6
// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
function daysUntilEndOfMonth(): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const diffInMs = lastDayOfMonth.getTime() - now.getTime();

  const msInDay = 24 * 60 * 60 * 1000;
  return Math.ceil(diffInMs / msInDay); // округляем вверх, чтобы учитывать текущий день
}
// №7

// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

function getNextCurrAndPrevDays() {
  const dayOfTheWeeks = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  const currentDayOfWeekIndex = new Date().getDay();
  return {
    next: dayOfTheWeeks[(currentDayOfWeekIndex + 1) % 7], // % - если не использовать будет некорректный рассчет когда currentDay суббота
    curr: dayOfTheWeeks[currentDayOfWeekIndex],
    prev: dayOfTheWeeks[(currentDayOfWeekIndex + 6) % 7], // Эквивалент (index - 1 + 7) % 7
  };
}
