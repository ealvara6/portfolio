import { HeadShot, StyledAvatar } from './About.styles';
import Header, { SubHeader } from '../Headers';
import headShot from '../../assets/headshot.jpeg';

export default function Avatar() {
  return (
    <StyledAvatar>
      <HeadShot $image={headShot} />
      <div>
        <Header>Eduardo Alvarado</Header>
        <SubHeader>Jr. Web Developer</SubHeader>
      </div>
    </StyledAvatar>
  );
}
