import React, { FC } from 'react';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';

const TodoListFormBlock = styled.form`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: none;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  margin-bottom: 1.6rem;
  font-size: 12px;

  input {
    flex: 1;
    padding: 1rem;
    border: none;
    outline: none;
  }

  span,
  button {
    align-self: center;
  }

  span {
    display: flex;
    margin-left: 0.6rem;
    color: #b8b8b8;
  }

  button {
    background: #ededed;
    border: none;
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
    margin-right: 0.6rem;
    color: #313131;
  }
`;

const TodoListForm: FC = () => {
  const onSubmitHandler = () => {};
  return (
    <TodoListFormBlock onSubmit={onSubmitHandler}>
      <span>
        <FaCircle />
      </span>
      <input placeholder='할 일을 입력하세요' />
      <button type='submit'>추가</button>
    </TodoListFormBlock>
  );
};

export default TodoListForm;
