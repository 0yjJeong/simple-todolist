import { FC } from 'react';
import styled from 'styled-components';
import {
  typoStyles,
  TypographyBlock,
  TypographyProps,
} from '../Typography/Typography';

const Typo = styled(TypographyBlock)`
  display: inline-block;
  position: relative;

  &:before {
    content: '';
    display: block;
    height: 6px;
    position: absolute;
    width: 100%;
    bottom: 4px;
    background: #66ff91;
    z-index: -1;
  }
`;

const Underlined: FC<TypographyProps> = ({ text, ...rest }) => {
  return <Typo {...typoStyles[rest.size]}>{text}</Typo>;
};

export default Underlined;
