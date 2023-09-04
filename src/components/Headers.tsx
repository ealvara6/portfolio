import { styled } from 'styled-components';

const Header = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

export const SubHeader = styled.h2`
  font-size: 16px;
  font-weight: 200;
  font-style: italic;
`;

export const Important = styled.span`
  color: ${(props) => props.theme.dark.secondaryLight};
`;

export const SectionHeader = styled.h1`
  font-size: 32px;
  font-weight: 300;
`;

export default Header;
