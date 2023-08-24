import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles.styles';
import StyledApp from './App.styles';
import theme from '../../styles/Theme.styles';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import About from '../About/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyles />
        <Navbar />
        <Intro />
        <About />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
