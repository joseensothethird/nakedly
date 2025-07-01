import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Lock, Heart, MessageSquare, Star } from 'react-feather';

export const SectionContainer = styled.section`
  padding: 40px 20px;
  background: #f8fafc;
  min-height: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: #00AFF0;
  font-weight: 700;
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const ModelCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 175, 240, 0.2);
  }
`;

export const ModelImageContainer = styled.div`
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  }
`;

export const ModelInfo = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;

export const ModelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ModelName = styled.h3`
  margin: 0;
  color: #111827;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ModelUsername = styled.p`
  margin: 2px 0 0;
  color: #6b7280;
  font-size: 0.9rem;
`;

export const ModelPrice = styled.span`
  background: ${props => props.$isPremium ? '#00AFF0' : '#4CAF50'};
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const ModelDescription = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 8px 0 12px;
  line-height: 1.4;
`;

export const ModelMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: #6b7280;
  font-size: 0.85rem;
`;

export const ModelStats = styled.div`
  display: flex;
  gap: 15px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  
  svg {
    width: 14px;
    height: 14px;
    color: ${props => props.$color || '#00AFF0'};
  }
`;

export const ModelRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #FFD700;
  
  svg {
    width: 14px;
    height: 14px;
    fill: #FFD700;
  }
`;

export const PremiumBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #00AFF0;
  color: white;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const OnlineBadge = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background: #4CAF50;
  color: white;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const SubscribeButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px;
  background: ${props => props.$isPremium ? '#00AFF0' : '#4CAF50'};
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-top: 15px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${props => props.$isPremium ? 'rgba(0, 175, 240, 0.4)' : 'rgba(76, 175, 80, 0.4)'};
    background: ${props => props.$isPremium ? '#0095D9' : '#3d8b40'};
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #6b7280;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 30px;
  background: rgba(255, 77, 77, 0.1);
  color: #ff4d4d;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(255, 77, 77, 0.3);
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 8px;
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  background: ${props => props.$isActive ? '#00AFF0' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#6b7280'};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$isActive ? '#0095D9' : '#f3f4f6'};
    border-color: #d1d5db;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Ellipsis = styled.span`
  padding: 8px 16px;
  color: #6b7280;
`;