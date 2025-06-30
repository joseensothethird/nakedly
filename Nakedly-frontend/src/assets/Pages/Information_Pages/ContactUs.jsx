import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Styled components
  const ContactContainer = styled.section`
    padding: 80px 20px;
    background: #f9f9f9;
    color: #333;
  `;

  const ContactWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
  `;

  const ContactInfo = styled.div`
    h2 {
      font-size: 2.2rem;
      margin-bottom: 20px;
      color: #222;
    }

    p {
      margin-bottom: 30px;
      line-height: 1.6;
      color: #555;
    }
  `;

  const InfoItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;

    svg {
      margin-right: 15px;
      color: #4a6bff;
      font-size: 1.2rem;
      margin-top: 4px;
    }

    div {
      h3 {
        margin: 0 0 5px 0;
        font-size: 1.1rem;
      }

      p, a {
        margin: 0;
        color: #666;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #4a6bff;
        }
      }
    }
  `;

  const SocialLinks = styled.div`
    display: flex;
    margin-top: 30px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #4a6bff;
      color: white;
      border-radius: 50%;
      margin-right: 15px;
      transition: all 0.3s;

      &:hover {
        background: #3a5bef;
        transform: translateY(-3px);
      }

      svg {
        font-size: 1.1rem;
      }
    }
  `;

  const ContactForm = styled.form`
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    h3 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 1.5rem;
      color: #222;
    }
  `;

  const FormGroup = styled.div`
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #555;
    }

    input, textarea {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      transition: border 0.3s;

      &:focus {
        outline: none;
        border-color: #4a6bff;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }
  `;

  const SubmitButton = styled.button`
    background: #4a6bff;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #3a5bef;
      transform: translateY(-2px);
    }
  `;

  const SuccessMessage = styled.div`
    background: #e6f7e6;
    color: #2e7d32;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
  `;

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactInfo>
          <h2>Get In Touch</h2>
          <p>Have questions about our models or services? Reach out to us directly through any of these channels or fill out the contact form.</p>
          
          <InfoItem>
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <a href="mailto:jamesjebery@gmail.com">jamesjebery@gmail.com</a>
            </div>
          </InfoItem>

          <InfoItem>
            <FaPhone />
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </InfoItem>

          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>123 Model Street, Fashion District, NY 10001</p>
            </div>
          </InfoItem>

          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          <FormGroup>
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
          {submitted && <SuccessMessage>Thank you! Your message has been sent.</SuccessMessage>}
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactUs;