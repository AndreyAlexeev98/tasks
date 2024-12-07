// Работа с несколькими промисами одновременно
// У вас есть три API-запроса, которые возвращают промисы с результатами: api1, api2, api3. Напишите код, который собирает все результаты, когда они завершатся, используя статический метод Promise.all.

// Пример:

const api1 = Promise.resolve("Data 1");
const api2 = Promise.resolve("Data 2");
const api3 = Promise.resolve("Data 3");

async function requestObj(...promises) {
  try {
    return await Promise.all(promises);
  } catch (error) {
    // Если какой-то промис отклонен, ловим ошибку
    console.error("Error in one of the promises:", error);
  }
}

requestObj(api1, api2, api3).then((res) => console.log(res));
