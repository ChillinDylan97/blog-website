import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactContent = () => {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_eywea47', 'template_8u16o7h', form.current, 
'3Nm37d0HDDslTmzjt')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};

return (
<form className='contact-content' ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>
);
};
export default ContactContent;