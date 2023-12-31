import { keyframes, styled } from 'styled-components';
import Header from '../Headers';

const slideUp = keyframes`
  from { top: 100% }
  
  to { top: 0% }
`;

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  max-width: 75vw;
  z-index: 0;

  >:last-child {
    align-self: center;
    width: 100%;
  }

  .swiper-slide {
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 110px;
    gap: 15px;
    border: 1px dashed ${(props) => props.theme.dark.secondaryLight};
    cursor: pointer;
  }
`;

export const SkillIcon = styled.div<{ $icon: string }>`
  background-image: url(${(props) => props.$icon});
  width: 64px;
  height: 64px;
  background-size: contain;
`;

export const SkillHeaderWrapper = styled.div`
  position: relative;
  height: 20px;
  overflow: hidden;
`;

export const SkillHeader = styled(Header)`
  position: absolute;
  animation: ${slideUp} 1s;
`;
