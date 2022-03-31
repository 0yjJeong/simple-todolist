import { NavLink } from 'react-router-dom';
import TodoList from '@todolist/plugin-todo';
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
  return (
    <>
      <Header title='HomePage' />
      <h1>HomePage</h1>
      <NavLink to='/signup'>
        <button>회원가입</button>
      </NavLink>
      <TodoList todos={todos} />
    </>
  );
};

export default HomePage;
