import { useState } from 'react';
import {
  NavIcon, NavIconWrapper, NavLinks, NavLinksWrapper, StyledMobileNav,
} from './Navbar.styles';
import getNavLinks from './getNavLinks';

function MobileNav() {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    if (expand) setExpand(false);
    else setExpand(true);
  };

  return (
    <StyledMobileNav onClick={() => handleClick()} $expand={expand}>
      <NavIconWrapper>
        <NavIcon />
        <NavIcon />
      </NavIconWrapper>
      <NavLinksWrapper>
        <NavLinks $isMobile>
          {getNavLinks()}
        </NavLinks>
      </NavLinksWrapper>
    </StyledMobileNav>
  );
}

export default MobileNav;
