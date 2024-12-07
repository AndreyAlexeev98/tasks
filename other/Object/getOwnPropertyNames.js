// Object.getOwnPropertyNames возвращает массив всех имен собственных свойств объекта, включая неперечисляемые свойства (в отличие от Object.keys, который возвращает только перечисляемые). Это может быть полезно для изучения структуры объекта или работы с объектами, у которых есть скрытые или системные свойства.

// Пример 1: Получение всех свойств объекта
const obj = {
  a: 1,
  b: 2,
};

Object.defineProperty(obj, "hidden", {
  value: 42,
  enumerable: false,
});

console.log(Object.getOwnPropertyNames(obj));
// Output: ['a', 'b', 'hidden']
// Здесь свойство hidden не перечисляется в обычном Object.keys, но Object.getOwnPropertyNames его возвращает.

// Пример 2: Работа с системными свойствами объекта
class CustomClass {
  constructor() {
    this.visibleProperty = "I am visible!";
  }
  get hiddenMethod() {
    return "I am hidden!";
  }
}

Object.defineProperty(CustomClass.prototype, "hiddenProperty", {
  value: "Not enumerable",
  enumerable: false,
});

const instance = new CustomClass();

console.log(Object.getOwnPropertyNames(instance));
// Output: ['visibleProperty']

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(instance)));
// Output: ['constructor', 'hiddenProperty']
// Здесь hiddenProperty находится в прототипе и не перечисляется в обычных обходах, но виден через getOwnPropertyNames.

// Пример 3: Инспекция встроенного объекта
console.log(Object.getOwnPropertyNames(Array.prototype));
// Output: ['length', 'constructor', 'toString', 'toLocaleString', ...]
// Это позволяет изучить методы встроенного прототипа Array, включая те, которые могут быть неперечисляемыми.

// Пример 4: Клонирование объекта, включая неперечисляемые свойства
// Если нужно клонировать объект вместе с его неперечисляемыми свойствами:

function cloneObject(obj) {
  const clone = {};
  const properties = Object.getOwnPropertyNames(obj);

  properties.forEach((prop) => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    Object.defineProperty(clone, prop, descriptor);
  });

  return clone;
}

const obj = { a: 1 };
Object.defineProperty(obj, "hidden", {
  value: 42,
  enumerable: false,
});

const clonedObj = cloneObject(obj);
console.log(Object.getOwnPropertyNames(clonedObj));
// Output: ['a', 'hidden']
// Этот метод копирует все свойства, включая их дескрипторы.

// Пример 5: Проверка наличия неперечисляемых свойств
const obj = { a: 1 };
Object.defineProperty(obj, "hidden", {
  value: 42,
  enumerable: false,
});

const hasNonEnumerable = Object.getOwnPropertyNames(obj).some(
  (prop) => !obj.propertyIsEnumerable(prop)
);

console.log(hasNonEnumerable);
// Output: true
// Это полезно, если нужно проверить, есть ли у объекта скрытые свойства.

// Вывод
// Object.getOwnPropertyNames — мощный инструмент для изучения структуры объектов, работы с неперечисляемыми свойствами и выполнения глубокого клонирования. Это полезно, когда требуется полное понимание объекта, включая его скрытые аспекты.
