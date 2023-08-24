import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles.styles';
import StyledApp from './App.styles';
import theme from '../../styles/Theme.styles';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyles />
        <Navbar />
        <Intro />
        <About />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
