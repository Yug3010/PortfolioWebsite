import React from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import call from '../../assets/call_icon.svg';
import location from '../../assets/location_icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1cf528ec-8915-4a2f-a7c9-4906037f516c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email Sent Successfully");
    } else {
      toast.error("Failed to send email. Please try again later.");
    }
  }

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="Theme pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am always here to help you with any inquiries or concerns you may have. Whether you need assistance with our services, have a question about your account, or just want to give us feedback, feel free to reach out. I am dedicated to providing you with the best support possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Mail icon" />
              <p>yugsutariya4i@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call} alt="Call icon" />
              <p>2896233010</p>
            </div>

            <div className="contact-detail">
              <img src={location} alt="Location icon" />
              <p>41 Garfella Drive</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message'></textarea>

          <button type='submit' className='contact-submit'>Submit now</button>
          <ToastContainer/>
        </form>
      </div>
    </div>
  );
}

export default Contact;
