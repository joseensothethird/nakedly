import React, { useState, useEffect } from 'react';
import { 
  useNavigate, 
  useLocation,
  Routes,
  Route
} from 'react-router-dom';
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
  X,
  Menu,
  Settings
} from 'react-feather';

// Import feed components
import HomeFeed from "../Components/Sections/Feeds-Content/HomeFeeds";
import NotificationsFeed from "../Components/Sections/Feeds-Content/NotificationsFeed";
import MessagesFeed from '../Components/Sections/Feeds-Content/MessagesFeed';
import CollectionsFeed from '../Components/Sections/Feeds-Content/CollectionsFeed';
import SubscriptionsFeed from '../Components/Sections/Feeds-Content/SubscriptionsFeed';
import AddCardFeed from '../Components/Sections/Feeds-Content/Add_Card';
import ProfileFeed from '../Components/Sections/Feeds-Content/ProfileFeed';
import SettingsFeed from '../Components/Sections/Feeds-Content/SettingsFeed';


// Import styled components
import { 
  AppContainer, 
  LeftSidebar, 
  Logo, 
  Nav, 
  NavItem, 
  NewPostButton, 
  MainFeedContainer, 
  FeedHeader, 
  RightSidebar, 
  SearchContainer, 
  SearchInput, 
  SearchIcon, 
  SuggestionsHeader, 
  UserSuggestion, 
  UserAvatar, 
  UserDetailsContainer, 
  SuggestionUserName, 
  UserHandle, 
  FollowButton, 
  AppFooter, 
  FooterLink,
  MobileHeader,
  MobileMenuButton,
  MobileSidebarOverlay,
  MobileLeftSidebar
} from '../Components/styles/pages/feeds';

const SocialMediaApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Determine active tab from URL
  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.startsWith('/nakedly/notifications')) return 'Notifications';
    if (path.startsWith('/nakedly/messages')) return 'Messages';
    if (path.startsWith('/nakedly/collections')) return 'Collections';
    if (path.startsWith('/nakedly/subscriptions')) return 'Subscriptions';
    if (path.startsWith('/nakedly/add-card')) return 'Add card';
    if (path.startsWith('/nakedly/profile')) return 'My profile';
    if (path.startsWith('/nakedly/settings')) return 'Settings';
    return 'Home'; // Default to home
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update active tab when route changes
  useEffect(() => {
    setActiveTab(getActiveTabFromPath());
  }, [location.pathname]);

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setShowMobileSidebar(false);
    }
    
    // Navigate to the corresponding route
    switch(tab) {
      case 'Home':
        navigate('/nakedly');
        break;
      case 'Notifications':
        navigate('/nakedly/notifications');
        break;
      case 'Messages':
        navigate('/nakedly/messages');
        break;
      case 'Collections':
        navigate('/nakedly/collections');
        break;
      case 'Subscriptions':
        navigate('/nakedly/subscriptions');
        break;
      case 'Add card':
        navigate('/nakedly/add-card');
        break;
      case 'My profile':
        navigate('/nakedly/profile');
        break;
      case 'Settings':
        navigate('/nakedly/settings');
        break;
      default:
        navigate('/nakedly');
    }
  };

  return (
    <AppContainer>
      {/* Left Sidebar - Desktop */}
      {!isMobile && (
        <LeftSidebar>
          <Logo>
            <img style={{height:'32px'}} src="/logo/nakedly.png" alt="Logo" />
          </Logo>
          
          <Nav>
            <NavItem active={activeTab === 'Home'} onClick={() => handleTabChange('Home')}>
              <Home size={20} />
              <span>Home</span>
            </NavItem>
            <NavItem active={activeTab === 'Notifications'} onClick={() => handleTabChange('Notifications')}>
              <Bell size={20} />
              <span>Notifications</span>
            </NavItem>
            <NavItem active={activeTab === 'Messages'} onClick={() => handleTabChange('Messages')}>
              <MessageCircle size={20} />
              <span>Messages</span>
            </NavItem>
            <NavItem active={activeTab === 'Collections'} onClick={() => handleTabChange('Collections')}>
              <Bookmark size={20} />
              <span>Collections</span>
            </NavItem>
            <NavItem active={activeTab === 'Subscriptions'} onClick={() => handleTabChange('Subscriptions')}>
              <Users size={20} />
              <span>Subscriptions</span>
            </NavItem>
            <NavItem active={activeTab === 'Add card'} onClick={() => handleTabChange('Add card')}>
              <CreditCard size={20} />
              <span>Add card</span>
            </NavItem>
            <NavItem active={activeTab === 'My profile'} onClick={() => handleTabChange('My profile')}>
              <User size={20} />
              <span>My profile</span>
            </NavItem>
            <NavItem active={activeTab === 'Settings'} onClick={() => handleTabChange('Settings')}>
              <Settings size={20} />
              <span>Settings</span>
            </NavItem>
          </Nav>
          
          <NewPostButton>
            <Plus size={20} />
            <span>NEW POST</span>
          </NewPostButton>
        </LeftSidebar>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <MobileHeader>
          <MobileMenuButton onClick={() => setShowMobileSidebar(!showMobileSidebar)}>
            {showMobileSidebar ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
          <h1>{activeTab.toUpperCase()}</h1>
          <div style={{width: '24px'}}></div> {/* Spacer for alignment */}
        </MobileHeader>
      )}

      {/* Mobile Sidebar Overlay */}
      {isMobile && showMobileSidebar && (
        <MobileSidebarOverlay onClick={() => setShowMobileSidebar(false)}>
          <MobileLeftSidebar onClick={(e) => e.stopPropagation()}>
            <Logo>
              <img style={{height:'32px'}} src="/logo/nakedly.png" alt="Logo" />
            </Logo>
            
            <Nav>
              <NavItem active={activeTab === 'Home'} onClick={() => handleTabChange('Home')}>
                <Home size={20} />
                <span>Home</span>
              </NavItem>
              <NavItem active={activeTab === 'Notifications'} onClick={() => handleTabChange('Notifications')}>
                <Bell size={20} />
                <span>Notifications</span>
              </NavItem>
              <NavItem active={activeTab === 'Messages'} onClick={() => handleTabChange('Messages')}>
                <MessageCircle size={20} />
                <span>Messages</span>
              </NavItem>
              <NavItem active={activeTab === 'Collections'} onClick={() => handleTabChange('Collections')}>
                <Bookmark size={20} />
                <span>Collections</span>
              </NavItem>
              <NavItem active={activeTab === 'Subscriptions'} onClick={() => handleTabChange('Subscriptions')}>
                <Users size={20} />
                <span>Subscriptions</span>
              </NavItem>
              <NavItem active={activeTab === 'Add card'} onClick={() => handleTabChange('Add card')}>
                <CreditCard size={20} />
                <span>Add card</span>
              </NavItem>
              <NavItem active={activeTab === 'My profile'} onClick={() => handleTabChange('My profile')}>
                <User size={20} />
                <span>My profile</span>
              </NavItem>
              <NavItem active={activeTab === 'Settings'} onClick={() => handleTabChange('Settings')}>
                <Settings size={20} />
                <span>Settings</span>
              </NavItem>
            </Nav>
            
            <NewPostButton>
              <Plus size={20} />
              <span>NEW POST</span>
            </NewPostButton>
          </MobileLeftSidebar>
        </MobileSidebarOverlay>
      )}                                               

      {/* Main Feed */}
      <MainFeedContainer>
        {!isMobile && (
          <FeedHeader>
            <h1>{activeTab.toUpperCase()}</h1>
            <MoreVertical size={20} />
          </FeedHeader>
        )}
        
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/notifications" element={<NotificationsFeed />} />
          <Route path="/messages" element={<MessagesFeed />} />
          <Route path="/collections" element={<CollectionsFeed />} />
          <Route path="/subscriptions" element={<SubscriptionsFeed />} />
          <Route path="/add-card" element={<AddCardFeed />} />
          <Route path="/profile" element={<ProfileFeed />} />
          <Route path="/settings" element={<SettingsFeed />} />
        </Routes>
      </MainFeedContainer>

      {/* Right Sidebar - Desktop */}
      {!isMobile && (
        <RightSidebar>
          <SearchContainer>
            <SearchInput placeholder="Search posts" />
            <SearchIcon size={18} />
          </SearchContainer>

          <SuggestionsHeader>
            <h2>SUGGESTIONS</h2>
            <MoreHorizontal size={16} />
          </SuggestionsHeader>

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

          <AppFooter>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Cookie Notice</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
          </AppFooter>
        </RightSidebar>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <LeftSidebar as="footer">
          <Nav>
            <NavItem active={activeTab === 'Home'} onClick={() => handleTabChange('Home')}>
              <Home size={20} />
              <span>Home</span>
            </NavItem>
            <NavItem active={activeTab === 'Notifications'} onClick={() => handleTabChange('Notifications')}>
              <Bell size={20} />
              <span>Notifications</span>
            </NavItem>
            <NavItem active={activeTab === 'Messages'} onClick={() => handleTabChange('Messages')}>
              <MessageCircle size={20} />
              <span>Messages</span>
            </NavItem>
            <NavItem active={activeTab === 'My profile'} onClick={() => handleTabChange('My profile')}>
              <User size={20} />
              <span>Profile</span>
            </NavItem>
          </Nav>
        </LeftSidebar>
      )}
    </AppContainer>
  );
};

export default SocialMediaApp;