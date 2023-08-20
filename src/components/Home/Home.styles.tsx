import { keyframes, styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const lineOutHeight = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 50vh;
  }
`;

const lineOutWidth = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 50px;
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

export const Line = styled.div<{ $horizontal?: boolean }>`
  height: ${(props) => (props.$horizontal ? '2px' : '0px')};
  width: ${(props) => (props.$horizontal ? '0px' : '2px')};
  background-color: white;
  animation: ${(props) => (props.$horizontal ? lineOutWidth : lineOutHeight)} 1s;
  animation-fill-mode: forwards;
`;

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  max-width: 750px;
`;

export const SkillsWrapper = styled(Swiper)`
  width: 100%;
`;

export const Skill = styled(SwiperSlide)`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 110px;
  gap: 15px;
  border: 1px dotted white;
  cursor: pointer;
`;

export const SkillIcon = styled.div<{ $icon: string }>`
  background-image: url(${(props) => props.$icon});
  width: 64px;
  height: 64px;
  background-size: contain;
`;

export default StyledHome;
