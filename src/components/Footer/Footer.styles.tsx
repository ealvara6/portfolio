import { styled } from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.dark.primaryDark};
  width: 100%;
  min-height: 100px;
  font-weight: 200;
  gap: 20px;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Info = styled.div``;

export const Line = styled.div`
  height: 40px;
  width: 2px;
  background-color: white;
`;

export const Icon = styled.a<{ $icon: string }>`
  background-image: ${(props) => `url(${props.$icon})`};
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export default StyledFooter;
