import { useState } from 'react';
import StyledHome, {
  Gif, Wrapper, Line,
} from './Home.styles';
import programmingIcon from '../../assets/working.png';
import Intro from './Intro';

export default function Home() {
  const [expandContent, setExpandContent] = useState(false);

  return (
    <StyledHome>
      <Wrapper>
        <Intro expandContent={expandContent} />
      </Wrapper>
      <Line onAnimationEnd={() => setExpandContent(true)} />
      <Wrapper>
        <Gif $expand={expandContent} src={programmingIcon} />
      </Wrapper>
    </StyledHome>
  );
}
