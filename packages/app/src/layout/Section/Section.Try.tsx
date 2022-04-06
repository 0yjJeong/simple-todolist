import styled from 'styled-components';
import media from '../../styles/media';

const Section = styled.div`
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 240px;
  margin-bottom: 6rem;
  text-align: center;

  ${media.modile} {
    width: 100%;
  }
`;

export default Section;
