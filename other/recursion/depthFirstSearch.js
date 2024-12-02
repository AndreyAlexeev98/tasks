/*
Обход графа (DFS - Depth First Search)
Задача:
Дан ориентированный граф в виде смежного списка. Напишите функцию, которая обходит граф в глубину и возвращает все узлы, которые можно достичь из начального узла.

const graph = {
  0: [1, 2],
  1: [3],
  2: [4, 5],
  3: [],
  4: [],
  5: []
};

// Начать обход с узла 0
*/

function depthFirstSearch(graph, startNode) {
  const visited = new Set(); // Множество для отслеживания посещенных узлов
  const result = []; // Массив для хранения узлов, которые можно достичь

  function dfs(node) {
    if (visited.has(node)) {
      return; // Если узел уже посещен, выходим
    }

    visited.add(node); // Помечаем узел как посещенный
    result.push(node); // Добавляем узел в результат

    // Рекурсивно обходим всех соседей узла
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  dfs(startNode); // Запускаем DFS с начального узла
  return result;
}

const graph = {
  0: [1, 2],
  1: [3],
  2: [4, 5],
  3: [],
  4: [],
  5: [],
};

console.log(depthFirstSearch(graph, 0)); // Ожидаемый результат: [0, 1, 3, 2, 4, 5]

///////////
///////////
///////////

// Графы часто встречаются во фронтенд-разработке, особенно когда речь идет о ссылках, зависимостях, компонентах, и даже взаимодействиях между элементами интерфейса. Чтобы лучше понять, как задача обхода графа применяется в реальной жизни, рассмотрим несколько примеров из реальных задач во фронтенде.

// 1. Обход DOM-дерева
//  <div id="root">
//   <section>
//   <p>Текст</p>
//   <span>Еще текст</span>
// </section>
// <footer>
//   <a href="#">Ссылка</a>
// </footer>
// </div>

// нужно обойти все элементы внутри #root и собрать их теги.
//Решение с помощью DFS:

function traverseDOM(element) {
  const result = [];

  function dfs(node) {
    result.push(node.tagName); // Добавляем текущий тег в результат
    for (let child of node.children) {
      dfs(child); // Рекурсивно обходим каждого ребенка
    }
  }

  dfs(element);
  return result;
}

const rootElement = document.getElementById("root");
console.log(traverseDOM(rootElement));
// ['DIV', 'SECTION', 'P', 'SPAN', 'FOOTER', 'A']

// Как это полезно?
// Извлечение всех элементов на странице (например, для анализа структуры).
// Поиск определённых элементов (например, всех <img> без alt).
// Модификация всех элементов определенного типа (например, всем <p> добавить CSS-класс).

// 2. Управление зависимостями между компонентами
// Во фронтенд-разработке компоненты часто зависят друг от друга. Например, в React или Vue компонент может использовать другой компонент, который в свою очередь зависит от третьего компонента.

// Пример задачи:
// Представим, что у нас есть следующая зависимость компонентов:

// App -> Header -> Logo
// App -> Footer

// Этот граф можно представить так:

const componentGraph = {
  App: ["Header", "Footer"],
  Header: ["Logo"],
  Footer: [],
  Logo: [],
};

// Теперь представим, что нужно обойти все компоненты, которые необходимо отрендерить, начиная с App.

// Решение с помощью DFS:

function traverseComponents(graph, start) {
  const result = [];
  const visited = new Set();

  function dfs(node) {
    if (visited.has(node)) return; // Избегаем повторного посещения
    visited.add(node);
    result.push(node); // Добавляем компонент в порядок рендера

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  dfs(start);
  return result;
}

console.log(traverseComponents(componentGraph, "App"));
// ['App', 'Header', 'Logo', 'Footer']

// Как это полезно?
// Определение порядка рендера компонентов.
// Поиск циклических зависимостей в компонентах.
// Динамическая подгрузка зависимостей (Lazy Loading).

// 3. Обход маршрутов (Routing)

// В современных приложениях маршруты (routes) и переходы между ними можно рассматривать как граф. Например, роут /dashboard может быть связан с /dashboard/settings, который в свою очередь может ссылаться на /dashboard/settings/profile.

// Пример:

const routeGraph = {
  "/dashboard": ["/dashboard/settings"],
  "/dashboard/settings": ["/dashboard/settings/profile"],
  "/dashboard/settings/profile": [],
};

// Теперь, если пользователь находится на /dashboard, мы хотим найти все страницы, которые доступны из него.

function findAccessibleRoutes(graph, startRoute) {
  const accessibleRoutes = [];
  const visited = new Set();

  function dfs(route) {
    if (visited.has(route)) return;
    visited.add(route);
    accessibleRoutes.push(route);

    for (let neighbor of graph[route]) {
      dfs(neighbor);
    }
  }

  dfs(startRoute);
  return accessibleRoutes;
}

console.log(findAccessibleRoutes(routeGraph, "/dashboard"));
// ['/dashboard', '/dashboard/settings', '/dashboard/settings/profile']

// Как это полезно?
// Поиск доступных маршрутов из текущего пути.
// Построение карты маршрутов приложения.
// Обход маршрутов для построения динамических меню или хлебных крошек (breadcrumbs).

// 4. Связь между пользователями в социальных сетях
// Социальная сеть может быть представлена как граф, где узлы — это пользователи, а связи — это дружба или подписка.

// Пример:

const socialGraph = {
  Alice: ["Bob", "Carol"],
  Bob: ["Dave"],
  Carol: ["Eve"],
  Dave: [],
  Eve: [],
};

// Если мы хотим найти всех друзей, которых может достичь Alice, обход графа в глубину нам в этом поможет.
