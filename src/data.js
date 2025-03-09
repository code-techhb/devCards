const flashcardData = {
  javascript: [
    {
      Question: "What is JavaScript?",
      Answer:
        "JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's a core technology of the World Wide Web and can be used for client-side and server-side development.",
    },
    {
      Question: "What are the primitive data types in JavaScript?",
      Answer:
        "JavaScript has seven primitive data types: String, Number, BigInt, Boolean, undefined, null, and Symbol.",
    },
    {
      Question: "What is the difference between '==' and '==='?",
      Answer:
        "The '==' operator performs type coercion before comparing values, while '===' is a strict equality operator that checks both value and type without conversion.",
    },
    {
      Question: "What is hoisting in JavaScript?",
      Answer:
        "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before code execution. This means variables and function declarations can be used before they are declared in the code.",
    },
    {
      Question: "What is closure in JavaScript?",
      Answer:
        "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has finished executing.",
    },
    {
      Question: "What is the event loop in JavaScript?",
      Answer:
        "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It handles asynchronous callbacks and manages the execution of code.",
    },
    {
      Question: "What is a Promise in JavaScript?",
      Answer:
        "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's success or failure.",
    },
    {
      Question: "What is async/await in JavaScript?",
      Answer:
        "Async/await is a syntax that makes asynchronous code look and behave more like synchronous code. 'async' declares that a function returns a Promise, and 'await' pauses execution until the Promise resolves.",
    },
    {
      Question: "What is the DOM?",
      Answer:
        "The Document Object Model (DOM) is a programming interface for web documents. It represents the page as a tree of nodes that can be manipulated with JavaScript.",
    },
    {
      Question: "What is a callback function?",
      Answer:
        "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action or routine.",
    },
    {
      Question: "What is the difference between let, const, and var?",
      Answer:
        "var is function-scoped and can be redeclared and updated. let is block-scoped and can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared.",
    },
    {
      Question: "What is destructuring in JavaScript?",
      Answer:
        "Destructuring is a way to unpack values from arrays or objects into distinct variables, making it easier to work with these data structures.",
    },
    {
      Question: "What is the spread operator?",
      Answer:
        "The spread operator (...) allows an iterable such as an array or string to be expanded into individual elements, or an object to be expanded into individual key-value pairs.",
    },
    {
      Question: "What are template literals?",
      Answer:
        "Template literals are string literals that allow embedded expressions and multi-line strings. They are enclosed by backticks (`) instead of quotes.",
    },
    {
      Question: "What is the purpose of the 'this' keyword?",
      Answer:
        "The 'this' keyword refers to the object it belongs to. In a method, 'this' refers to the owner object. Its value changes depending on how a function is called.",
    },
    {
      Question: "What is event bubbling?",
      Answer:
        "Event bubbling is a mechanism where an event triggered on a nested element 'bubbles up' through its ancestors in the DOM tree, triggering their event handlers as well.",
    },
    {
      Question: "What is a JavaScript module?",
      Answer:
        "A module is a file containing JavaScript code that can be imported and exported between different files, allowing for better organization and reuse of code.",
    },
    {
      Question: "What is JSON?",
      Answer:
        "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
    },
    {
      Question: "What are arrow functions?",
      Answer:
        "Arrow functions are a concise way to write function expressions in JavaScript. They don't have their own 'this', 'arguments', 'super', or 'new.target' bindings.",
    },
    {
      Question: "What is functional programming in JavaScript?",
      Answer:
        "Functional programming is a programming paradigm where functions are treated as first-class citizens, emphasizing immutability, pure functions, and avoiding side effects.",
    },
    {
      Question: "What is prototypal inheritance?",
      Answer:
        "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects through a prototype chain.",
    },
    {
      Question: "What is the difference between map, filter, and reduce?",
      Answer:
        "map creates a new array by transforming each element. filter creates a new array with elements that pass a test. reduce executes a reducer function on each element to reduce it to a single output value.",
    },
    {
      Question: "What is a service worker?",
      Answer:
        "A service worker is a script that runs in the background, separate from a web page, enabling features like offline access, background sync, and push notifications.",
    },
    {
      Question: "What is localStorage and sessionStorage?",
      Answer:
        "localStorage and sessionStorage are web storage APIs that allow you to store key-value pairs in a web browser. localStorage persists until explicitly deleted, while sessionStorage lasts only for the duration of the page session.",
    },
    {
      Question: "What is the fetch API?",
      Answer:
        "The fetch API provides a JavaScript interface for accessing and manipulating HTTP requests and responses. It returns Promises that make it easier to handle asynchronous operations.",
    },
  ],
  react: [
    {
      Question: "What is React?",
      Answer:
        "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components that efficiently update when data changes.",
    },
    {
      Question: "What is JSX?",
      Answer:
        "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files, making it easier to describe what your UI should look like.",
    },
    {
      Question: "What is a React component?",
      Answer:
        "A React component is a reusable piece of code that returns React elements describing what should appear on the screen. Components can be either function components or class components.",
    },
    {
      Question: "What are props in React?",
      Answer:
        "Props (short for properties) are read-only inputs to React components. They are passed from parent components to child components and help make components reusable and dynamic.",
    },
    {
      Question: "What is state in React?",
      Answer:
        "State is a JavaScript object that represents the parts of the component that can change over time. State is private to the component and is fully controlled by it.",
    },
    {
      Question: "What is the useState hook?",
      Answer:
        "useState is a React hook that lets you add state to functional components. It returns a stateful value and a function to update it, allowing functional components to have local state.",
    },
    {
      Question: "What is the useEffect hook?",
      Answer:
        "useEffect is a React hook that lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components.",
    },
    {
      Question: "What is the virtual DOM?",
      Answer:
        "The virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by comparing the virtual DOM with the real DOM and only updating what has changed.",
    },
    {
      Question: "What is React Router?",
      Answer:
        "React Router is a standard library for routing in React applications. It enables navigation among views in a React application, allowing for a single-page application with multiple views.",
    },
    {
      Question: "What are controlled components in React?",
      Answer:
        "Controlled components are form elements (like inputs, textareas, and selects) whose values are controlled by React state. The component's state serves as the 'single source of truth' for the input's value.",
    },
    {
      Question: "What is the Context API?",
      Answer:
        "The Context API is a feature in React that allows you to share state across the application without having to pass props through multiple levels of components (prop drilling).",
    },
    {
      Question: "What is Redux?",
      Answer:
        "Redux is a state management library often used with React. It provides a predictable state container and helps manage application state, especially in large applications with complex state logic.",
    },
    {
      Question: "What are React Hooks?",
      Answer:
        "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components, allowing you to use state and other React features without writing a class.",
    },
    {
      Question: "What is the useContext hook?",
      Answer:
        "useContext is a hook that accepts a context object and returns the current context value. It provides a way to consume context in function components without wrapper components.",
    },
    {
      Question: "What is the useReducer hook?",
      Answer:
        "useReducer is a hook that accepts a reducer function and an initial state, returning the current state paired with a dispatch method. It's an alternative to useState for complex state logic.",
    },
    {
      Question: "What is prop drilling?",
      Answer:
        "Prop drilling refers to the process of passing props through multiple levels of nested components that don't need those props except to pass them down to a deeply nested component that does need them.",
    },
    {
      Question: "What are React fragments?",
      Answer:
        "React fragments allow you to group a list of children without adding extra nodes to the DOM. They help avoid unnecessary wrapper divs that might interfere with styling or layout.",
    },
    {
      Question: "What is the key prop in React?",
      Answer:
        "The key prop is a special attribute that helps React identify which items have changed, been added, or been removed in lists. It should be a unique value among siblings to ensure proper reconciliation.",
    },
    {
      Question: "What is React StrictMode?",
      Answer:
        "StrictMode is a tool for highlighting potential problems in a React application. It activates additional checks and warnings for its descendants and helps identify unsafe lifecycle methods and legacy APIs.",
    },
    {
      Question: "What is code splitting in React?",
      Answer:
        "Code splitting is a technique that allows you to split your code into smaller chunks that can be loaded on demand or in parallel, reducing the initial bundle size and improving the application's performance.",
    },
    {
      Question: "What are React portals?",
      Answer:
        "React portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component, useful for modals, tooltips, and floating menus.",
    },
    {
      Question: "What is React.memo?",
      Answer:
        "React.memo is a higher-order component that memoizes a component, preventing unnecessary re-renders when the props haven't changed, which can improve performance.",
    },
    {
      Question: "What is the useCallback hook?",
      Answer:
        "useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed, helping prevent unnecessary re-renders in child components.",
    },
    {
      Question: "What is the useMemo hook?",
      Answer:
        "useMemo is a hook that returns a memoized value that only recalculates when one of its dependencies changes, which helps optimize expensive calculations in render functions.",
    },
    {
      Question: "What is server-side rendering in React?",
      Answer:
        "Server-side rendering (SSR) is the process of rendering React components on the server instead of in the browser, sending fully rendered HTML to the client. It improves initial load time and SEO.",
    },
  ],
  dsa: [
    {
      Question: "What is a stack?",
      Answer:
        "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added and removed from the same end, called the top.",
    },
    {
      Question: "What is a queue?",
      Answer:
        "A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front.",
    },
    {
      Question: "What is a linked list?",
      Answer:
        "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Each element (node) contains data and a reference to the next node.",
    },
    {
      Question: "What is a binary tree?",
      Answer:
        "A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child.",
    },
    {
      Question: "What is a binary search tree (BST)?",
      Answer:
        "A binary search tree is a binary tree with the property that for each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater than the node.",
    },
    {
      Question: "What is a hash table?",
      Answer:
        "A hash table is a data structure that implements an associative array, mapping keys to values using a hash function. It provides efficient lookup, insertion, and deletion operations.",
    },
    {
      Question: "What is a graph?",
      Answer:
        "A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. It represents relationships between pairs of objects.",
    },
    {
      Question: "What is Big O notation?",
      Answer:
        "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms according to their time or space complexity.",
    },
    {
      Question: "What is the time complexity of binary search?",
      Answer:
        "The time complexity of binary search is O(log n), where n is the number of elements in the sorted array.",
    },
    {
      Question: "What is recursion?",
      Answer:
        "Recursion is a technique where a function calls itself directly or indirectly to solve a problem. It's often used to solve problems that can be broken down into simpler, similar sub-problems.",
    },
    {
      Question: "What is dynamic programming?",
      Answer:
        "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.",
    },
    {
      Question: "What is a greedy algorithm?",
      Answer:
        "A greedy algorithm makes the locally optimal choice at each step with the hope of finding a global optimum. It makes the best immediate choice without considering the future consequences.",
    },
    {
      Question: "What is depth-first search (DFS)?",
      Answer:
        "Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack (or recursion) to keep track of nodes to visit.",
    },
    {
      Question: "What is breadth-first search (BFS)?",
      Answer:
        "Breadth-first search is a graph traversal algorithm that explores all neighbors at the present depth before moving on to nodes at the next depth level. It uses a queue to keep track of nodes to visit.",
    },
    {
      Question: "What is a heap data structure?",
      Answer:
        "A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, the key at each node is greater than or equal to the keys in its children. In a min heap, the key at each node is less than or equal to the keys in its children.",
    },
    {
      Question: "What is a trie?",
      Answer:
        "A trie (or prefix tree) is a tree-like data structure used to store a dynamic set of strings, where the keys are usually strings. It's particularly useful for searches involving string prefixes.",
    },
    {
      Question:
        "What is the difference between a stable and unstable sorting algorithm?",
      Answer:
        "A stable sorting algorithm maintains the relative order of equal elements in the sorted output as they appeared in the input. An unstable sorting algorithm might change this relative order.",
    },
    {
      Question: "What is the time complexity of quicksort?",
      Answer:
        "The average time complexity of quicksort is O(n log n), but the worst-case time complexity is O(n²) if poorly implemented or with unfortunate pivot choices.",
    },
    {
      Question: "What is memoization?",
      Answer:
        "Memoization is an optimization technique where the results of expensive function calls are stored and returned when the same inputs occur again, avoiding redundant calculations.",
    },
    {
      Question: "What is an AVL tree?",
      Answer:
        "An AVL tree is a self-balancing binary search tree where the difference in heights of left and right subtrees of any node is at most one. This balancing helps maintain O(log n) operations.",
    },
    {
      Question: "What is a B-tree?",
      Answer:
        "A B-tree is a self-balancing search tree designed to work well on disk or other direct-access storage. It maintains sorted data and allows searches, insertions, and deletions in logarithmic time.",
    },
    {
      Question: "What is the difference between a tree and a graph?",
      Answer:
        "A tree is a special type of graph that is acyclic (no cycles) and connected (all nodes can be reached from any starting node). Every tree is a graph, but not every graph is a tree.",
    },
    {
      Question: "What is a topological sort?",
      Answer:
        "A topological sort of a directed graph is a linear ordering of its vertices such that for every directed edge (u, v), vertex u comes before vertex v in the ordering. It's only possible for directed acyclic graphs (DAGs).",
    },
    {
      Question: "What is Dijkstra's algorithm?",
      Answer:
        "Dijkstra's algorithm is a greedy algorithm for finding the shortest paths between nodes in a graph with non-negative edge weights. It builds the path incrementally, always choosing the next node with the minimum distance.",
    },
    {
      Question: "What is the Bellman-Ford algorithm?",
      Answer:
        "The Bellman-Ford algorithm is used to find the shortest paths from a single source vertex to all other vertices in a weighted graph. Unlike Dijkstra's algorithm, it can handle graphs with negative weight edges.",
    },
  ],
};

export default flashcardData;
