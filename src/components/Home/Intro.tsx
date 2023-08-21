import { useState } from 'react';
import Header, { SubHeader } from '../Headers';
import {
  StyledIntro, Wrapper, Gif, LeftSection,
} from './Home.styles';
import { Line } from '../Animations/Animations.styles';
import programmingIcon from '../../assets/working.png';

export default function Intro() {
  const [expandContent, setExpandContent] = useState(false);

  return (
    <StyledIntro>
      <Wrapper>
        <LeftSection $expand={expandContent}>
          <Header>Eduardo alvarado</Header>
          <SubHeader>Jr Web Developer</SubHeader>
        </LeftSection>
      </Wrapper>
      <Line onAnimationEnd={() => setExpandContent(true)} />
      <Wrapper>
        <Gif $expand={expandContent} src={programmingIcon} />
      </Wrapper>
    </StyledIntro>
  );
}
