import styled from 'styled-components';

export const StyledAbout = styled.div<{ $mobile: boolean }>`
  display: ${(props) => (props.$mobile ? 'flex' : 'grid')};
  flex-direction: column;
  gap: ${(props) => (props.$mobile ? '20px' : '0px')};
  text-align: ${(props) => (props.$mobile ? 'center' : 'left')};
  align-self: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 75vw;

  :last-child {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

export const StyledSection = styled.div`
  grid-column: 2;
  grid-row: 1;
  max-width: 300px;
`;

export const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1;
  grid-row: 1;
`;
