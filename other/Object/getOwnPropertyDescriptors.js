// Метод Object.getOwnPropertyDescriptors возвращает объект, где ключи — это имена всех собственных свойств объекта (включая неперечисляемые), а значения — их дескрипторы. Дескрипторы свойств содержат информацию о том, как свойства ведут себя, например, их значения, возможность перечисления, записи или настройки.

// Пример 1: Получение дескрипторов всех свойств объекта
(function () {
  const obj = {
    a: 1,
    b: 2,
  };

  Object.defineProperty(obj, "hidden", {
    value: 42,
    enumerable: false,
    writable: false,
  });

  console.log(Object.getOwnPropertyDescriptors(obj));
})();
/*
Output:
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { value: 2, writable: true, enumerable: true, configurable: true },
  hidden: { value: 42, writable: false, enumerable: false, configurable: false }
}
*/
// Здесь getOwnPropertyDescriptors возвращает информацию о всех свойствах объекта, включая неперечисляемые, например hidden.

// Пример 2: Использование для глубокого клонирования объекта
// Object.getOwnPropertyDescriptors можно использовать для копирования объекта вместе с дескрипторами его свойств:

(function () {
  function cloneWithDescriptors(obj) {
    const clone = Object.create(Object.getPrototypeOf(obj));
    Object.defineProperties(clone, Object.getOwnPropertyDescriptors(obj));
    return clone;
  }

  const obj = {};
  Object.defineProperty(obj, "nonWritable", {
    value: "I am read-only",
    writable: false,
    enumerable: true,
    configurable: false,
  });

  const clonedObj = cloneWithDescriptors(obj);
  console.log(clonedObj.nonWritable); // "I am read-only"
  console.log(Object.getOwnPropertyDescriptors(clonedObj));
})();
/*
Output:
{
  nonWritable: {
    value: 'I am read-only',
    writable: false,
    enumerable: true,
    configurable: false
  }
}
*/
// Данный подход позволяет создать точную копию объекта с сохранением всех его дескрипторов.

// Пример 3: Проверка типов дескрипторов свойства
// Можно использовать Object.getOwnPropertyDescriptors, чтобы проверить, являются ли свойства геттерами/сеттерами или просто имеют значения:
(function () {
  const obj = {
    a: 1,
    get b() {
      return 2;
    },
  };

  console.log(Object.getOwnPropertyDescriptors(obj));
})()(
  /*
Output:
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { get: [Function: get b], set: undefined, enumerable: true, configurable: true }
}
*/
  // Здесь видно, что свойство b является геттером, а не обычным свойством.

  // Пример 4: Вывод неперечисляемых свойств
  function () {
    const obj = {};
    Object.defineProperty(obj, "hidden", {
      value: "I am hidden",
      enumerable: false,
    });

    console.log(Object.getOwnPropertyDescriptors(obj));
  }
)();
/*
Output:
{
  hidden: { value: 'I am hidden', writable: true, enumerable: false, configurable: true }
}
*/
// Этот метод помогает легко выявить неперечисляемые свойства объекта.

// Пример 5: Расширение объекта с сохранением дескрипторов
// Можно использовать Object.getOwnPropertyDescriptors для добавления новых свойств в объект, сохраняя их дескрипторы:

const source = {
  a: 1,
  get b() {
    return 2;
  },
};

const target = {};
Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

console.log(target.a); // 1
console.log(target.b); // 2
console.log(Object.getOwnPropertyDescriptors(target));
/*
Output:
{
  a: { value: 1, writable: true, enumerable: true, configurable: true },
  b: { get: [Function: get b], set: undefined, enumerable: true, configurable: true }
}
*/
// Пример 6: Определение изменяемости свойства
// Если вы хотите проверить, можно ли изменить значение свойства:

const obj = {};
Object.defineProperty(obj, "immutable", {
  value: "I cannot be changed",
  writable: false,
});

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.immutable.writable); // false
// Вывод
// Object.getOwnPropertyDescriptors — это мощный инструмент, который позволяет:

// Инспектировать свойства объекта.
// Глубоко клонировать объекты с сохранением их дескрипторов.
// Работать с геттерами, сеттерами и скрытыми свойствами.
// Изучать изменяемость и настраиваемость свойств.
// Это особенно полезно при работе с библиотеками, где важна точная структура объектов и их поведение.
