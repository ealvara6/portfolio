import { keyframes, styled } from 'styled-components';

const openLine = keyframes`
  0% {
    width: 20px;
    height: 20px;
  }
  100% {
    height: 60vh;
    width: 75vw;
  }
`;

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   white-space: nowrap;
//   overflow: hidden;
//   height: 150px;
//   width: 100%;
//   position: relative;
// `;

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

export const Wrapper = styled.div`
  width: 75vw;
  height: 60vh;
  /* border: solid white 1px; */
  background-color: white;
  /* animation: ${openLine} 1s; */
  animation-fill-mode: forwards;
`;
