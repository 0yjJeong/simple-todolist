import React, { FC } from 'react';
import { Todo } from '../../types';
import { useAtom } from 'jotai';
import { todosAtom } from '../../atom/todosAtom';
import CheckProvider from '../CheckBox/CheckProvider';
import '../../style.css';

type TodoListProps = {
  initialTodos: Todo[];
  CardComponent?: React.ElementType<{ todo: Todo }>;
};

function DefaultCard({ todo }: { todo: Todo }) {
  return <div>{todo.title}</div>;
}

const TodoList: FC<TodoListProps> = ({
  initialTodos,
  CardComponent = DefaultCard,
}) => {
  const [todos, setTodos] = useAtom(todosAtom);

  React.useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <>
      <ul className='todolist'>
        {todos.map((todo) => (
          <CheckProvider key={todo.id} checked={todo.checked}>
            <CardComponent todo={todo} />
          </CheckProvider>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
