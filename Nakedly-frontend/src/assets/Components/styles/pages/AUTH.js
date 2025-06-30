import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #fafafa;
  padding: 20px;
`;


export const AuthContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  padding: 30px;
  height:auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;
export const Paragraph = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const RoleSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
`;

export const RoleButton = styled.button`
  padding: 0;
  background: white;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    border-color: #00aff0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const RoleImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  ${RoleButton}:hover & {
    transform: scale(1.05);
  }
`;


export const RoleLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-color: #00aff0;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #00aff0;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #008ecc;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #888;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #eee;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    margin-right: 10px;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  color: #888;
  font-size: 14px;
  margin-top: 20px;

  a {
    color: #00aff0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BackButton = styled.button`
  margin-top: 12px;
  background: transparent;
  border: none;
  color: #00aff0;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;
