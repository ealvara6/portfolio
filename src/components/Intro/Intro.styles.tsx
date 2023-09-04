import { styled, keyframes } from 'styled-components';
import Header from '../Headers';
import { AnimatedButton } from '../Button';

const slideUp = keyframes`
  0% {
    height: 0px;
    opacity: 0%;
  }
  50%, 100% {
    height: 30px;
    opacity: 100%;
  }
`;

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 100vh;
  gap: 50px;
`;

export const IntroSection = styled(Header)`
  overflow: hidden;
  animation: ${slideUp} 1.5s forwards;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutButton = styled(AnimatedButton)`
  display: flex;
  width: 150px;
  div {
    flex-grow: 1;
  }
`;

export default StyledIntro;
