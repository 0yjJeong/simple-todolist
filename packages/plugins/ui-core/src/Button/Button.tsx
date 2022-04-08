import React, { FC } from 'react';
import { ButtonType } from './types';
import ButtonBase from '../ButtonBase/ButtonBase';

const Button: FC<ButtonType> = ({
  variant = 'contained',
  size = 'small',
  palette = {
    color: '#262626',
    light: '#f0f0f0',
    darker: '#dbdbdb',
  },
  ...rest
}) => {
  return (
    <ButtonBase variant={variant} size={size} palette={palette} {...rest} />
  );
};

export default Button;
