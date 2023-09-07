import { styled } from 'styled-components';

const StyledProjects = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  min-height: 100vh;
  padding: 0px 20px;
`;

export const Project = styled.div`
  display: grid;
  gap: 15px;
  width: 100%;
  justify-content: center;
  grid-template-columns: 1fr minmax(min-content, 600px);
  grid-template-rows: min-content;

  @media screen and (max-width: 1250px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.div<{ $image: string, $count: number }>`
  background-image: ${(props) => `url(${props.$image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  align-self: center;
  min-height: 500px;
  grid-column: ${(props) => (props.$count % 2 === 0 ? '1' : '2')};
  grid-row: 1 / -1;
`;

export const Content = styled.div<{ $count: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  grid-column: ${(props) => (props.$count % 2 === 0 ? '2' : '1')};
  grid-row: 1;
  `;

export const Title = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  align-self: flex-start;
  font-size: 32px;
  font-weight: 600;

  span {
    font-weight: 100;
  }
`;

export const TechTitle = styled(Title)`
  align-self: center;
  font-weight: 300;
  font-size: 26px;
  width: min-content;
`;

export const TechnologySection = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`;

export const Technologies = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 300;
`;

export const Technology = styled.div`
`;

export const Buttons = styled.div`
  display: flex;
  gap: 50px;
`;

export default StyledProjects;
