import React from 'react';
import { Search, MoreHorizontal } from 'react-feather';
import styled from 'styled-components';

const RightSidebarComponent = () => {
  const suggestions = [
    {
      id: 1,
      name: "Princess Tina",
      username: "@princesstina",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      badge: "Free"
    },
    {
      id: 2,
      name: "Devon Moore",
      username: "@devon.moore",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      badge: "Free"
    }
  ];

  const channels = [
    {
      id: 1,
      name: "Photography",
      handle: "@photography_lovers",
      avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=40&h=40&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=80&h=80&fit=crop"
      ],
      members: "12.5k"
    },
    {
      id: 2,
      name: "Travel",
      handle: "@world_travelers",
      avatar: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=40&h=40&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=80&h=80&fit=crop"
      ],
      members: "8.2k"
    },
    {
      id: 3,
      name: "Food",
      handle: "@food_enthusiasts",
      avatar: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=40&h=40&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop"
      ],
      members: "15.7k"
    }
  ];

  return (
    <RightSidebarContainer>
      <SearchContainer>
        <SearchInput placeholder="Search posts" />
        <SearchIcon size={18} />
      </SearchContainer>

      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Recommended Channels</SectionTitle>
          <MoreHorizontal size={16} color="#6c757d" />
        </SectionHeader>

        <ChannelsList>
          {channels.map(channel => (
            <ChannelCard key={channel.id}>
              <ChannelHeader>
                <ChannelAvatar src={channel.avatar} alt={channel.name} />
                <ChannelInfo>
                  <ChannelName>{channel.name}</ChannelName>
                  <ChannelHandle>{channel.handle}</ChannelHandle>
                </ChannelInfo>
                <JoinButton>Join</JoinButton>
              </ChannelHeader>
              <PhotoCollage>
                {channel.images.map((img, index) => (
                  <CollageImage 
                    key={index} 
                    src={img} 
                    alt="" 
                    style={{ zIndex: channel.images.length - index }}
                  />
                ))}
              </PhotoCollage>
              <ChannelMembers>
                <MemberIcon>👥</MemberIcon> {channel.members} members
              </ChannelMembers>
            </ChannelCard>
          ))}
        </ChannelsList>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Who to follow</SectionTitle>
          <MoreHorizontal size={16} color="#6c757d" />
        </SectionHeader>

        <SuggestionsList>
          {suggestions.map(user => (
            <UserSuggestion key={user.id}>
              <UserAvatar src={user.avatar} alt={user.name} />
              <UserDetailsContainer>
                <SuggestionUserName>{user.name}</SuggestionUserName>
                <UserHandle>{user.username}</UserHandle>
              </UserDetailsContainer>
              <FollowButton>Follow</FollowButton>
            </UserSuggestion>
          ))}
        </SuggestionsList>
      </SectionContainer>

      <AppFooter>
        <FooterLinks>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Cookie Notice</FooterLink>
          <FooterLink>Terms of Service</FooterLink>
        </FooterLinks>
      </AppFooter>
    </RightSidebarContainer>
  );
};

export default RightSidebarComponent;

// Styled Components
const RightSidebarContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 1.5rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: #f8f9fa;
  border-left: 1px solid #e9ecef;

  @media (max-width: 1200px) {
    max-width: 300px;
    padding: 1rem;
  }

  @media (max-width: 992px) {
    position: relative;
    max-width: 100%;
    height: auto;
    border-left: none;
    border-top: 1px solid #e9ecef;
    padding: 1.5rem;
    order: 2;
  }

  @media (max-width: 576px) {
    padding: 1rem;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ced4da;
    border-radius: 3px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    margin-bottom: 1.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid #e9ecef;
  background-color: white;
  outline: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }

  @media (max-width: 576px) {
    padding: 0.625rem 1rem 0.625rem 2.25rem;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
`;

const SectionContainer = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  @media (max-width: 992px) {
    padding: 1rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 576px) {
    border-radius: 0.75rem;
    padding: 1rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #212529;
  margin: 0;
`;

const ChannelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const ChannelCard = styled.div`
  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #f1f3f5;
  }
`;

const ChannelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.875rem;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const ChannelAvatar = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 576px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const ChannelInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChannelName = styled.div`
  font-weight: 700;
  font-size: 0.9375rem;
  color: #212529;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChannelHandle = styled.div`
  font-size: 0.8125rem;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JoinButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 1rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.8125rem;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2563eb;
  }

  @media (max-width: 576px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }
`;

const PhotoCollage = styled.div`
  display: flex;
  position: relative;
  height: 5.25rem;
  margin: 0.75rem 0;

  @media (max-width: 576px) {
    height: 4.5rem;
  }
`;

const CollageImage = styled.img`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 0.5rem;
  object-fit: cover;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(2) {
    left: 1.5rem;
  }
  &:nth-child(3) {
    left: 3rem;
  }

  @media (max-width: 576px) {
    width: 4.5rem;
    height: 4.5rem;

    &:nth-child(2) {
      left: 1.25rem;
    }
    &:nth-child(3) {
      left: 2.5rem;
    }
  }
`;

const ChannelMembers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: #6c757d;
`;

const MemberIcon = styled.span`
  font-size: 0.875rem;
`;

const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 576px) {
    gap: 0.875rem;
  }
`;

const UserSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const UserAvatar = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 576px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const UserDetailsContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

const SuggestionUserName = styled.div`
  font-weight: 700;
  font-size: 0.9375rem;
  color: #212529;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserHandle = styled.div`
  font-size: 0.8125rem;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FollowButton = styled.button`
  background: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 1rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.8125rem;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f7ff;
  }

  @media (max-width: 576px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }
`;

const AppFooter = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  row-gap: 0.5rem;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: #6c757d;
  font-size: 0.75rem;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`;