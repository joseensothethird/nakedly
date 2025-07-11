import styled from 'styled-components';

// Main Container
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  background: white;
  border: 1px solid #ddd;
  overflow: hidden;
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

// Banner Section
export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: rgba(152, 152, 152, 0.1);
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: black;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// Content Layout
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Left = styled.div`
  flex: 0 0 140px;
  
  @media (max-width: 768px) {
    flex: none;
    align-self: center;
  }
`;

export const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  margin-top: -70px;
  background: #eee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: block;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Profile Info Section
export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const FirstName = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  color: black;
`;

export const LastName = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  color: black;
`;

export const Username = styled.span`
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  display: block;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const FollowBtn = styled.button`
  background-color: ${props => props.isFollowing ? '#f3f4f6' : '#0095f6'};
  color: ${props => props.isFollowing ? '#374151' : 'white'};
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.isFollowing ? '#e5e7eb' : '#0084d6'};
  }
`;

export const SubscribeBtn = styled.button`
  background-color: #10b981;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background-color: #0d9f6e;
  }
`;

// Stats Section
export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 14px;
  color: #6b7280;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  
  strong {
    color: black;
    font-weight: 600;
  }
`;

export const OnlineIndicator = styled.div`
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  margin-right: 4px;
`;

export const Bio = styled.p`
  margin: 0;
  font-style: italic;
  color: #374151;
  line-height: 1.6;
`;

// Details Section
export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  font-size: 14px;
  color: black;
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 2px 0;
  
  strong {
    font-weight: 600;
    color: black;
  }
  
  span {
    color: #6b7280;
  }
`;

export const SpecialtiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SpecialtyTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const SpecialtyTag = styled.span`
  background: #dbeafe;
  color: #1e40af;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const Links = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;

  a {
    color: #6b7280;
    transition: color 0.2s;
    
    &:hover {
      color: #374151;
    }
  }
`;

// Modal Components
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #374151;
  }
`;

// Form Components
export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #0095f6;
    box-shadow: 0 0 0 2px rgba(0, 149, 246, 0.1);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #0095f6;
    box-shadow: 0 0 0 2px rgba(0, 149, 246, 0.1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &.primary {
    background: #0095f6;
    color: white;
    border: none;
    
    &:hover {
      background: #0084d6;
    }
  }
  
  &.secondary {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #e5e7eb;
    }
  }
`;

// Subscription Components
export const SubscriptionPlans = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const PlanCard = styled.div`
  border: 1px solid ${props => props.isSelected ? '#0095f6' : '#d1d5db'};
  border-radius: 8px;
  padding: 16px;
  background: ${props => props.isSelected ? '#f0f9ff' : 'white'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #0095f6;
  }
`;

export const PlanTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: black;
`;

export const PlanPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 8px;
`;

export const PlanDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

export const PaymentMethod = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const ErrorMessage = styled.div`
  padding: 20px;
  background: #ffebee;
  border-radius: 8px;
  color: #c62828;
  margin: 20px 0;
  text-align: center;

  h3 {
    margin-top: 0;
    color: #c62828;
  }

  p {
    margin-bottom: 0;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;

  .spinner {
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
// styles/pages/profile/profile.js
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
`;
