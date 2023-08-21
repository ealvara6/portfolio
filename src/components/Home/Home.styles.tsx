import { styled } from 'styled-components';

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const StyledIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 100vh;
`;

export const LeftSection = styled.div<{ $expand: boolean }>`
  position: absolute;
  transition: margin-left 1s linear;
  margin-left: ${(props) => (props.$expand ? '0%' : '150%')};
`;

export const Gif = styled.img<{ $expand: boolean }>`
  position: absolute;
  transition: margin-right 1s linear;
  margin-right: ${(props) => (props.$expand ? '0%' : '150%')};
`;
export default StyledHome;
