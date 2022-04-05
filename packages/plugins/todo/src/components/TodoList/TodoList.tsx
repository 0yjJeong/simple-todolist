import React, { FC } from 'react';
import { Todo } from '../../types';
import TodoListCard from '../TodoListCard/TodoListCard';
import TodoListForm from '../TodoListForm/TodoListForm';
import { useAtom } from 'jotai';
import { todosAtom } from '../../atom/todosAtom';
import '../../style.css';

type TodoListProps = {
  initialTodos: Todo[];
  onAddTodo?: (todo: Todo) => void | Promise<void>;
  onRemoveTodo?: (todoId: string) => void | Promise<void>;
  onToggleTodo?: (todoId: string) => void | Promise<void>;
};

const TodoList: FC<TodoListProps> = ({
  initialTodos,
  onAddTodo,
  onRemoveTodo,
  onToggleTodo,
}) => {
  const [todos, setTodos] = useAtom(todosAtom);

  React.useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <>
      <TodoListForm onAddTodo={onAddTodo} />
      <ul className='todolist'>
        {todos.map((todo) => (
          <TodoListCard
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
