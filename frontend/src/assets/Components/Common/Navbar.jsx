import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Home, MessageCircle, Bell, Bookmark, Users, CreditCard, User, Settings } from 'react-feather';
import { AuthContext } from '../context/AuthContext';
import {
  StickyNavigation,
  Navigation,
  NavLinks,
  MobileMenu,
  NavItem,
  SearchInput,
  DesktopSearch,
  RightContainer,
  LogoLink,
  LogoImage,
  LoginButton,
  MobileLoginButton,
  MenuButton,
  MobileNavItem,
  MobileNavIcon,
  MobileNavText
} from '../styles/components';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('home');
  const [activeTab, setActiveTab] = useState('Notifications');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get authentication state from context
  const { user, logout } = useContext(AuthContext);
  const isLoggedIn = !!user;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  // Check if we're on a NewsFeed subpage
  const isNewsFeedPage = location.pathname.startsWith('/nakedly');

  return (
    <StickyNavigation>
      <Navigation>
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <LogoLink to="/">
          <LogoImage src="/logo/nakedly.png" alt="Nakedly logo" />
          Nakedly
        </LogoLink>

        {isNewsFeedPage ? (
          <NavLinks>
            <NavItem
              to="/nakedly"
              active={activeItem === 'home' ? 1 : 0}
              onClick={() => setActiveItem('home')}
            >
              Home
            </NavItem>
          </NavLinks>
        ) : (
          <NavLinks>
            <NavItem
              to="/"
              active={activeItem === 'home' ? 1 : 0}
              onClick={() => setActiveItem('home')}
            >
              Feed
            </NavItem>
            <NavItem
              to="/creator"
              active={activeItem === 'models' ? 1 : 0}
              onClick={() => setActiveItem('models')}
            >
              Models
            </NavItem>
            <NavItem
              to="/contact-us"
              active={activeItem === 'contact' ? 1 : 0}
              onClick={() => setActiveItem('contact')}
            >
              Contact Us
            </NavItem>
          </NavLinks>
        )}

        <RightContainer>
          <DesktopSearch type="text" placeholder="Search..." />
          {isLoggedIn ? (
            <LoginButton onClick={handleLogout}>Logout</LoginButton>
          ) : (
            <LoginButton as={Link} to="/role-selection">Login</LoginButton>
          )}
        </RightContainer>

        <MobileMenu isOpen={isMenuOpen}>
          <SearchInput type="text" placeholder="Search..." />

          {isNewsFeedPage ? (
            <>
              <MobileNavItem
                to="/nakedly"
                active={activeItem === 'home' ? 1 : 0}
                onClick={() => handleNavClick('home')}
              >
                <MobileNavIcon><Home size={20} /></MobileNavIcon>
                <MobileNavText>NewsFeed</MobileNavText>
              </MobileNavItem>
              
              {/* Additional mobile menu items */}
              {isLoggedIn && (
                <>
                  <MobileNavItem 
                    to="/nakedly/notifications"
                    active={activeTab === 'Notifications'} 
                    onClick={() => handleTabChange('Notifications')}
                  >
                    <MobileNavIcon><Bell size={20} /></MobileNavIcon>
                    <MobileNavText>Notifications</MobileNavText>
                  </MobileNavItem>
                  <MobileNavItem 
                    to="/nakedly/messages"
                    active={activeTab === 'Messages'} 
                    onClick={() => handleTabChange('Messages')}
                  >
                    <MobileNavIcon><MessageCircle size={20} /></MobileNavIcon>
                    <MobileNavText>Messages</MobileNavText>
                  </MobileNavItem>
                  <MobileNavItem 
                    to="/nakedly/collections"
                    active={activeTab === 'Collections'} 
                    onClick={() => handleTabChange('Collections')}
                  >
                    <MobileNavIcon><Bookmark size={20} /></MobileNavIcon>
                    <MobileNavText>Collections</MobileNavText>
                  </MobileNavItem>
                  <MobileNavItem 
                    to="/nakedly/subscriptions"
                    active={activeTab === 'Subscriptions'} 
                    onClick={() => handleTabChange('Subscriptions')}
                  >
                    <MobileNavIcon><Users size={20} /></MobileNavIcon>
                    <MobileNavText>Subscriptions</MobileNavText>
                  </MobileNavItem>
                  <MobileNavItem 
                    to="/nakedly/card"
                    active={activeTab === 'Card'} 
                    onClick={() => handleTabChange('Card')}
                  >
                    <MobileNavIcon><CreditCard size={20} /></MobileNavIcon>
                    <MobileNavText>Add card</MobileNavText>
                  </MobileNavItem>
                  <MobileNavItem 
                    to="/nakedly/profile"
                    active={activeTab === 'My profile'} 
                    onClick={() => handleTabChange('My profile')}
                  >
                    <MobileNavIcon><User size={20} /></MobileNavIcon>
                    <MobileNavText>My profile</MobileNavText>
                  </MobileNavItem>
                  <MobileNavItem 
                    to="/nakedly/settings"
                    active={activeTab === 'Settings'} 
                    onClick={() => handleTabChange('Settings')}
                  >
                    <MobileNavIcon><Settings size={20} /></MobileNavIcon>
                    <MobileNavText>Settings</MobileNavText>
                  </MobileNavItem>
                </>
              )}
            </>
          ) : (
            <>
              <MobileNavItem
                to="/"
                active={activeItem === 'home' ? 1 : 0}
                onClick={() => handleNavClick('home')}
              >
                <MobileNavIcon><Home size={20} /></MobileNavIcon>
                <MobileNavText>Feed</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/creator"
                active={activeItem === 'models' ? 1 : 0}
                onClick={() => handleNavClick('models')}
              >
                <MobileNavIcon><Home size={20} /></MobileNavIcon>
                <MobileNavText>Models</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/contact-us"
                active={activeItem === 'contact' ? 1 : 0}
                onClick={() => handleNavClick('contact')}
              >
                <MobileNavIcon><MessageCircle size={20} /></MobileNavIcon>
                <MobileNavText>Contact Us</MobileNavText>
              </MobileNavItem>
            </>
          )}

          {isLoggedIn ? (
            <MobileLoginButton onClick={handleLogout}>Logout</MobileLoginButton>
          ) : (
            <MobileLoginButton as={Link} to="/role-selection" onClick={() => setIsMenuOpen(false)}>
              Login
            </MobileLoginButton>
          )}
        </MobileMenu>
      </Navigation>
    </StickyNavigation>
  );
};

export default Navbar;