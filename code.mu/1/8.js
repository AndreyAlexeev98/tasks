// №1
// Заполните массив целыми числами от 1 до 10.
function setArray() {
  const array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }

  return array;
  // замороченный способ - return Array.from({ length: 10 }, (_, i) => i + 1);
}
// №2
// Заполните массив четными числами из промежутка от 1 до 100.
function setArrayDoubleNumbers() {
  const array = [];
  for (let i = 2; i <= 100; i += 2) {
    array.push(i);
  }
  return array;
}

// №3
// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
function roundingFractions(array) {
  return array.map((num) => +num.toFixed(1));
  // todo
  // toFixed() округляет в строку, а не в число. В некоторых случаях для округления может быть полезно использовать метод Math.round() - return array.map((num) => Math.round(num * 10) / 10);
}
