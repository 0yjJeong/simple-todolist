import React, { FC } from 'react';
import styled from 'styled-components';

export type Size = 'title' | 'subTitle' | 'caption';

type Styles = {
  '@size': number;
  '@weight': string;
};

export const typoStyles: {
  [key in Size]: Styles;
} = {
  title: {
    '@size': 36,
    '@weight': '500',
  },
  subTitle: {
    '@size': 24,
    '@weight': '500',
  },
  caption: {
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
  const className = React.useMemo(() => {
    return `typo-${size}`;
  }, [size]);

  return (
    <TypographyBlock className={className} {...typoStyles[size]}>
      {text}
    </TypographyBlock>
  );
};

export default Typography;
