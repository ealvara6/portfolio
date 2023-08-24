import { styled } from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: min-content;
  background: ${(props) => `linear-gradient(to bottom right, ${props.theme.dark.primaryDark}, ${props.theme.dark.primaryLight})`};
  background-attachment: fixed;
  background-size: cover;
`;

export default StyledApp;
