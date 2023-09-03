import { styled } from 'styled-components';
import Button from '../Button';

const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1250px;
  min-height: 460px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  height: 25px;
  width: 500px;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 190px;
`;

export const FormButton = styled(Button)`
  align-self: flex-end;
`;

export default StyledContacts;
