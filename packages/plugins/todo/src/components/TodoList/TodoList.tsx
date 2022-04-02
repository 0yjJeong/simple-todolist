import React, { FC } from 'react';
import { Todo } from '../../types';
import TodoListCard from '../TodoListCard/TodoListCard';
import TodoListForm from '../TodoListForn/TodoListForm';
import '../../style.css';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      <TodoListForm />
      <ul className='todolist__container'>
        {todos.map((todo) => (
          <TodoListCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
