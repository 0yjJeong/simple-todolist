import React, { FC } from 'react';
import styled from 'styled-components';
import { Todo } from '../../types';
import CheckButton from './TodoListCardCheckButton';

type TodoListCardProps = {
  todo: Todo;
};

const TodoListCard: FC<TodoListCardProps> = ({ todo }) => {
  return (
    <Card checked={todo.checked}>
      <CheckButton checked={todo.checked} />
      <p>{todo.title}</p>
    </Card>
  );
};

export default TodoListCard;

const Card = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1.4px solid #ededed;
  border-radius: 16px;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${(props) =>
    props.checked &&
    `
  background: #F6F6F6;
  border: none;
  color: #B8B8B8;
  `}

  p {
    margin: 0;
  }

  & + & {
    margin-top: 0.4rem;
  }
`;
