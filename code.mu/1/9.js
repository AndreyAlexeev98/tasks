// №1
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function filterUrl(array) {
  return array.filter((item) => item.indexOf("http://") === 0);
  // Либо, более читаемый способ:
  // return array.filter((item) => item.startsWith("http://"));
}

// №2
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function searchHtmlFiles(array) {
  return array.filter((item) => item.indexOf(".html") === item.length - 5);
  // Либо, более читаемый способ:
  //   return array.filter((item) => item.endsWith(".html"));
}

// №3
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
function increaseByPercent(numbers) {
  return numbers.map((num) => num * (1 + percent / 100));
  // либо через reduce
  //   return numbers.reduce((acc, num) => {
  //     acc.push(num * (1 + percent / 100));
  //     return acc;
  //   }, []);
}
increaseByPercent([10, 20, 30], 10);
