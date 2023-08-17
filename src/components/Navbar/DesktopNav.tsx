import StyledNavbar, { NavLinks } from './Navbar.styles';
import getNavLinks from './getNavLinks';

export default function DesktopNav() {
  return (
    <StyledNavbar>
      <NavLinks>
        {getNavLinks()}
      </NavLinks>
    </StyledNavbar>
  );
}
