import { FC } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import Navbar from '../Navbar/Navbar';

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
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Frame;
