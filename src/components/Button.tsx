import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from { 
    top: 100%;
    opacity: 0%;
  }
  to {
    top: 0%;
    opacity: 100%;
  }
`;

const Button = styled.button<{ $animation?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.dark.secondaryDark};
  border: none;
  min-width: 130px;
  min-height: 50px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
`;

export const AnimatedButton = styled(Button)`
  position: absolute;
  top: 100%;
  animation: ${slideUp} 1s 4s forwards ease;
`;

export default Button;
