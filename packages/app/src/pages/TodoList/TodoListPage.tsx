import TodoList from '@todolist/plugin-todo';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

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
      <Helmet>
        <title>{`${params.username}'s Todo List`}</title>
        <meta name='description' content='TodoListPage' />
      </Helmet>
      <TodoList todos={todos} />
    </>
  );
};

export default TodoListPage;
