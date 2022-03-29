import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import TodoList from '@todolist/plugin-todo';

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

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/'>
          <Route index element={<>Home</>} />
          <Route path='login' element={<>Login</>} />
          <Route path='signup' element={<>Signup</>} />
        </Route>
        <Route
          path=':user'
          element={
            <>
              User
              <Outlet />
            </>
          }
        >
          <Route path='todos' element={<TodoList todos={todos} />} />
          <Route path='*' element={<>Not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
