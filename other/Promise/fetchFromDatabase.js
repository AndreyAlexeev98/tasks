// Ручная обработка асинхронной операции
// Представьте, что у вас есть функция, которая делает асинхронный запрос к базе данных. Однако, в учебных целях, вам нужно реализовать эту логику вручную с помощью new Promise.

function fetchFromDatabase(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query === "valid") {
        resolve("Данные найдены");
      } else {
        reject(new Error("Ошибка: Данные не найдены"));
      }
    }, 1000);
  });
}

fetchFromDatabase("invalid")
  .then(console.log)
  .catch((e) => console.error(e.message));
