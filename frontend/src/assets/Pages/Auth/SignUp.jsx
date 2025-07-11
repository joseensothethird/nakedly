import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  PageWrapper,
  AuthContainer,
  Title,
  Input,
  SubmitButton,
  FooterText,
  Divider,
  SocialButton
} from '../../Components/styles/pages/AUTH';

const SignupForm = () => {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    confirmPassword: '',
    role: 'subscriber'
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Registration failed');
      } else {
        // Automatically redirect to login without showing success message
        navigate('/login');
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Error connecting to the server.');
    }
  };

  return (
    <PageWrapper>
      <AuthContainer>
        <Title>Create your account</Title>

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          
          <Input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            minLength="6"
          />

          <Input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            minLength="6"
          />
          
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
        
        <Divider>or</Divider>
    
        <SocialButton>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3635H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2526 17.64 11.9456 17.64 9.2045Z" fill="#4285F4"/>
            <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
            <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5934 3.68182 9C3.68182 8.4066 3.78409 7.83 3.96409 7.29V4.9582H0.957273C0.347727 6.1731 0 7.5477 0 9C0 10.4523 0.347727 11.8269 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
            <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </SocialButton>
    
        <SocialButton>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M12.1043 0.600098H5.89525C2.86925 0.600098 0.400024 3.06932 0.400024 6.09532V12.3043C0.400024 15.3303 2.86925 17.7995 5.89525 17.7995H12.1043C15.1303 17.7995 17.5995 15.3303 17.5995 12.3043V6.09532C17.5995 3.06932 15.1303 0.600098 12.1043 0.600098Z" fill="#395185"/>
            <path d="M12.9996 9.0001H10.7996V17.2001H7.9996V9.0001H6.3996V6.4001H7.9996V4.5001C7.9996 3.2001 8.7996 1.6001 11.0996 1.6001H13.5996V4.2001H11.9996C11.5996 4.2001 10.7996 4.3001 10.7996 5.1001V6.4001H13.5996L12.9996 9.0001Z" fill="white"/>
          </svg>
          Continue with Facebook
        </SocialButton>
        
        <FooterText>
          Already have an account? <a href="/login">Log in</a>
        </FooterText>
      </AuthContainer>
    </PageWrapper>
  );
};

export default SignupForm;