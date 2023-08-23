import styled, { keyframes } from 'styled-components';

const showContent = keyframes`
  0% {
    border-right: 3px solid;
    width: 0%;
    border-color: transparent;
  }
  50% {
    border-color: white;
  }

  75% {
    width: 100%;
    border-color: transparent;
  }
  100% {
    border-right: 3px solid;
    width: 100%;
    border-color: white;
  }
`;

const Typewriter = styled.div<{ $stopCaret?: boolean }>`
  :first-child {
    width: 0%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    animation: 
    ${showContent} 2s steps(20, end) infinite alternate 2.8s;
  }
`;

export default Typewriter;
