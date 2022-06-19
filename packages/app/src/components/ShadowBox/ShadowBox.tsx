import styled from 'styled-components';
import shadow from '../../styles/shadow';

const ShadowBox = styled.div`
  background: #ffffff;
  padding: 0.8rem;
  border-radius: 10px;
  height: calc(100% - 100px);
  box-shadow: ${shadow.shadow0};
`;

export default ShadowBox;
