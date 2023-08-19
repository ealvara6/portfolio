import Headers, { SubHeader } from '../Headers';
import { StyledIntro } from './Home.styles';

export default function Intro({ expandContent }: { expandContent: boolean }) {
  return (
    <StyledIntro $expand={expandContent}>
      <Headers>Eduardo Alvarado</Headers>
      <SubHeader>Jr. Web Developer</SubHeader>
    </StyledIntro>
  );
}
