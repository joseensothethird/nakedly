import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaHeart,
  FaComment,
  FaShare,
  FaLock,
  FaPlay,
  FaUserPlus,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

// Styled components
const GalleryContainer = styled.div`
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const PostCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const ChannelCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MediaContainer = styled.div`
  position: relative;
  height: 200px;
  background: #f5f5f5;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ isPremium, isSubscribed }) => isPremium && !isSubscribed && `
    img, video {
      filter: blur(8px);
    }
  `}
`;

const VideoIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PremiumOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 20px;

  p {
    margin: 10px 0;
  }
`;

const PremiumIcon = styled.div`
  background: #ff4b96;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const ContentInfo = styled.div`
  padding: 15px;
`;

const ContentTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 16px;
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;
  font-size: 12px;
`;

const ContentActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: none;
  background: #ff4b96;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.3s;

  &:hover {
    background: #ff2d81;
  }
`;

const ChannelBanner = styled.div`
  height: 100px;
  background: linear-gradient(45deg, #ff4b96, #ff83a8);
  position: relative;
`;

const ChannelAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  bottom: -30px;
  left: 20px;
  object-fit: cover;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  border: none;
  background: ${({ active }) => active ? '#ff4b96' : '#f5f5f5'};
  color: ${({ active }) => active ? 'white' : '#333'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ active }) => active ? '#ff2d81' : '#e0e0e0'};
  }
`;

const PaginationArrow = styled.button`
  padding: 5px 10px;
  border: none;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ContentGallery = ({ 
  posts, 
  channels, 
  isSubscribed, 
  onSubscribeClick,
  postsPerPage = 3 
}) => {
  const [currentPostPage, setCurrentPostPage] = useState(1);
  const [currentChannelPage, setCurrentChannelPage] = useState(1);

  // Calculate pagination for posts
  const totalPostPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPostPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate pagination for channels
  const channelsPerPage = 4;
  const totalChannelPages = Math.ceil(channels.length / channelsPerPage);
  const indexOfLastChannel = currentChannelPage * channelsPerPage;
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  const currentChannels = channels.slice(indexOfFirstChannel, indexOfLastChannel);

  const paginate = (pageNumber, type) => {
    if (type === 'post') {
      setCurrentPostPage(pageNumber);
    } else {
      setCurrentChannelPage(pageNumber);
    }
  };

  return (
    <GalleryContainer>
      {/* Posts Section */}
      <SectionTitle>Recent Posts</SectionTitle>
      <ContentGrid>
        {currentPosts.map((post) => (
          <PostCard key={post.id}>
            <MediaContainer isPremium={post.isPremium} isSubscribed={isSubscribed}>
              {post.type === 'video' ? (
                <>
                  <video src={post.media} />
                  <VideoIndicator>
                    <FaPlay size={12} />
                  </VideoIndicator>
                </>
              ) : (
                <img src={post.media} alt={post.caption} />
              )}
              
              {post.isPremium && !isSubscribed && (
                <PremiumOverlay>
                  <PremiumIcon>
                    <FaLock size={20} />
                  </PremiumIcon>
                  <p>Premium Content</p>
                  <SubscribeButton onClick={onSubscribeClick}>
                    Subscribe to View
                  </SubscribeButton>
                </PremiumOverlay>
              )}
            </MediaContainer>
            <ContentInfo>
              <ContentTitle>{post.caption}</ContentTitle>
              <ContentMeta>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <ContentActions>
                  <ActionButton>
                    <FaHeart size={12} /> {post.likes}
                  </ActionButton>
                  <ActionButton>
                    <FaComment size={12} /> {post.comments}
                  </ActionButton>
                  <ActionButton>
                    <FaShare size={12} />
                  </ActionButton>
                </ContentActions>
              </ContentMeta>
            </ContentInfo>
          </PostCard>
        ))}
      </ContentGrid>

      {posts.length > postsPerPage && (
        <PaginationContainer>
          <PaginationArrow 
            onClick={() => paginate(currentPostPage - 1, 'post')} 
            disabled={currentPostPage === 1}
          >
            <FaChevronLeft /> Prev
          </PaginationArrow>
          
          {Array.from({ length: totalPostPages }, (_, i) => i + 1).map(number => (
            <PageButton 
              key={number} 
              onClick={() => paginate(number, 'post')}
              active={currentPostPage === number}
            >
              {number}
            </PageButton>
          ))}
          
          <PaginationArrow 
            onClick={() => paginate(currentPostPage + 1, 'post')} 
            disabled={currentPostPage === totalPostPages}
          >
            Next <FaChevronRight />
          </PaginationArrow>
        </PaginationContainer>
      )}

      {/* Channels Section */}
      <SectionTitle>Recommended Channels</SectionTitle>
      <ContentGrid>
        {currentChannels.map((channel) => (
          <ChannelCard key={channel.id}>
            <ChannelBanner>
              <ChannelAvatar src={channel.avatar} alt={channel.name} />
            </ChannelBanner>
            <ContentInfo>
              <ContentTitle>{channel.name}</ContentTitle>
              <ContentMeta>
                <span>{channel.followers} followers</span>
                <span>{channel.posts} posts</span>
              </ContentMeta>
              <SubscribeButton 
                onClick={channel.isPremium ? onSubscribeClick : () => {}}
              >
                {channel.isPremium && !isSubscribed ? (
                  <>
                    <FaLock /> Premium Channel
                  </>
                ) : (
                  <>
                    <FaUserPlus /> {isSubscribed ? 'Following' : 'Follow'}
                  </>
                )}
              </SubscribeButton>
            </ContentInfo>
          </ChannelCard>
        ))}
      </ContentGrid>

      {channels.length > channelsPerPage && (
        <PaginationContainer>
          <PaginationArrow 
            onClick={() => paginate(currentChannelPage - 1, 'channel')} 
            disabled={currentChannelPage === 1}
          >
            <FaChevronLeft /> Prev
          </PaginationArrow>
          
          {Array.from({ length: totalChannelPages }, (_, i) => i + 1).map(number => (
            <PageButton 
              key={number} 
              onClick={() => paginate(number, 'channel')}
              active={currentChannelPage === number}
            >
              {number}
            </PageButton>
          ))}
          
          <PaginationArrow 
            onClick={() => paginate(currentChannelPage + 1, 'channel')} 
            disabled={currentChannelPage === totalChannelPages}
          >
            Next <FaChevronRight />
          </PaginationArrow>
        </PaginationContainer>
      )}
    </GalleryContainer>
  );
};

export default ContentGallery;