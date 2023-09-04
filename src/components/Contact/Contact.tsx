import * as EmailValidator from 'email-validator';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Header, { SectionHeader } from '../Headers';
import StyledContacts, {
  Form, FormButton, Input, InputSection, Label, TextArea,
} from './Contact.styles';
import Error from '../../styles/Error.styles';
import Success from '../../styles/Success.styles';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [contactError, setContactError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setContactError(false);
    e.preventDefault();
    if (!EmailValidator.validate(email)) {
      setContactError(true);
      setEmailSent(false);
      return;
    }
    setEmailSent(true);
    return;

    emailjs.sendForm('service_fyms3aj', 'contact_form', form.current, '1dweh8rQNy46tw-cp')
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyledContacts>
      {emailSent ? <Success>Email Sent!</Success>
        : (
          <>
            <SectionHeader>Contact  </SectionHeader>
            <Form onSubmit={sendEmail} ref={form}>
              <InputSection>
                <Label htmlFor="from_email">Email: </Label>
                {contactError && <Error>Please enter a valid email address</Error>}
                <Input onChange={(e) => changeEmail(e)} value={email} type="email" name="from_email" id="from_email" />
              </InputSection>
              <InputSection>
                <Label htmlFor="subject">Subject: </Label>
                <Input type="text" name="subject" id="subject" />
              </InputSection>
              <InputSection>
                <Label htmlFor="message">Message: </Label>
                <TextArea name="message" id="message" />
              </InputSection>
              <FormButton>Submit</FormButton>
            </Form>
          </>
        )}
    </StyledContacts>
  );
}
