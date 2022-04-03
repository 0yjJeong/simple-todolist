import { NavLink } from 'react-router-dom';
import TodoList, { useTodoList } from '@todolist/plugin-todo';
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

const HomePage = () => {
  const { addTodo, removeTodo, toggleTodo } = useTodoList();
  return (
    <>
      <Header title='HomePage' />
      <h1>HomePage</h1>
      <NavLink to='/signup'>
        <button>회원가입</button>
      </NavLink>
      <TodoList
        initialTodos={todos}
        onAddTodo={addTodo}
        onRemoveTodo={removeTodo}
        onToggleTodo={toggleTodo}
      />
    </>
  );
};

export default HomePage;
