import { useState } from 'react';
import Typewriter from '../Typewriter';
import StyledIntro, { Content, IntroSection } from './Intro.styles';
import Header, { Important } from '../Headers';
import Button, { AnimatedButton, Wrapper } from '../Button';

export default function Intro() {
  const title = [
    'Jr. Web Developer',
    'React Developer',
    'Inspiring Developer',
  ];

  const [nextTitle, setNextTitle] = useState(0);
  const [secondIteration, setSecondIteration] = useState(false);
  const [secondAnimation, setSecondAnimation] = useState(false);

  const handleNextTitle = () => {
    if (secondIteration) {
      if (nextTitle + 1 >= title.length) setNextTitle(0);
      else setNextTitle((prevState) => prevState + 1);
      setSecondIteration(false);
    } else setSecondIteration(true);
  };

  return (
    <StyledIntro>
      <Content>
        <IntroSection onAnimationEnd={() => setSecondAnimation(true)}>Hey There!</IntroSection>
        {secondAnimation && (
        <IntroSection>
          I&apos;m
          <Important> Eduardo Alvarado</Important>
        </IntroSection>
        )}
        <Typewriter>
          <Header onAnimationIteration={() => handleNextTitle()}>{title[nextTitle]}</Header>
        </Typewriter>
      </Content>
      <Wrapper>
        <AnimatedButton>About Me</AnimatedButton>
      </Wrapper>
    </StyledIntro>
  );
}
