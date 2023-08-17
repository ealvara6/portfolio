import { styled } from 'styled-components';
import background from '../../assets/hex.jpg';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
`;

export default StyledApp;
