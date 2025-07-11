import React, { useState } from 'react';
import styled from 'styled-components';

// Sample data based on the screenshot
const posts = [
  { id: 1, type: 'post', username: '12345678901', caption: 'SPF driving', imageUrl: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=SPIN' },
  { id: 2, type: 'post', username: 'SPIN', caption: 'LAUNCH', imageUrl: 'https://via.placeholder.com/300/00FF00/FFFFFF?text=LAUNCH' },
  { id: 3, type: 'post', username: 'CUFF', caption: '', imageUrl: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=CUFF' },
  { id: 4, type: 'reel', username: 'user4', caption: 'Reel 1', imageUrl: 'https://via.placeholder.com/300/FFFF00/000000?text=REEL1' },
  { id: 5, type: 'post', username: 'user5', caption: 'Post 5', imageUrl: 'https://via.placeholder.com/300/FF00FF/FFFFFF?text=POST5' },
  { id: 6, type: 'tagged', username: 'user6', caption: 'Tagged 1', imageUrl: 'https://via.placeholder.com/300/00FFFF/000000?text=TAGGED1' },
  { id: 7, type: 'post', username: 'user7', caption: 'Post 7', imageUrl: 'https://via.placeholder.com/300/000000/FFFFFF?text=POST7' },
  { id: 8, type: 'reel', username: 'user8', caption: 'Reel 2', imageUrl: 'https://via.placeholder.com/300/FFFFFF/000000?text=REEL2' },
  { id: 9, type: 'post', username: 'user9', caption: 'Post 9', imageUrl: 'https://via.placeholder.com/300/FFA500/FFFFFF?text=POST9' },
  { id: 10, type: 'tagged', username: 'user10', caption: 'Tagged 2', imageUrl: 'https://via.placeholder.com/300/800080/FFFFFF?text=TAGGED2' },
];

const InstagramPage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'posts') return post.type === 'post';
    if (activeTab === 'reels') return post.type === 'reel';
    if (activeTab === 'tagged') return post.type === 'tagged';
    return true;
  });

  return (
    <AppContainer>
      <Tabs>
        <Tab 
          active={activeTab === 'posts'} 
          onClick={() => setActiveTab('posts')}
        >
          <TabIcon>📷</TabIcon>
          <TabLabel>POSTS</TabLabel>
        </Tab>
        <Tab 
          active={activeTab === 'reels'} 
          onClick={() => setActiveTab('reels')}
        >
          <TabIcon>🎥</TabIcon>
          <TabLabel>PHOTOS</TabLabel>
        </Tab>
        <Tab 
          active={activeTab === 'tagged'} 
          onClick={() => setActiveTab('tagged')}
        >
          <TabIcon>🏷️</TabIcon>
          <TabLabel>Videos</TabLabel>
        </Tab>
      </Tabs>

      <PostsGrid>
        {filteredPosts.map((post, index) => (
          <Post 
            key={post.id}
            onMouseEnter={() => setHoveredCard(post.id)}
            onMouseLeave={() => setHoveredCard(null)}
            blurred={index > 1 && hoveredCard !== post.id}
          >
            <PostImage src={post.imageUrl} alt={post.caption} />
            <PostOverlay>
              <PostUsername>{post.username}</PostUsername>
              {post.caption && <PostCaption>{post.caption}</PostCaption>}
            </PostOverlay>
            {post.type === 'reel' && <ReelBadge>🎥</ReelBadge>}
            {index > 1 && hoveredCard !== post.id && (
              <BlurOverlay>
                <LockIcon>🔒</LockIcon>
                <BlurText>Hover to view</BlurText>
              </BlurOverlay>
            )}
          </Post>
        ))}
      </PostsGrid>
    </AppContainer>
  );
};

// Styled components
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
  border-bottom: ${props => props.active ? '2px solid #262626' : 'none'};
  opacity: ${props => props.active ? 1 : 0.6};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const TabIcon = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`;

const TabLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Post = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: ${props => props.blurred ? 'blur(4px)' : 'none'};
  transform: ${props => props.blurred ? 'scale(0.95)' : 'scale(1)'};
`;

const PostImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;

const PostOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Post}:hover & {
    opacity: 1;
  }
`;

const PostUsername = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
`;

const PostCaption = styled.span`
  font-size: 14px;
`;

const ReelBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const LockIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const BlurText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export default InstagramPage;