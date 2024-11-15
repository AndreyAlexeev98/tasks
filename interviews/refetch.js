/**
 * Необходимо написать функцию, которая на вход принимает урл,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получении данных использовать fetch.
 * Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */
function get(url) {}

get(url)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/* 
  let count = 0;
  let result = "";
  function callback(res, rej) {
    res();
  }
  try {
    fetch(url)
      .then((response) => {
        response.json();
      })
      .catch(() => {
        if (count > 5) {
          throw new Error();
        }
        count++;
        fetch(url);
      });

    return new Promise(callback);
  } catch {
    return new Error("Заданный URL недоступен");
  }
    */
