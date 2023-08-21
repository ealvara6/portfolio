import StyledHome from './Home.styles';
import Intro from './Intro';
import Skills from '../Skills/Skills';

export default function Home() {
  return (
    <StyledHome>
      <Intro />
      <Skills />
    </StyledHome>
  );
}
