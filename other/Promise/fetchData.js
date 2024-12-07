// Реализация API-запроса
// У вас есть функция fetchData(url), которая делает запрос к серверу. Если сервер уже вернул кэшированный результат для указанного URL, вам нужно сразу вернуть промис с этим результатом. Если результат не кэширован, выполните асинхронный запрос и верните его результат.
const cache = {
  "/api/user": { id: 1, name: "John" },
};

function fetchData(url) {
  if (cache.hasOwnProperty(url)) {
    return Promise.resolve(cache[url]); // Данные из кэша возвращаются немедленно
  }

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json(); // Преобразуем данные из ответа в JSON
    })
    .catch((err) => {
      console.error("Fetch error: ", err);
      throw err; // Бросаем ошибку дальше, если что-то пошло не так
    });
}

fetchData("/api/user").then(console.log).catch(console.error);

fetchData("/api/posts").then(console.log).catch(console.error);
