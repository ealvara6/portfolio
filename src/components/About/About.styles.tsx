import styled from 'styled-components';

export const StyledAbout = styled.div<{ $mobile: boolean }>`
  display: ${(props) => (props.$mobile ? 'flex' : 'grid')};
  flex-direction: column;
  row-gap: ${(props) => (props.$mobile ? '40px' : '0px')};
  text-align: ${(props) => (props.$mobile ? 'center' : 'left')};
  align-self: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 2fr 1fr;
  min-height: 100vh;

  
  :last-child {
    grid-column: 1 / -1;
    grid-row: 3;
  }
  `;

export const Header = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
`;

export const StyledSection = styled.div`
  grid-column: 2;
  grid-row: 2;
  max-width: 500px;
  margin: 0px 20px;
`;

export const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1;
  grid-row: 2;
`;
