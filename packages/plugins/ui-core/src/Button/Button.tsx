import React, { FC } from 'react';
import styled from 'styled-components';

const ButtonRoot = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<Props> = (props) => {
  return <ButtonRoot {...props} />;
};

export default Button;
