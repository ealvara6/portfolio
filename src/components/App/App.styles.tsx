import { styled } from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  height: min-content;
  flex-direction: column;
  background: ${(props) => `linear-gradient(to bottom right, ${props.theme.dark.primaryDark}, ${props.theme.dark.primaryLight})`};
  background-attachment: fixed;
  background-size: cover;

  :nth-child(2) {
    flex-grow: 1;
  }
`;

export default StyledApp;
