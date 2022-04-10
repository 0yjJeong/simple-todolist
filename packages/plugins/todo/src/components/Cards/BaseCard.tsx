import React, { FC } from 'react';
import { Todo } from '../../types';

export type BaseCardProps = {
  todo: Todo;
};

const BaseCard: FC = ({ children }) => {
  return <li className='todolist__card'>{children}</li>;
};

export default BaseCard;
