// src/pages/SubscriptionPage.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const SubscriptionPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.background};
  width: 100%;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem 5%;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primaryText};
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  color: ${props => props.theme.colors.primaryText};
  font-weight: 600;
`;

const SubscriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const SubscriptionItem = styled.li`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  }
`;

const CreatorHeader = styled.div`
  position: relative;
  height: 120px;
  background: linear-gradient(45deg, #ff2d55, #ff6b81);
`;

const CreatorAvatar = styled.div`
  position: absolute;
  bottom: -30px;
  left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ddd;
  border: 4px solid ${props => props.theme.colors.cardBackground};
  background-image: url(${props => props.imageUrl || 'https://via.placeholder.com/80'});
  background-size: cover;
  background-position: center;
`;

const CreatorInfo = styled.div`
  padding: 50px 20px 20px;
`;

const CreatorName = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.primaryText};
  font-weight: 600;
`;

const CreatorStats = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.secondaryText};
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryText};
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.secondaryText};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SubscribeButton = styled.button`
  padding: 0.75rem;
  background: ${props => props.subscribed ? props.theme.colors.success : props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${props => props.subscribed ? props.theme.colors.successDark : props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const EarningsInfo = styled.div`
  padding: 2rem;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const StatCard = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const LargeStatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const SubscriberItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const SubscriberAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ddd;
  margin-right: 1rem;
  background-image: url(${props => props.imageUrl || 'https://via.placeholder.com/50'});
  background-size: cover;
  background-position: center;
`;

const SubscriberInfo = styled.div`
  flex: 1;
`;

const SubscriberName = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primaryText};
`;

const SubscriberMeta = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.secondaryText};
`;

const ActionButton = styled.button`
  padding: 0.5rem 1.25rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  margin-left: 1rem;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.secondaryText};
  border-bottom: ${props => props.active ? `3px solid ${props.theme.colors.primary}` : 'none'};
  font-weight: ${props => props.active ? '600' : '500'};
  transition: all 0.2s;
  margin-right: 1rem;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const theme = {
  colors: {
    primary: '#ff2d55',
    primaryDark: '#e61e4d',
    secondary: '#6c5ce7',
    secondaryDark: '#5649c0',
    success: '#00b894',
    successDark: '#00a884',
    background: '#f8f9fa',
    cardBackground: '#ffffff',
    primaryText: '#2d3436',
    secondaryText: '#636e72',
    border: '#dfe6e9'
  }
};

const SubscriptionPage = ({ userRole = 'subscriber' }) => {
  const [activeTab, setActiveTab] = React.useState('subscribed');
  
  // Mock data for subscribed creators
  const subscribedCreators = [
    { 
      id: 1, 
      name: 'Jessica Parker', 
      price: '$9.99', 
      posts: 245, 
      subscribers: 12500,
      media: 342,
      subscribed: true,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 2, 
      name: 'Alex Morgan', 
      price: '$14.99', 
      posts: 189, 
      subscribers: 8900,
      media: 256,
      subscribed: true,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
  ];
  
  // Mock data for discover creators
  const discoverCreators = [
    { 
      id: 3, 
      name: 'Sophie Turner', 
      price: '$12.99', 
      posts: 312, 
      subscribers: 21500,
      media: 421,
      subscribed: false,
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    { 
      id: 4, 
      name: 'Emma Watson', 
      price: '$19.99', 
      posts: 156, 
      subscribers: 18500,
      media: 289,
      subscribed: false,
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    { 
      id: 5, 
      name: 'Taylor Swift', 
      price: '$24.99', 
      posts: 421, 
      subscribers: 32500,
      media: 512,
      subscribed: false,
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    { 
      id: 6, 
      name: 'Ariana Grande', 
      price: '$17.99', 
      posts: 278, 
      subscribers: 27500,
      media: 387,
      subscribed: false,
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
  ];

  // Mock data for subscribers (seller view)
  const yourSubscribers = [
    { 
      id: 101, 
      name: 'John Doe', 
      joined: '2023-01-15', 
      lastActive: '2 days ago',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      subscriptionTier: 'Premium ($19.99)'
    },
    { 
      id: 102, 
      name: 'Jane Smith', 
      joined: '2023-02-20', 
      lastActive: '1 week ago',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
      subscriptionTier: 'Standard ($9.99)'
    },
    { 
      id: 103, 
      name: 'Mike Johnson', 
      joined: '2023-03-10', 
      lastActive: '3 days ago',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      subscriptionTier: 'Premium ($19.99)'
    },
    { 
      id: 104, 
      name: 'Sarah Williams', 
      joined: '2023-04-05', 
      lastActive: '1 day ago',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      subscriptionTier: 'VIP ($29.99)'
    },
  ];

  // Mock stats for seller
  const sellerStats = {
    totalEarnings: '$1,245.50',
    monthlyEarnings: '$345.20',
    totalSubscribers: 42,
    newThisMonth: 5,
    activeToday: 12,
    renewalRate: '92%'
  };

  const [creators, setCreators] = React.useState(subscribedCreators);

  const handleSubscribe = (creatorId) => {
    console.log(`Subscribed to creator ${creatorId}`);
    setCreators(creators.map(creator => 
      creator.id === creatorId 
        ? {...creator, subscribed: !creator.subscribed} 
        : creator
    ));
  };

  React.useEffect(() => {
    setCreators(activeTab === 'subscribed' ? subscribedCreators : discoverCreators);
  }, [activeTab]);

  return (
    <SubscriptionPageWrapper theme={theme}>
      <Main>
        <Title theme={theme}>
          {userRole === 'subscriber' ? 'My Subscriptions' : 'Subscriber Dashboard'}
        </Title>

        {userRole === 'creator' ? (
          <>
            <EarningsInfo theme={theme}>
              <SectionTitle theme={theme}>Your Earnings Overview</SectionTitle>
              <StatsGrid>
                <StatCard theme={theme}>
                  <LargeStatValue theme={theme}>{sellerStats.totalEarnings}</LargeStatValue>
                  <StatLabel theme={theme}>Total Earnings</StatLabel>
                </StatCard>
                <StatCard theme={theme}>
                  <LargeStatValue theme={theme}>{sellerStats.monthlyEarnings}</LargeStatValue>
                  <StatLabel theme={theme}>This Month</StatLabel>
                </StatCard>
                <StatCard theme={theme}>
                  <LargeStatValue theme={theme}>{sellerStats.totalSubscribers}</LargeStatValue>
                  <StatLabel theme={theme}>Total Subscribers</StatLabel>
                </StatCard>
                <StatCard theme={theme}>
                  <LargeStatValue theme={theme}>{sellerStats.newThisMonth}</LargeStatValue>
                  <StatLabel theme={theme}>New This Month</StatLabel>
                </StatCard>
                <StatCard theme={theme}>
                  <LargeStatValue theme={theme}>{sellerStats.activeToday}</LargeStatValue>
                  <StatLabel theme={theme}>Active Today</StatLabel>
                </StatCard>
                <StatCard theme={theme}>
                  <LargeStatValue theme={theme}>{sellerStats.renewalRate}</LargeStatValue>
                  <StatLabel theme={theme}>Renewal Rate</StatLabel>
                </StatCard>
              </StatsGrid>
            </EarningsInfo>

            <SectionTitle theme={theme}>Your Subscribers ({yourSubscribers.length})</SectionTitle>
            <div style={{ marginBottom: '2rem' }}>
              {yourSubscribers.map(subscriber => (
                <SubscriberItem key={subscriber.id} theme={theme}>
                  <SubscriberAvatar imageUrl={subscriber.avatar} />
                  <SubscriberInfo>
                    <SubscriberName theme={theme}>{subscriber.name}</SubscriberName>
                    <SubscriberMeta theme={theme}>
                      <span>Joined: {subscriber.joined}</span> • 
                      <span> Last active: {subscriber.lastActive}</span> • 
                      <span> {subscriber.subscriptionTier}</span>
                    </SubscriberMeta>
                  </SubscriberInfo>
                  <ActionButton theme={theme}>
                    Message
                  </ActionButton>
                </SubscriberItem>
              ))}
            </div>
          </>
        ) : (
          <>
            <TabContainer theme={theme}>
              <TabButton 
                active={activeTab === 'subscribed'}
                onClick={() => setActiveTab('subscribed')}
                theme={theme}
              >
                Your Subscriptions
              </TabButton>
              <TabButton 
                active={activeTab === 'discover'}
                onClick={() => setActiveTab('discover')}
                theme={theme}
              >
                Discover Creators
              </TabButton>
            </TabContainer>
            
            <SubscriptionList>
              {creators.map(creator => (
                <SubscriptionItem key={creator.id} theme={theme}>
                  <CreatorHeader>
                    <CreatorAvatar imageUrl={creator.avatar} />
                  </CreatorHeader>
                  <CreatorInfo>
                    <CreatorName theme={theme}>{creator.name}</CreatorName>
                    <CreatorStats theme={theme}>
                      <Price theme={theme}>{creator.price}</Price>
                      <span>per month</span>
                    </CreatorStats>
                    <StatsRow theme={theme}>
                      <StatItem>
                        <StatValue theme={theme}>{creator.posts}</StatValue>
                        <StatLabel theme={theme}>Posts</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatValue theme={theme}>{creator.media}</StatValue>
                        <StatLabel theme={theme}>Media</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatValue theme={theme}>{creator.subscribers.toLocaleString()}</StatValue>
                        <StatLabel theme={theme}>Fans</StatLabel>
                      </StatItem>
                    </StatsRow>
                    <SubscribeButton 
                      subscribed={creator.subscribed}
                      onClick={() => handleSubscribe(creator.id)}
                      theme={theme}
                    >
                      {creator.subscribed ? 'Subscribed' : 'Subscribe Now'}
                    </SubscribeButton>
                  </CreatorInfo>
                </SubscriptionItem>
              ))}
            </SubscriptionList>
          </>
        )}
      </Main>
    </SubscriptionPageWrapper>
  );
};

export default SubscriptionPage;