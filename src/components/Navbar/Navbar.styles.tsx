import { styled } from 'styled-components';

const StyledNavbar = styled.nav`
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  max-width: 1300px;
  backdrop-filter: blur(20px);
  z-index: 1;
`;

export const StyledMobileNav = styled.div<{ $expand: boolean }>`
  position: sticky;
  top: 0px;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(68, 119, 206, 0.2);
  min-height: 75px;
  backdrop-filter: blur(6px);
  >:first-child {
    :first-child {
      transform: ${(props) => (props.$expand ? 'rotateZ(45deg)' : 'none')};
    }
    :last-child {
      transform: ${(props) => (props.$expand ? 'rotateZ(-45deg)' : 'none')};
    }
  }
  >:last-child {
    >:last-child{
      display: flex;
      margin-top: ${(props) => (props.$expand ? '0' : '-100%')};
    }
  }
`;

export const NavIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 75px;
  width: 15px;
`;

export const NavIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: transform 0.75s ease-in-out;
`;

export const NavLinksWrapper = styled.div`
  overflow: hidden;
`;

export const NavLinks = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? 'column' : 'row')};
  transition: margin-top 0.75s ease-in-out;
  gap: 30px;
  padding: 15px;
`;

export default StyledNavbar;
