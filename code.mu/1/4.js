// №1
// Выведите в консоль все целые числа от 1 до 100.
function getNaturalNumbers() {
  let count = 1;
  while (count <= 100) {
    console.log(count);
    count++;
  }
}

// №2
// Выведите в консоль все целые числа от -100 до 0.
function getIntenger() {
  for (let i = -100; i <= 0; i++) {
    console.log(i);
  }
}

// №3
// Выведите в консоль все целые числа от 100 до 1.
function getNaturalIntenger() {
  for (let i = 100; i >= 1; i--) {
    console.log(i);
  }
}

// №4
// Выведите в консоль все четные числа из промежутка от 1 до 100.
function evenNumbers() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}

// №5
// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

function multiplesThree() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      // более оптимальное решение избавиться от %, а в цикле - i = 3; i+=3
      console.log(i);
    }
  }
}
