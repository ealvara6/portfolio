import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles.styles';
import StyledApp from './App.styles';
import theme from '../../styles/Theme.styles';
import Navbar from '../Navbar/Navbar';
import Router from '../Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyles />
        <Navbar />
        <Router />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
