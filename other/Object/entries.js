// Задача 1: Подсчет количества определенных значений в объекте
// Дан объект, где ключи — это имена студентов, а значения — их оценки. Нужно подсчитать, сколько студентов получили каждую оценку.
// Пример:
const grades = {
  Alice: "A",
  Bob: "B",
  Charlie: "A",
  David: "C",
  Eve: "B",
};

// Output: { A: 2, B: 2, C: 1 }

function countGrades(grades) {
  const gradeCount = {};

  Object.entries(grades).forEach(([name, grade]) => {
    gradeCount[grade] = (gradeCount[grade] || 0) + 1;
  });

  return gradeCount;
}

// Задача 2: Фильтрация объекта по значению
// Дан объект, где ключи — это названия продуктов, а значения — их цены. Нужно отфильтровать товары, чья цена выше заданной.

// Пример:

const products = {
  apple: 50,
  banana: 30,
  cherry: 75,
  date: 20,
};

//   console.log(filterExpensiveProducts(products, 40));
// Output: { apple: 50, cherry: 75 }
function filterExpensiveProducts(products, price) {
  // Option 1
  //
  // const copiedProducts = structuredClone(products);
  // for (const name in copiedProducts) {
  //   if (copiedProducts[name] < price) {
  //     delete copiedProducts[name];
  //   }
  // }
  // return copiedProducts;
  //
  // Option 2
  //
  // const filteredProduct = {};
  // for (const name in products) {
  //   if (products[name] > price) {
  //     filteredProduct[name] = products[name];
  //   }
  // }
  //
  // Option 3
  //
  // const filteredProduct = {};
  // Object.entries(products).forEach(([name, productPrice]) => {
  //   if (productPrice > price) {
  //     filteredProduct[name] = productPrice;
  //   }
  // });
  // return filteredProduct;
  //
  // Option 4
  //
  return Object.fromEntries(
    Object.entries(products).filter(
      ([name, productPrice]) => productPrice > price
    )
  );
}

//   Задача 3: Обратный объект (ключи и значения меняются местами)
// Дан объект, где ключи — это названия цветов, а значения — это их коды. Нужно создать новый объект, где ключи и значения поменяются местами.

// Пример:

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};
// Output: { '#FF0000': 'red', '#00FF00': 'green', '#0000FF': 'blue' }

function invertObject(colors) {
  return Object.fromEntries(
    Object.entries(colors).map(([name, code]) => [code, name])
  );
}
