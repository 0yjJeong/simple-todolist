import styled from 'styled-components';

const Section = styled.div`
  position: relative;
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 6rem;

  &:before {
    content: '';
    display: block;
    height: 205px;
    background: #dbffe5;
    border-radius: 10px;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  & > * {
    margin-left: 1.4rem;
    margin-right: 1.4rem;
  }

  & > p {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
`;

export default Section;
