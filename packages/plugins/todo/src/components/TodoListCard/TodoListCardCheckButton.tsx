import React, { FC } from 'react';
import { BsCheck } from 'react-icons/bs';
import classNames from 'classnames';

type Props = {
  checked: boolean;
};

const TodoListCardCheckButton: FC<Props> = ({ checked }) => {
  const checkboxClass = classNames('todolist__checkbox', {
    'todolist__checkbox-checked': checked,
  });

  return <button className={checkboxClass}>{checked && <BsCheck />}</button>;
};

export default TodoListCardCheckButton;
