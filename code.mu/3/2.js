// №1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

function outputPreLast(start, end) {
  for (let i = start; i < end; i++) {
    if (Number(i.toString().at(-2)) % 2 === 0) {
      console.log(i);
    }
    // либо через Math
    // const preLastDigit = Math.floor((i % 100) / 10); // Получаем предпоследнюю цифру численно
    // if (preLastDigit % 2 === 0) {
    //   console.log(i);
    // }
    // Это решение избавляется от преобразования числа в строку, что делает его быстрее.
  }
}

// №2
// Дан массив. Удалите из него каждый пятый элемент.
function removeFiveEachElems(arr) {
  return arr.filter((item, i) => (i + 1) % 5 !== 0); // WARN (i + 1) - чтобы не удаляли первый элемент
}

// №3
// Дана некоторая переменная с числом: let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'
function repeatZero(num) {
  return "0".repeat(num);
}

// №4
// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'
function removeTwoEachWord(str) {
  const words = str.split(" ");
  return words.filter((word, i) => i % 2 === 0).join(" ");
}

// №5
// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

function sumElems(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].reduce((subSum, num) => (subSum += num), 0);
  }
  return sum;

  // Либо 2  reduce
  //   return arr.reduce((totalSum, subArray) => totalSum + subArray.reduce((subSum, num) => subSum + num, 0), 0);
}
