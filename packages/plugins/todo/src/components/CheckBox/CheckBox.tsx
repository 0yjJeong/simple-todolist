import React, { FC } from 'react';
import { useCheck } from './CheckProvider';

type Props = {
  onCheck?: React.ChangeEventHandler<HTMLInputElement>;
};

const CheckBox: FC<Props> = ({ onCheck }) => {
  const checked = useCheck();
  return (
    <label>
      <input type='checkbox' checked={checked} onChange={onCheck} />
    </label>
  );
};

export default CheckBox;
