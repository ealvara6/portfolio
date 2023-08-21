import { styled } from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => `linear-gradient(to bottom right, ${props.theme.dark.primaryDark}, ${props.theme.dark.primaryLight})`};
  background-attachment: fixed;
  background-size: cover;
`;

export default StyledApp;
