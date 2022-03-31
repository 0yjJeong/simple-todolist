import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frame from './layout/Frame/Frame';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import TodoListPage from './pages/TodoList/TodoListPage';

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path=':username' element={<TodoListPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Frame>
    </BrowserRouter>
  );
}

export default App;
