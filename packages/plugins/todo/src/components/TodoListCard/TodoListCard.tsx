import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { MdRemove } from 'react-icons/md';
import { Todo } from '../../types';
import CheckButton from './TodoListCardCheckButton';

type TodoListCardProps = {
  todo: Todo;
};

const TodoListCard: FC<TodoListCardProps> = ({ todo }) => {
  const [clicked, setClicked] = useState(false);

  const cardClass = classNames('todolist__card', {
    'todolist__card-checked': todo.checked,
  });

  const cardRemoveBtnClass = classNames('todolist__card-removebtn', {
    'todolist__card-removebtn-active': clicked,
  });

  return (
    <li className={cardClass} onClick={() => setClicked(!clicked)}>
      <CheckButton checked={todo.checked} />
      <p className='todolist__card-title'>{todo.title}</p>
      <button className={cardRemoveBtnClass}>
        <MdRemove /> 삭제하기
      </button>
    </li>
  );
};

export default TodoListCard;
