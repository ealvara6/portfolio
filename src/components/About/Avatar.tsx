import { StyledAvatar } from './About.styles';
import profileIcon from '../../assets/icons8-circled-e-100.png';
import Header, { SubHeader } from '../Headers';

export default function Avatar() {
  return (
    <StyledAvatar>
      <img src={profileIcon} alt="" />
      <div>
        <Header>Eduardo Alvarado</Header>
        <SubHeader>Jr. Web Developer</SubHeader>
      </div>
    </StyledAvatar>
  );
}
