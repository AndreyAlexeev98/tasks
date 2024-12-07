// Задача 1: Проверка родителя объекта
// Дан объект, созданный с использованием функции-конструктора или класса. Используйте Object.getPrototypeOf для проверки, является ли его прототипом определенный объект.

// Пример:
function Animal() {}
const dog = new Animal();

// console.log(Object.getPrototypeOf(dog) === Animal.prototype);

// Задача 2: Проверка наследования через цепочку прототипов
// Создайте несколько объектов, связанных через Object.create. Используйте Object.getPrototypeOf для проверки, находится ли объект в цепочке наследования другого объекта.

// Пример:

const grandparent = { name: "Grandparent" };
const parent = Object.create(grandparent);
const child = Object.create(parent);

function isInPrototypeChain(obj, ancestor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === ancestor) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

console.log(isInPrototypeChain(parent, grandparent));
// Output: true

// Задача 3: Проверка встроенного прототипа
// Дан объект, созданный встроенным конструктором (например, Array или Date). Используйте Object.getPrototypeOf, чтобы определить, с каким встроенным объектом он связан.

// Пример:
const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(arr) === Array.prototype);
// Output: true

const date = new Date();

console.log(Object.getPrototypeOf(date) === Date.prototype);
// Output: true

// Задача 4: Динамическая замена прототипа и проверка
// Дан объект. Используйте Object.getPrototypeOf для проверки его текущего прототипа, а затем измените прототип с помощью Object.setPrototypeOf и проверьте изменения.

// Пример:
const obj = { a: 1 };
const newProto = { b: 2 };

console.log(Object.getPrototypeOf(obj));
// Output: {}

Object.setPrototypeOf(obj, newProto);

console.log(Object.getPrototypeOf(obj) === newProto);
// Output: true
// Цель задачи: Понять, как использовать Object.getPrototypeOf и Object.setPrototypeOf для работы с прототипами объектов.

// Примечание
// Object.getPrototypeOf особенно полезен для работы с цепочкой наследования, проверки источников объекта и его связи с конструктором или классом.
