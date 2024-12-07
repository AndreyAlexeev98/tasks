// Превратить синхронное значение в промис
// У вас есть функция, которая возвращает значение. Вам нужно написать функцию, которая всегда возвращает промис, даже если переданное значение не асинхронное.
// Пример:

function toPromise(value, errorMessage = "Invalid value") {
  if (value === null || value === undefined) {
    return Promise.reject(errorMessage);
  }
  return Promise.resolve(value);
}

toPromise(42)
  .then((res) => console.log(res))
  .catch((e) => console.log(e)); // 42
