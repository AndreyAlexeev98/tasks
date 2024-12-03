// №1
// Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

function getZeroPositionList(str) {
  const result = [];
  const index = 0;
  while (index < str.length) {
    index = str.indexOf("0", index);
    if (index === -1) break;
    result.push(index);
    index++;
  }
  return result;
}

// №2
// Дана некоторая строка: 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

function deleteThirdChar(str) {
  let start = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % 3 !== 0) {
      result += str[i];
    }
  }
  return result;
}

// №3
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

function divNumbers(arr) {
  let evenSum = 0;
  let noEvenSum = 0;
  arr.forEach((num, i) => {
    if (i % 2 === 0) {
      evenSum += num;
    } else {
      noEvenSum += num;
    }
  });

  if (oddSum === 0) {
    throw new Error("Division by zero");
  }

  return evenSum / oddSum;
}
