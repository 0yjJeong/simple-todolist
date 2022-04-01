import React, { FC } from 'react';
import { Todo } from '../../types';
import TodoListCard from '../TodoListCard/TodoListCard';
import TodoListForm from '../TodoListForn/TodoListForm';
import TodoListInner from './TodoListInner';
import TodoListOuter from './TodoListOutert';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <TodoListOuter>
      <TodoListForm />
      <TodoListInner>
        {todos.map((todo) => (
          <TodoListCard key={todo.id} todo={todo} />
        ))}
      </TodoListInner>
    </TodoListOuter>
  );
};

export default TodoList;
