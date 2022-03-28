import React, { FC } from 'react';
import { Todo } from '../../types';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type='checkbox' defaultChecked={todo.checked} />
          <p>{todo.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
