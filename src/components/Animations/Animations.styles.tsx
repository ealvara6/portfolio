import { keyframes, styled } from 'styled-components';

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

const Line = styled.div<{ $horizontal?: boolean }>`
  height: ${(props) => (props.$horizontal ? '2px' : '0px')};
  width: ${(props) => (props.$horizontal ? '0px' : '2px')};
  background-color: ${(props) => props.theme.dark.secondaryLight};
  animation: ${(props) => (props.$horizontal ? lineOutWidth : lineOutHeight)} 1s;
  animation-fill-mode: forwards;
`;

export default Line;
