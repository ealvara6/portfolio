import { useMediaQuery } from 'react-responsive';
import { StyledAbout } from './About.styles';
import Avatar from './Avatar';
import Skills from '../Skills/Skills';
import Section from './Section';

export default function About() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <StyledAbout $mobile={isMobile}>
      <Avatar />
      <Section />
      <Skills />
    </StyledAbout>
  );
}
