import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { MdRemove } from 'react-icons/md';
import { Todo } from '../../types';
import CheckButton from './TodoListCardCheckButton';

type TodoListCardProps = {
  todo: Todo;
};

const TodoListCard: FC<TodoListCardProps> = ({ todo }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Card checked={todo.checked} onClick={() => setClicked(!clicked)}>
      <CheckButton checked={todo.checked} />
      <p>{todo.title}</p>
      <CardRemoveButton active={clicked}>
        <MdRemove /> 삭제하기
      </CardRemoveButton>
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
  position: relative;
  overflow: hidden;

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

const CardRemoveButton = styled.button<{ active: boolean }>`
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -90px;
  background: #ffb8b8;
  color: #f26d6d;
  width: 90px;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;

  ${(props) =>
    props.active &&
    `
  right: 0;
  `}
`;
