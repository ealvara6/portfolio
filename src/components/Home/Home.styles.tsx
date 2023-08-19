import { keyframes, styled } from 'styled-components';

const lineOut = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 60vh;
  }
`;

const StyledHome = styled.main`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 75vw;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  height: 150px;
  width: 100%;
  position: relative;
`;

export const StyledIntro = styled.div<{ $expand: boolean }>`
  position: absolute;
  transition: margin-left 1s linear;
  margin-left: ${(props) => (props.$expand ? '0%' : '150%')};
`;

export const Gif = styled.img<{ $expand: boolean }>`
  position: absolute;
  transition: margin-right 1s linear;
  margin-right: ${(props) => (props.$expand ? '0%' : '150%')};
`;

export const Line = styled.div`
  width: 2px;
  background-color: white;
  animation: ${lineOut} 1s;
  animation-fill-mode: forwards;
`;

export default StyledHome;
