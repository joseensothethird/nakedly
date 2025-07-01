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
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Cookie Notice</FooterLink>
        <FooterLink>Terms of Service</FooterLink>
      </AppFooter>
    </RightSidebarContainer>
  );
};

export default RightSidebarComponent;

// Styled Components
const RightSidebarContainer = styled.div`
  width: auto;
  padding: 24px 16px;
  position: sticky;
  top: 0;
  height: auto;
  overflow-y: auto;
  background-color:rgb(255, 255, 255);

  @media (max-width: 1200px) {
    width: 280px;
  }

  @media (max-width: 992px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dee2e6;
    border-radius: 4px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 42px;
  border-radius: 24px;
  border: 1px solid #e9ecef;
  background-color: white;
  outline: none;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
`;

const SectionContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #212529;
  margin: 0;
`;

const ChannelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ChannelCard = styled.div`
  &:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f3f5;
  }
`;

const ChannelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

const ChannelAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ChannelInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChannelName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #212529;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChannelHandle = styled.div`
  font-size: 13px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JoinButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 6px 14px;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2563eb;
  }
`;

const PhotoCollage = styled.div`
  display: flex;
  position: relative;
  height: 84px;
  margin: 12px 0;
`;

const CollageImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 8px;
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
    left: 24px;
  }
  &:nth-child(3) {
    left: 48px;
  }
`;

const ChannelMembers = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6c757d;
`;

const MemberIcon = styled.span`
  font-size: 14px;
`;

const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const UserSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

const UserAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const UserDetailsContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

const SuggestionUserName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #212529;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserHandle = styled.div`
  font-size: 13px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FollowButton = styled.button`
  background: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 16px;
  padding: 6px 14px;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f7ff;
  }
`;

const AppFooter = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #6c757d;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`;