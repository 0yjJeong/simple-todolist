import React from 'react';
import TodoList from '@todolist/plugin-todo';

const todos = [
  { id: 'a', title: 'a', checked: true },
  { id: 'b', title: 'b', checked: false },
];

function App() {
  return <TodoList todos={todos} />;
}

export default App;
