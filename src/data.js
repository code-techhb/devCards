const flashcardQuestions = [
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
];

export default flashcardQuestions;
