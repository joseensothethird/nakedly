// src/pages/SubscriptionPage.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components
const SubscriptionPageWrapper = styled.div`
  min-height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const SubscriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SubscriptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const CreatorInfo = styled.div`
  flex: 1;
`;

const CreatorName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #333;
`;

const CreatorStats = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #666;
`;

const Price = styled.span`
  font-weight: bold;
  color: #333;
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.subscribed ? '#4CAF50' : '#ff2d55'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
  margin-left: 1rem;

  &:hover {
    background: ${props => props.subscribed ? '#3d8b40' : '#e61e4d'};
  }
`;

const EarningsInfo = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const StatCard = styled.div`
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const SubscriptionPage = () => {
  // User type - change this to 'seller' to see seller view
  const [userType, setUserType] = React.useState('subscriber');
  
  // Mock data for subscribed creators
  const subscribedCreators = [
    { id: 1, name: 'Jessica Parker', price: '$9.99', posts: 245, subscribed: true },
    { id: 2, name: 'Alex Morgan', price: '$14.99', posts: 189, subscribed: true },
  ];
  
  // Mock data for discover creators
  const discoverCreators = [
    { id: 3, name: 'Sophie Turner', price: '$12.99', posts: 312, subscribed: false },
    { id: 4, name: 'Emma Watson', price: '$19.99', posts: 156, subscribed: false },
    { id: 5, name: 'Taylor Swift', price: '$24.99', posts: 421, subscribed: false },
    { id: 6, name: 'Ariana Grande', price: '$17.99', posts: 278, subscribed: false },
  ];

  // Mock data for subscribers (seller view)
  const yourSubscribers = [
    { id: 101, name: 'John Doe', joined: '2023-01-15', lastActive: '2 days ago' },
    { id: 102, name: 'Jane Smith', joined: '2023-02-20', lastActive: '1 week ago' },
    { id: 103, name: 'Mike Johnson', joined: '2023-03-10', lastActive: '3 days ago' },
  ];

  // Mock stats for seller
  const sellerStats = {
    totalEarnings: '$1,245.50',
    monthlyEarnings: '$345.20',
    totalSubscribers: 42,
    newThisMonth: 5
  };

  const [activeTab, setActiveTab] = React.useState('subscribed');
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

  // Toggle user type for demo purposes
  const toggleUserType = () => {
    setUserType(userType === 'subscriber' ? 'seller' : 'subscriber');
  };

  return (
    <SubscriptionPageWrapper>
      <Main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title>
            {userType === 'subscriber' ? 'Subscriptions' : 'Your Subscribers'}
          </Title>
          <button 
            onClick={toggleUserType}
            style={{
              padding: '0.5rem 1rem',
              background: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Switch to {userType === 'subscriber' ? 'Seller' : 'Subscriber'} View
          </button>
        </div>

        {userType === 'seller' ? (
          <>
            <EarningsInfo>
              <h3>Your Earnings</h3>
              <StatsGrid>
                <StatCard>
                  <StatValue>{sellerStats.totalEarnings}</StatValue>
                  <StatLabel>Total Earnings</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{sellerStats.monthlyEarnings}</StatValue>
                  <StatLabel>This Month</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{sellerStats.totalSubscribers}</StatValue>
                  <StatLabel>Total Subscribers</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{sellerStats.newThisMonth}</StatValue>
                  <StatLabel>New This Month</StatLabel>
                </StatCard>
              </StatsGrid>
            </EarningsInfo>

            <h3>Your Subscribers ({yourSubscribers.length})</h3>
            <SubscriptionList>
              {yourSubscribers.map(subscriber => (
                <SubscriptionItem key={subscriber.id}>
                  <CreatorInfo>
                    <CreatorName>{subscriber.name}</CreatorName>
                    <CreatorStats>
                      Joined: {subscriber.joined} • Last active: {subscriber.lastActive}
                    </CreatorStats>
                  </CreatorInfo>
                  <SubscribeButton 
                    style={{ background: '#666' }}
                    onClick={() => console.log(`Message ${subscriber.name}`)}
                  >
                    Message
                  </SubscribeButton>
                </SubscriptionItem>
              ))}
            </SubscriptionList>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', marginBottom: '2rem' }}>
              <button 
                style={{ 
                  padding: '0.75rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: activeTab === 'subscribed' ? '#ff2d55' : '#666',
                  borderBottom: activeTab === 'subscribed' ? '2px solid #ff2d55' : 'none',
                  marginRight: '1rem'
                }}
                onClick={() => setActiveTab('subscribed')}
              >
                Your Subscriptions
              </button>
              <button 
                style={{ 
                  padding: '0.75rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: activeTab === 'discover' ? '#ff2d55' : '#666',
                  borderBottom: activeTab === 'discover' ? '2px solid #ff2d55' : 'none'
                }}
                onClick={() => setActiveTab('discover')}
              >
                Discover Creators
              </button>
            </div>
            
            <SubscriptionList>
              {creators.map(creator => (
                <SubscriptionItem key={creator.id}>
                  <CreatorInfo>
                    <CreatorName>{creator.name}</CreatorName>
                    <CreatorStats>
                      <Price>{creator.price}</Price> per month • {creator.posts} posts
                    </CreatorStats>
                  </CreatorInfo>
                  <SubscribeButton 
                    subscribed={creator.subscribed}
                    onClick={() => handleSubscribe(creator.id)}
                  >
                    {creator.subscribed ? 'Subscribed' : 'Subscribe'}
                  </SubscribeButton>
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