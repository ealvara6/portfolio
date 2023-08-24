import { styled } from 'styled-components';

const StyledLink = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 200;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.dark.secondaryLight};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const NavbarLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 7px;
`;

export default StyledLink;
