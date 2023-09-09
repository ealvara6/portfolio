import * as EmailValidator from 'email-validator';
import {
  ChangeEvent, FormEvent, useRef, useState,
} from 'react';
import emailjs from '@emailjs/browser';
import { SectionHeader } from '../Headers';
import StyledContacts, {
  ContactInfo,
  ContactText,
  Form, FormButton, Icon, Info, Input, InputSection, Label, TextArea,
} from './Contact.styles';
import Error from '../../styles/Error.styles';
import Success from '../../styles/Success.styles';
import Line from '../Animations/Animations.styles';
import linkedinIcon from '../../assets/icons8-linkedin.svg';
import phoneIcon from '../../assets/icons8-phone-25.png';
import emailIcon from '../../assets/icons8-email-25.png';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [contactError, setContactError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setContactError(false);
    const message = (form.current ? form.current : '');
    e.preventDefault();
    if (!EmailValidator.validate(email)) {
      setContactError(true);
      setEmailSent(false);
      return;
    }
    setEmailSent(true);
    // return;

    emailjs.sendForm('service_fyms3aj', 'contact_form', message, '1dweh8rQNy46tw-cp')
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <StyledContacts id="contact">
      <SectionHeader>Contact</SectionHeader>
      {emailSent ? <Success>Email Sent!</Success>
        : (
          <Form onSubmit={(e) => sendEmail(e)} ref={form}>
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
        )}
      <Line $horizontal />
      <ContactInfo>
        <Info>
          <Icon $icon={linkedinIcon} />
          :
          <ContactText>https://www.linkedin.com/in/ealvara6/</ContactText>
        </Info>
        <Info>
          <Icon $icon={phoneIcon} />
          :
          <ContactText>832-853-5119</ContactText>
        </Info>
        <Info>
          <Icon $icon={emailIcon} />
          :
          <ContactText>ealvara73@gmail.com</ContactText>
        </Info>
      </ContactInfo>
    </StyledContacts>
  );
}
