import React, { FC } from 'react';
import { Todo } from '../../types';
import TodoListCheckBox from '../CheckBox/CheckBox';
import BaseCard from './BaseCard';

export type DefaultCardProps = {
  todo: Todo;
  onCheck?: React.ChangeEventHandler<HTMLInputElement>;
};

const DefaultCard: FC<DefaultCardProps> = ({ todo, onCheck = () => {} }) => {
  return (
    <BaseCard>
      <div className='todolist__card-inner'>
        <TodoListCheckBox onCheck={onCheck} />
        <p className='todolist__card-title'>{todo.title}</p>
      </div>
    </BaseCard>
  );
};

export default DefaultCard;
