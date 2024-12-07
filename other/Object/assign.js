// Задача 1: Создание объекта с дефолтными значениями
// Условие:
// Есть объект с пользовательскими настройками, а также объект с настройками по умолчанию. Нужно создать итоговый объект, который объединяет пользовательские настройки с дефолтными. Если пользователь указал настройку, она должна перезаписать значение по умолчанию.
const defaultSettings = {
  theme: "light",
  notifications: true,
  autoSave: false,
};

const userSettings = {
  theme: "dark",
  autoSave: true,
};

// Итоговый объект:
// {
//   theme: "dark",
//   notifications: true,
//   autoSave: true
// }

// Решение
const mergeObj = Object.assign({}, defaultSettings, userSettings);

// Задача 2: Клонирование объекта
// Условие:
// Дан объект, содержащий данные пользователя. Необходимо создать его копию, чтобы изменения в новом объекте не затрагивали оригинал.
// Пример:
const peopleGirls = {
  sex: "woman",
};

const user = {
  name: "Alice",
  age: 30,
  child: peopleGirls,
};

// Решение
const safeCopyObject = Object.assign({}, user);

// Задача 3: Слияние нескольких объектов
// Условие:
// Дано несколько объектов с частичной информацией о продукте. Нужно объединить их в один полный объект.
// Пример:
const productPart1 = {
  name: "Smartphone",
  brand: "TechCorp",
};
const productPart2 = { price: 599, inStock: true };
const productPart3 = { warranty: "2 years" };

// Итоговый объект:
// {
//   name: "Smartphone",
//   brand: "TechCorp",
//   price: 599,
//   inStock: true,
//   warranty: "2 years"
// }

// Решение:
function mergeObjects(...objs) {
  return Object.assign({}, ...objs);
}

//
// !!!
//

//  Object.assign и spread оператор { ...obj }, делает поверхностное копирование. Чтобы гарантированно разорватыь ссылки на вложенные обьекты, можно:

// 1. JSON.parse(JSON.stringify(obj)). Простой способ, но он не работает с функциями, undefined, и другими специфическими значениями (например, Date).
const deepCloneFromJson = JSON.parse(JSON.stringify(user));

// 2. Рекурсивный подход Написание собственной функции для глубокого клонирования:
function deepCloneRecursive(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// с 22го года браузеры начали внедрять поддержку глобального метода structuredClone()

const someUser = {
  id: 1,
  profile: {
    name: "Alice",
    hobbies: ["reading", "coding"],
  },
};

const clonedUser = structuredClone(someUser);

// Изменения в клоне не затрагивают оригинал
clonedUser.profile.hobbies.push("gaming");

console.log(someUser.profile.hobbies); // ["reading", "coding"]
console.log(clonedUser.profile.hobbies); // ["reading", "coding", "gaming"]
