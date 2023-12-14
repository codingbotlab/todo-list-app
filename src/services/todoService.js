// src/services/todoService.js

// Initial dummy data
let todos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a To-Do App', completed: true },
  // Add more initial todos as needed
];

// Function to get all todos
export const getAllTodos = () => {
  return todos;
};

// Function to add a new todo
export const addTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};

// Function to toggle the completion status of a todo
export const toggleTodo = (id) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

// Function to delete a todo
export const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

// Export additional functions as needed for your application
