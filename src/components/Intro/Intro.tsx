import { useState } from 'react';
import Typewriter from '../Typewriter';
import StyledIntro, { Content, IntroSection, AboutButton } from './Intro.styles';
import Header, { Important } from '../Headers';
import { Wrapper } from '../Button';
import arrowIcon from '../../assets/icons8-arrow-down-25.png';

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

  const handleClick = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <AboutButton onClick={() => handleClick()}>
          <div>Learn More</div>
          {' '}
          <img src={arrowIcon} alt="" />
        </AboutButton>
      </Wrapper>
    </StyledIntro>
  );
}
