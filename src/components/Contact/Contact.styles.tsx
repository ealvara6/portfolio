import { styled } from 'styled-components';
import Button from '../Button';

const StyledContacts = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 460px;
  width: 100%;
  max-width: 570px;
  padding: 0px 20px;
  gap: 50px;
  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const InputSection = styled.div`
`;

export const Label = styled.label`
  font-size: 18px;
  `;

export const Input = styled.input`
  height: 25px;
  width: 100%;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 190px;
`;

export const FormButton = styled(Button)`
  align-self: flex-end;
`;

export default StyledContacts;
