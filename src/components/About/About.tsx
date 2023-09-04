import { useMediaQuery } from 'react-responsive';
import { Header, StyledAbout } from './About.styles';
import Avatar from './Avatar';
import Skills from '../Skills/Skills';
import Section from './Section';
import { SectionHeader } from '../Headers';

export default function About() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <StyledAbout $mobile={isMobile} id="about">
      <Header>
        <SectionHeader>About</SectionHeader>
      </Header>
      <Avatar />
      <Section />
      <Skills />
    </StyledAbout>
  );
}
