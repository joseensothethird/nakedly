import styled from 'styled-components';
import { 
  Home, 
  Bell, 
  MessageCircle, 
  Bookmark, 
  Users, 
  CreditCard, 
  User, 
  MoreHorizontal,
  Plus,
  Search,
  MoreVertical,
  CheckCircle,
  Heart,
  MessageSquare,
  Send
} from 'react-feather';

// Breakpoints
const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px'
};

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr 320px;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;

  @media (max-width: ${breakpoints.large}) {
    grid-template-columns: 80px 1fr 280px;
  }

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr; // Changed from 60px 1fr to just 1fr
  }
`;

export const LeftSidebar = styled.div`
  background-color: white;
  border-right: 1px solid #e9ecef;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 100;

  @media (max-width: ${breakpoints.large}) {
    padding: 12px;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px;
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;

  img {
    height: 32px;
    width: auto;
  }

  @media (max-width: ${breakpoints.large}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-bottom: 15px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.active ? '#3b82f6' : '#495057'};
  background-color: ${props => props.active ? '#f0f7ff' : 'transparent'};
  font-weight: ${props => props.active ? '600' : 'normal'};
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  svg {
    stroke-width: ${props => props.active ? '2.5' : '2'};
  }

  span {
    @media (max-width: ${breakpoints.large}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px;
    justify-content: center;
  }
`;

export const NewPostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    background-color: #2563eb;
  }

  span {
    @media (max-width: ${breakpoints.large}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const MainFeedContainer = styled.div`
  background-color: white;
  border-right: 1px solid #e9ecef;
  min-width: auto;
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
 
  
  @media (max-width: ${breakpoints.large}) {
    min-width: auto; 
    padding: 5%;
  }
`;

export const ScrollableFeed = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-bottom: 20px;
`;



export const Post = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e9ecef;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color:black;
  
  svg {
    color: #3b82f6;
    flex-shrink: 0;
  }
`;



export const UserDetails = styled.div`
  font-size: 14px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostContent = styled.div`
  margin-bottom: 16px;
`;

export const PostText = styled.p`
  margin-bottom: 8px;
  line-height: 1.5;
  word-break: break-word;
  color:black;
`;

export const Mention = styled.span`
  color: #3b82f6;
`;

export const PostLink = styled.div`
  color: #3b82f6;
  font-size: 14px;
  word-break: break-all;
`;

export const PostImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
`;

export const LocationBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

export const LiveIndicator = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 12px;
  height: 12px;
  background-color: #ef4444;
  border-radius: 50%;
  border: 2px solid white;
`;

export const PostActions = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 12px;
  border-top: 1px solid #e9ecef;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    color: #3b82f6;
  }
`;

export const RightSidebar = styled.div`
  background-color: white;
  padding: 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;
export const MobileNavItemText = styled.span`
  font-size: 0.95rem;
  margin-left: 10px;
`;
export const NewPostContainer = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e9ecef;
  background-color: white;
`;

export const NewPostTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  font-size: 16px;
  padding: 12px;
  border-radius: 8px;
  background-color: #f8f9fa;
  min-height: 80px;
  margin-left: 12px;

  &:focus {
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 2px #3b82f6;
  }
`;

export const NewPostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-left: 52px;
`;

export const NewPostActionButton = styled.button`
  background: none;
  border: none;
  color: #3b82f6;
  cursor: pointer;
  margin-right: 12px;
  padding: 4px;

  &:hover {
    color: #2563eb;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #e9ecef;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.disabled ? '#adb5bd' : '#495057'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover {
    background-color: ${props => props.disabled ? 'white' : '#f8f9fa'};
  }
`;

export const PaginationPageNumber = styled.button`
  padding: 8px 12px;
  border: 1px solid ${props => props.active ? '#3b82f6' : '#e9ecef'};
  background-color: ${props => props.active ? '#f0f7ff' : 'white'};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.active ? '#3b82f6' : '#495057'};
  font-weight: ${props => props.active ? '600' : 'normal'};

  &:hover {
    background-color: #f8f9fa;
  }
`;

// Right Sidebar Styles
export const RightSidebarContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 1200px) {
    max-width: 300px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const SectionContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #495057;
    margin: 0;
  }
`;
export const SuggestionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #495057;
    margin: 0;
    text-transform: uppercase;
  }
`;
export const ChannelCard = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f3f5;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ChannelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const ChannelAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChannelInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ChannelName = styled.div`
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChannelHandle = styled.div`
  font-size: 13px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const JoinButton = styled.button`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

export const PhotoCollage = styled.div`
  display: flex;
  position: relative;
  height: 80px;
  margin: 12px 0;
`;

export const CollageImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  position: absolute;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(2) {
    left: 20px;
  }
  &:nth-child(3) {
    left: 40px;
  }
`;

export const ChannelMembers = styled.div`
  font-size: 13px;
  color: #6c757d;
`;

// Reused styles from your original component
export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 16px 10px 40px;
  border-radius: 20px;
  border: 1px solid #e9ecef;
  background-color: #f8f9fa;
  outline: none;
  
  &:focus {
    background-color: white;
    border-color: #3b82f6;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
`;

export const UserSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserDetailsContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SuggestionUserName = styled.div`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserHandle = styled.div`
  font-size: 14px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FollowButton = styled.button`
  background: none;
  border: 1px solid #e9ecef;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const AppFooter = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e9ecef;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: #6c757d;
  font-size: 12px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
/**/


/*2.Notifications*/

export const NotificationsContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 16px;
  background:rgb(255, 255, 255);
  color: #ffffff;

  .notifications-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #333;

    h2 {
      margin: 0;
      font-size: 20px;
    }

    .mark-all-read {
      background: transparent;
      color: #ff4d4f;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
      .notification-actions {
  position: relative;
  
  .more-options {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    padding: 4px;
    margin-left: 8px;
    
    &:hover {
      color: #fff;
    }
  }
`;

export const NotificationCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  border-left: ${props => props.unread ? '3px solid #ff4d4f' : 'none'};
  transition: all 0.3s ease;

  &:hover {
    background:rgb(0, 115, 255);
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const CreatorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 18px;
`;

export const CreatorInfo = styled.div`
  flex-grow: 1;
`;

export const CreatorName = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color:black;
`;

export const NotifMeta = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 4px;
  display: flex;
  gap: 8px;

  .price {
    color: #52c41a;
    font-weight: bold;
  }
`;

export const NotifBody = styled.div`
  margin-top: 12px;
  margin-left: 60px;
`;

export const NotifMessage = styled.div`
  margin: 4px 0;
  font-size: 14px;
  color: #000;
`;

export const NotifTime = styled.span`
  color: #777;
`;

export const NotifButton = styled.button`
  background: ${props => props.primary ? '#ff4d4f' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#ff4d4f'};
  border: ${props => props.primary ? 'none' : '1px solid #ff4d4f'};
  border-radius: 20px;
  padding: 6px 12px;
  margin-right: 8px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.primary ? '#ff7875' : 'rgba(255, 77, 79, 0.1)'};
  }
`;

export const ContentPreview = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border: 1px solid #333;
`;

export const NotifButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
export const DropdownMenu = styled.div`
  position: absolute;
  right: 20px;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  min-width: 180px;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #333;
  }
`;
/*3.Message Page */
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`;

export const MessageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const MessageSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;

  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 8px 10px;
    margin-left: 10px;
    outline: none;
  }
`;

export const MessageConversationList = styled.div`
  flex: 1;
  overflow-y: auto;
  border-right: 1px solid #eee;
`;

export const MessageConversationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f9f9f9;
  }
`;

export const MessageAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.online ? '#4CAF50' : '#ccc'};
    border: 2px solid white;
  }
`;

export const MessageUserInfo = styled.div`
  margin-left: 15px;
  flex: 1;
`;

export const MessageUserName = styled.h4`
  font-weight: 700;
  margin-bottom: 3px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MessagePreviewText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  margin: 0;
`;

export const MessageTimestamp = styled.span`
  font-size: 0.8rem;
  color: #6c757d;
`;

export const MessageUnreadCount = styled.span`
  display: inline-block;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 0.7rem;
  line-height: 20px;
  margin-top: 5px;
`;

export const MessagePanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #eee;
`;

export const MessageComposer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #eee;
  background: #f5f5f5;
`;

export const MessageInputField = styled.input`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 0 10px;
  outline: none;
`;

export const MessageActionButton = styled.button`
  background: transparent;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #3b82f6;
  }
`;

export const MessageSendButton = styled.button`
  background: #3b82f6;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  
  &:hover {
    background: #2563eb;
  }
`;
/*4. Collection*/

// Styled Components
export const CollectionGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
  position: relative;
`;

export const CollectionGalleryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

export const CollectionHeaderActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const CollectionActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  &.collection-pinned {
    color: #3b82f6;
  }

  &.collection-saved {
    color: #3b82f6;
  }

  &.collection-delete-btn {
    color: #ff4d4f;
  }
`;

export const CollectionSortMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 10;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CollectionSortOption = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #f5f5f5;
  }

  &.collection-active {
    background: #f0f7ff;
    color: #3b82f6;
  }
`;

export const CollectionGallerySearch = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;

  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 8px 12px;
    margin-left: 8px;
    outline: none;
    font-size: 14px;
  }
`;

export const CollectionAlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
`;

export const CollectionAlbumCard = styled.div`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  position: relative;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
  }

  &.collection-pinned {
    border: 1px solid #3b82f6;
  }
`;

export const CollectionAlbumCover = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CollectionEmptyAlbum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 14px;
`;

export const CollectionAlbumOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 6px;
  text-align: center;
  font-size: 12px;
`;

export const CollectionAlbumTopActions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  z-index: 2;
`;

export const CollectionPinButton = styled.button`
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  &.collection-pinned {
    background: #3b82f6;
  }
`;

export const CollectionDeleteButton = styled.button`
  background: rgba(255,255,255,0.8);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff4d4f;
  cursor: pointer;
`;

export const CollectionAlbumCreator = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
`;

export const CollectionCreatorAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
`;

export const CollectionCreatorName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Modal Components
export const CollectionAlbumModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const CollectionModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

export const CollectionCloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
`;

export const CollectionModalCreatorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  margin: 0 16px;
`;

export const CollectionModalCreatorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
`;

export const CollectionModalActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const CollectionMediaViewer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  background: #000;
`;

export const CollectionEmptyAlbumMessage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  gap: 16px;
`;

export const CollectionAddMediaButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
`;

export const CollectionMainMedia = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  video {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CollectionNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.2);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
  cursor: pointer;

  &.collection-prev-btn {
    left: 16px;
  }

  &.collection-next-btn {
    right: 16px;
  }
`;

export const CollectionMediaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #eee;
`;

export const CollectionMediaCounter = styled.div`
  font-size: 14px;
  color: #666;
`;

export const CollectionMediaActions = styled.div`
  display: flex;
  gap: 20px;
`;

export const CollectionThumbnailStrip = styled.div`
  display: flex;
  padding: 12px;
  gap: 8px;
  overflow-x: auto;
  background: #f5f5f5;
`;

export const CollectionThumbnail = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;

  &.collection-active {
    border-color: #3b82f6;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CollectionVideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
  }
`;
/*6. Card*/
export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const PaymentHeader = styled.div`
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const PaymentTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const PaymentSection = styled.section`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 20px;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

export const PaymentMethod = styled.div`
  margin-bottom: 12px;
  width: 100%;
`;

export const MethodCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: #9CA3AF;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const MethodDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const MethodIcon = styled.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  background: #F3F4F6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4B5563;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
  }
`;

export const MethodInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const MethodName = styled.span`
  font-weight: 500;
  color: #1F2937;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MethodAction = styled.div`
  color: #9CA3AF;
  flex-shrink: 0;
`;

export const AddMethodButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 1px dashed #D1D5DB;
  border-radius: 8px;
  color: #4B5563;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    border-color: #9CA3AF;
    background: #F9FAFB;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`;

export const EarningsSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EarningsCard = styled.div`
  background: #F9FAFB;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const EarningsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6B7280;
  font-size: 14px;
  margin-bottom: 12px;
  width: 100%;
`;

export const EarningsAmount = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 4px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const EarningsLabel = styled.div`
  font-size: 14px;
  color: #6B7280;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const EarningsBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const BreakdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;
  width: 100%;

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const BreakdownLabel = styled.span`
  color: #6B7280;
  white-space: nowrap;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BreakdownValue = styled.span`
  font-weight: 500;
  color: #1F2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TransactionHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;
  width: 100%;

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const TransactionIcon = styled.div`
  margin-right: 16px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    margin-right: 12px;
  }
`;

export const TransactionDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TransactionName = styled.div`
  font-weight: 500;
  color: #1F2937;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TransactionDate = styled.div`
  font-size: 12px;
  color: #6B7280;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const TransactionAmount = styled.div`
  font-weight: 500;
  color: ${props => props.positive ? '#10B981' : '#EF4444'};
  margin-left: 10px;
  white-space: nowrap;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  width: 100%;

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const EmptyStateIcon = styled.div`
  margin-bottom: 16px;
  color: #9CA3AF;

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`;

export const EmptyStateText = styled.p`
  color: #6B7280;
  font-size: 16px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TransactionControls = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 15px;
  }
`;

export const CardSearchInput = styled.div`
  display: flex;
  align-items: center;
  background: #F3F4F6;
  border-radius: 8px;
  padding: 8px 12px;
  width: 200px;

  input {
    border: none;
    background: transparent;
    margin-left: 8px;
    width: 100%;
    outline: none;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }

  @media (max-width: 480px) {
    input {
      font-size: 13px;
    }
  }
`;

export const FilterButton = styled.button`
  background: #F3F4F6;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

export const ExportButton = styled.button`
  background: #F3F4F6;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  font-size: 14px;

  &:hover {
    background: #E5E7EB;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

export const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 15px;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 15px;
  }
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #E5E7EB;
  background: ${props => props.active ? '#E5E7EB' : 'white'};
  border-radius: 4px;
  cursor: pointer;
  min-width: 40px;
  font-size: 14px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    min-width: 36px;
    font-size: 13px;
  }
`;

export const TransactionTypeFilter = styled.div`
  select {
    padding: 8px 12px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    background: #F3F4F6;
    cursor: pointer;
    font-size: 14px;

    @media (max-width: 480px) {
      font-size: 13px;
      padding: 6px 10px;
    }
  }
`;