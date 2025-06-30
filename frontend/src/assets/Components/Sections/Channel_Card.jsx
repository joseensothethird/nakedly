import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Lock, Heart, MessageSquare, Star } from 'react-feather';

const OnlyFansModelsSection = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockModels = [
          {
            id: 1,
            name: 'Bella Rose',
            username: '@bellarose',
            country: 'USA',
            age: 24,
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww',
            isPremium: true,
            price: '$12.99/mo',
            likes: '245k',
            rating: 4.8,
            posts: '1.2k',
            description: 'Fitness model & lifestyle content',
            isOnline: true
          },
          {
            id: 2,
            name: 'Alex Morgan',
            username: '@alexmorgan',
            country: 'UK',
            age: 27,
            image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww',
            isPremium: true,
            price: '$9.99/mo',
            likes: '182k',
            rating: 4.5,
            posts: '856',
            description: 'Cosplay and gaming enthusiast',
            isOnline: false
          },
          {
            id: 3,
            name: 'Sophia Lee',
            username: '@sophialee',
            country: 'Australia',
            age: 22,
            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
            isPremium: true,
            price: '$14.99/mo',
            likes: '321k',
            rating: 4.9,
            posts: '2.1k',
            description: 'Luxury lifestyle and travel',
            isOnline: true
          },
          {
            id: 4,
            name: 'Ryan Cole',
            username: '@ryancole',
            country: 'Canada',
            age: 29,
            image: 'https://images.unsplash.com/photo-1562788865-9c0e49bf1b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww',
            isPremium: false,
            price: 'Free',
            likes: '87k',
            rating: 4.3,
            posts: '432',
            description: 'Fitness coach and nutritionist',
            isOnline: true
          },
          {
            id: 5,
            name: 'Mia Khalifa',
            username: '@miakhalifa',
            country: 'Lebanon',
            age: 30,
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D',
            isPremium: true,
            price: '$19.99/mo',
            likes: '456k',
            rating: 4.9,
            posts: '3.2k',
            description: 'Exclusive content creator',
            isOnline: false
          },
          {
            id: 6,
            name: 'David King',
            username: '@davidking',
            country: 'Germany',
            age: 31,
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D',
            isPremium: true,
            price: '$15.99/mo',
            likes: '193k',
            rating: 4.6,
            posts: '1.1k',
            description: 'Bodybuilder and fitness model',
            isOnline: true
          }
        ];

        setModels(mockModels);
      } catch (err) {
        setError('Failed to load creators. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  // Styled components
  const SectionContainer = styled.section`
    padding: 40px 20px;
    background: #f8fafc;
    min-height: 100vh;
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
    max-width: 1400px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  `;

  const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: #00AFF0;
    font-weight: 700;
  `;

  const SectionSubtitle = styled.p`
    text-align: center;
    color: #666;
    margin-bottom: 40px;
    font-size: 1rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  `;

  const ModelCard = styled.div`
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

  const ModelImage = styled.div`
    width: 100%;
    height: 320px;
    background-image: url(${props => props.image});
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

  const ModelInfo = styled.div`
    padding: 18px;
    display: flex;
    flex-direction: column;
  `;

  const ModelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  `;

  const ModelName = styled.h3`
    margin: 0;
    color: #111827;
    font-size: 1.2rem;
    font-weight: 600;
  `;

  const ModelUsername = styled.p`
    margin: 2px 0 0;
    color: #6b7280;
    font-size: 0.9rem;
  `;

  const ModelPrice = styled.span`
    background: ${props => props.isPremium ? '#00AFF0' : '#4CAF50'};
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
  `;

  const ModelDescription = styled.p`
    color: #6b7280;
    font-size: 0.9rem;
    margin: 8px 0 12px;
    line-height: 1.4;
  `;

  const ModelMeta = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #6b7280;
    font-size: 0.85rem;
  `;

  const ModelStats = styled.div`
    display: flex;
    gap: 15px;
  `;

  const StatItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    
    svg {
      width: 14px;
      height: 14px;
      color: ${props => props.color || '#00AFF0'};
    }
  `;

  const ModelRating = styled.div`
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

  const PremiumBadge = styled.span`
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

  const OnlineBadge = styled.span`
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

  const SubscribeButton = styled(Link)`
    display: block;
    width: 100%;
    padding: 12px;
    background: ${props => props.isPremium ? 
      '#00AFF0' : 
      '#4CAF50'};
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
      box-shadow: 0 5px 15px ${props => props.isPremium ? 'rgba(0, 175, 240, 0.4)' : 'rgba(76, 175, 80, 0.4)'};
      background: ${props => props.isPremium ? '#0095D9' : '#3d8b40'};
    }
  `;

  const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 1.2rem;
    color: #6b7280;
  `;

  const ErrorMessage = styled.div`
    text-align: center;
    padding: 30px;
    background: rgba(255, 77, 77, 0.1);
    color: #ff4d4d;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid rgba(255, 77, 77, 0.3);
  `;

  return (
    <SectionContainer id="models">
      <SectionTitle>OnlyFans Creators</SectionTitle>
      <SectionSubtitle>
        Discover exclusive content from your favorite creators. Subscribe to access premium content.
      </SectionSubtitle>
      
      {loading ? (
        <LoadingSpinner>Loading creators...</LoadingSpinner>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <GridContainer>
          {models.map((model) => (
            <ModelCard key={model.id}>
              <ModelImage image={model.image} />
              {model.isPremium && (
                <PremiumBadge>
                  <Lock size={12} />
                  <span>PREMIUM</span>
                </PremiumBadge>
              )}
              {model.isOnline && (
                <OnlineBadge>ONLINE</OnlineBadge>
              )}
              <ModelInfo>
                <ModelHeader>
                  <div>
                    <ModelName>{model.name}</ModelName>
                    <ModelUsername>{model.username}</ModelUsername>
                  </div>
                  <ModelPrice isPremium={model.isPremium}>
                    {model.price}
                  </ModelPrice>
                </ModelHeader>
                
                <ModelDescription>{model.description}</ModelDescription>
                
                <ModelMeta>
                  <ModelStats>
                    <StatItem>
                      <Heart size={14} />
                      {model.likes}
                    </StatItem>
                    <StatItem color="#00AFF0">
                      <MessageSquare size={14} />
                      {model.posts}
                    </StatItem>
                  </ModelStats>
                  <ModelRating>
                    <Star size={14} />
                    {model.rating}
                  </ModelRating>
                </ModelMeta>
                
             <SubscribeButton 
  to={`/nakedly/profile/`}  // Changed from mockModels.id to model.id
  isPremium={model.isPremium}
>
  {model.isPremium ? 'Subscribe' : 'Follow'}
</SubscribeButton>
              </ModelInfo>
            </ModelCard>
          ))}
        </GridContainer>
      )}
    </SectionContainer>
  );
};

export default OnlyFansModelsSection;