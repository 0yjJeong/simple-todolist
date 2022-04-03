import TodoList from '@todolist/plugin-todo';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header/Header';

const todos = [
  {
    id: 'a',
    title: 'a',
    checked: true,
  },
  {
    id: 'b',
    title: 'b',
    checked: false,
  },
];

const TodoListPage = () => {
  const params = useParams<{ username: string }>();
  return (
    <>
      <Header title={`${params.username}'s Todo List`} />
      <TodoList initialTodos={todos} />
    </>
  );
};

export default TodoListPage;
