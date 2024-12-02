// Напишите функцию, которая возвращает n-е число Фибоначчи, где:

// Первое число 𝐹(0) = 0; // По правилу линейной рекуррентной последовательности
// Второе число 𝐹(1) = 1; // По правилу линейной рекуррентной последовательности
// Каждое следующее число (начиная с 2х):
// 𝐹(𝑛) = 𝐹(𝑛−1) + 𝐹(𝑛−2);
// F(2) = F(1) + F(0) = 1 + 0 = 1
// F(3) = F(2) + F(1) = 1 + 1 = 2
// F(9) = F(8) + F(7) = 21 + 13 = 34

// fib(5) = 5 // 0, 1, 1, 2, 3, 5
// fib(10) = 55 // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) для всех n > 1.
// Условие:
// Входное значение n будет целым числом, и n >= 0.

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
Рекурсивное решение простое, но неэффективное для больших чисел, так как оно повторяет одни и те же вычисления много раз.

Более эффективный подход — итеративное решение:

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1, sum = 0;

  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  
  return sum;
}

console.log(fibonacci(5));  // 5
console.log(fibonacci(10)); // 55

*/