// Напишите функцию, которая рекурсивно вычисляет факториал числа n.
// Условия:
// - Входное значение n будет целым числом, и n >= 0.
// -Если n = 0, результат должен быть 1.
// Example:
// - factorial(0); // 0! = 1 // математическое правило
// - factorial(1); // 1! = 1
// - factorial(2); // 2! = 2 × 1 = 2
// - factorial(5); // 5! = 5 × 4 × 3 × 2 × 1 = 120
// - factorial(7); // 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
