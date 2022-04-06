import { FC } from 'react';
import styled from 'styled-components';

export enum Size {
  TITLE,
  SUB_TITLE,
  CAPTION,
}

type Styles = {
  '@size': number;
  '@weight': string;
};

export const typoStyles: {
  [key in Size]: Styles;
} = {
  0: {
    '@size': 36,
    '@weight': '500',
  },
  1: {
    '@size': 24,
    '@weight': '500',
  },
  2: {
    '@size': 12,
    '@weight': '500',
  },
};

export type TypographyProps = {
  text: string;
  size: Size;
};

export const TypographyBlock = styled.p<Styles>`
  margin: 0;
  font-size: ${(props) => props['@size']}px;
  font-weight: ${(props) => props['@weight']};
`;

const Typography: FC<TypographyProps> = ({ text, size }) => {
  return <TypographyBlock {...typoStyles[size]}>{text}</TypographyBlock>;
};

export default Typography;
