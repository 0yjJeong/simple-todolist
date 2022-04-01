import React, { FC } from 'react';
import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs';

type Props = {
  checked: boolean;
};

const CheckButton = styled.button<Props>`
  width: 20px;
  height: 20px;
  position: relative;
  background: none;
  border: 1px solid #e7e7e7;
  border-radius: 4px;

  ${(props) =>
    props.checked &&
    `
    background: #EDEDED;
    border: none;
    color: #B8B8B8;
  `}

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TodoListCardCheckButton: FC<Props> = ({ checked }) => {
  return <CheckButton checked={checked}>{checked && <BsCheck />}</CheckButton>;
};

export default TodoListCardCheckButton;
