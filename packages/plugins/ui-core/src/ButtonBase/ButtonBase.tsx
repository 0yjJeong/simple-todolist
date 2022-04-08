import styled, { css } from 'styled-components';
import { ButtonBaseType } from './types';

const ButtonBase = styled.button<ButtonBaseType>`
  border: none;
  background: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: ${(props) => (props.size === 'large' ? '1.2' : '0.8')}rem;

  ${(props) => {
    if (props.variant === 'text') {
      return css`
        color: ${props.palette.color};
        :hover {
          background: ${props.palette.darker};
        }
      `;
    }
    if (props.variant === 'contained') {
      return css`
        color: ${props.palette.color};
        background: ${props.palette.light};
        :hover {
          background: ${props.palette.darker};
        }
      `;
    }
    if (props.variant === 'outlined') {
      return css`
        color: ${props.palette.color};
        border: ${`1px solid ${props.palette.light}`};
        :hover {
          background: ${props.palette.darker};
        }
      `;
    }
  }}
`;

export default ButtonBase;
