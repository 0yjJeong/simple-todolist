import { FC } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

const Wrapper = styled.div`
  max-width: 768px;
  margin: auto;

  ${media.modile} {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
`;

const Frame: FC = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Frame;
