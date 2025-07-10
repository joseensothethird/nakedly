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
  MoreVertical,
  Settings
} from 'react-feather';

// Import feed components
import HomeFeed from "../Components/Sections/Feeds-Content/HomeFeeds";
import NotificationsFeed from "../Components/Sections/Feeds-Content/NotificationsFeed";
import MessagesFeed from "../Components/Sections/Feeds-Content/MessagesFeed";
import CollectionsFeed from "../Components/Sections/Feeds-Content/CollectionsFeed";
import SubscriptionsFeed from "../Components/Sections/Feeds-Content/SubscriptionsFeed";
import AddCardFeed from "../Components/Sections/Feeds-Content/Add_Card";
import ProfileFeed from "../Components/Sections/Feeds-Content/ProfileHead";
import SettingsFeed from "../Components/Sections/Feeds-Content/SettingsFeed";

// Import RightSidebar component
import RightSidebarComponent from '../Components/Sections/Feeds-Content/RightSidebar';

// Import styled components
import { 
  AppContainer, 
  LeftSidebar, 
  Logo, 
  Nav, 
  NavItem, 
  NewPostButton, 
  MainFeedContainer, 
  RightSidebar, 
  MobileNavItemText
} from '../Components/styles/pages/feeds';

const SocialMediaApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Determine active tab from URL
  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.startsWith('/nakedly/notifications')) return 'Notifications';
    if (path.startsWith('/nakedly/messages')) return 'Messages';
    if (path.startsWith('/nakedly/collections')) return 'Collections';
    if (path.startsWith('/nakedly/subscriptions')) return 'Subscriptions';
    if (path.startsWith('/nakedly/card')) return 'Card'; // Changed from 'card' to 'Card' to match the NavItem
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
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
      case 'Card': // Changed from 'Add card' to 'Card' to match the NavItem
        navigate('/nakedly/card');
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
      {/* Left Sidebar - Desktop (hidden on mobile) */}
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
            <NavItem active={activeTab === 'Card'} onClick={() => handleTabChange('Card')}> {/* Changed from 'Add card' to 'Card' */}
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
          
        
        </LeftSidebar>
      )}

      {/* Main Feed */}
      <MainFeedContainer>
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/notifications" element={<NotificationsFeed />} />
          <Route path="/messages" element={<MessagesFeed />} />
          <Route path="/collections" element={<CollectionsFeed />} />
          <Route path="/subscriptions" element={<SubscriptionsFeed />} />
          <Route path="/card" element={<AddCardFeed />} />
          <Route path="/profile" element={<ProfileFeed />} />
          <Route path="/settings" element={<SettingsFeed />} />
        </Routes>
      </MainFeedContainer>

      {/* Right Sidebar - Desktop (hidden on mobile) */}
      {!isMobile && (
        <RightSidebar>
          <RightSidebarComponent />
        </RightSidebar>
      )}
    </AppContainer>
  );
};

export default SocialMediaApp;