import StyledFooter, {
  Icon, InfoSection, Line, Link,
} from './Footer.styles';
import githubLogo from '../../assets/github-mark-white.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <InfoSection>
        <div>&copy; 2023</div>
        <Line />
        <div>ealvara6</div>
        <Line />
        <Icon $icon={githubLogo} href="https://github.com/ealvara6" target="_blank" />
      </InfoSection>
      <div>
        Icons made by
        {' '}
        <Link href="https://icons8.com/" target="_blank">Icons 8</Link>
      </div>
    </StyledFooter>
  );
}
