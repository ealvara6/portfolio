import { StyledAbout, Avatar, Section } from './About.styles';
import Skills from '../Skills/Skills';

export default function About() {
  return (
    <StyledAbout>
      <Avatar>This is my avatar</Avatar>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam vel recusandae error, numquam quae magni.

      </Section>
      <Skills />
    </StyledAbout>
  );
}
