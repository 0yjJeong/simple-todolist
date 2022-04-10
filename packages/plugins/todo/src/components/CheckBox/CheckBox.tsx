import React, { FC } from 'react';
import { useCheck } from './CheckProvider';

type Props = {
  Component?: React.FunctionComponent<React.HTMLProps<HTMLInputElement>>;
  onCheck?: React.ChangeEventHandler<HTMLInputElement>;
};

const CheckBox: FC<Props> = ({
  Component = (props) => <input {...props} />,
  onCheck,
}) => {
  const checked = useCheck();
  return <Component type='checkbox' checked={checked} onChange={onCheck} />;
};

export default CheckBox;
