// №1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
function firstNumEven(start, end) {
  for (let i = start; i < end; i++) {
    const firstDigit = +i.toString()[0];
    if (firstDigit % 2 === 0) {
      console.log(i);
    }
  }
}

firstNumEven(10, 1000);

// №2
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:
// [2, 1, 4, 3, 6, 5]

function reverseSubArrays(arr) {
  const reverseArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    reverseArray.push(...arr.slice(i, i + 2).reverse());
  }
  return reverseArray;
}

// №3
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.

// решение 1
function getSum(obj) {
  let sum = 0;
  for (const subObjKey in obj) {
    const subObj = obj[subObjKey];
    for (const key in subObj) {
      sum += subObj[key];
    }
  }
  return sum;
}

// решение 2
//   function getSum(obj) {
//   let sum = 0;
//   for (const subObjKey in obj) {
//     sum += Object.values(obj[subObjKey]).reduce(
//       (sumSubObj, num) => (sumSubObj += num)
//     );
//   }
//   return sum;
// }

// Оба решения имеют O(n), но на 2е потребуется больше памяти, т.к. первое не создает дополнительных переменных  в процессе выполнения
