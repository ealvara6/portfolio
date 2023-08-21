import styled from 'styled-components';

export const StyledAbout = styled.div`
  display: grid;
  align-self: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* border: 1px solid white; */
  height: 75vh;
  width: 75vw;

  :last-child {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

export const Section = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

export const Avatar = styled.div`
  grid-column: 1;
  grid-row: 1;
`;
