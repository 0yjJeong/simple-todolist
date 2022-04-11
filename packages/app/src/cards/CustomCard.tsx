import React from 'react';
import { Todo, CheckProvider, CheckBox } from '@todolist/plugin-todo';
import styled, { css } from 'styled-components';

type Props = {
  todo: Todo;
};

export const CustomCardA = ({ todo }: Props) => {
  const [checked, setChecked] = React.useState(todo.checked);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <CheckProvider checked={checked}>
      <CardA checked={checked}>
        <CheckBox Component={CheckBoxA} onCheck={onCheck} />
        <p>{todo.title}</p>
      </CardA>
    </CheckProvider>
  );
};

export const CustomCardB = ({ todo }: Props) => {
  const [checked, setChecked] = React.useState(todo.checked);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <CheckProvider checked={checked}>
      <CardB checked={checked}>
        <CheckBox Component={CheckBoxB} onCheck={onCheck} />
        <p>{todo.title}</p>
        <CheckBox Component={CheckBoxA} onCheck={onCheck} />
      </CardB>
    </CheckProvider>
  );
};

export const CustomCardC = ({ todo }: Props) => {
  const [checked, setChecked] = React.useState(todo.checked);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <CheckProvider checked={checked}>
      <CardC checked={checked}>
        <p>{todo.title}</p>
        <CheckBox Component={CheckBoxB} onCheck={onCheck} />
      </CardC>
    </CheckProvider>
  );
};

const cardStyles = css`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  border-radius: 5px;
  padding-left: 10px;
`;

const CardA = styled.div<{ checked: boolean }>`
  ${cardStyles};
  background: #ffffff;
  border: 1px solid #2ac955;
  color: #2ac955;
`;

const CardB = styled.div<{ checked: boolean }>`
  ${cardStyles};
  justify-content: space-between;
  padding-right: 10px;
  background: #ebfff0;
  border: 1px solid #4af784;
  color: #4af784;
`;

const CardC = styled.div<{ checked: boolean }>`
  ${cardStyles};
  background: #2ac955;
  color: #fff;
`;

const CheckBoxA = styled.input`
  border: 1px solid #2ac955 !important;
  border-radius: 50% !important;

  &::before {
    background: #2ac955 !important;
    border-radius: 50% !important;
  }
`;

const CheckBoxB = styled.input`
  border: none !important;

  &::before {
    background: #b8e7ff !important;
  }
`;
