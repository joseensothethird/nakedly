import styled from 'styled-components';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { 
  Home, 
  Bell, 
  MessageCircle, 
  Bookmark, 
  Users, 
  CreditCard, 
  User, 
  Settings
} from 'react-feather';
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
  MobileNavText,
  MobileNavItemText
} from '../styles/components';

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  // Check if we're on a NewsFeed subpage
  const isNewsFeedPage = location.pathname.startsWith('/nakedly');

  return (
    <StickyNavigation>
      <Navigation>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <LogoLink to="/">
          <LogoImage src="/logo/nakedly.png" alt="Nakedly logo" />
          Nakedly
        </LogoLink>

        {isNewsFeedPage ? (
          // NewsFeed specific navigation
          <NavLinks>
            <NavItem
              to="/nakedly"
              active={activeItem === 'home' ? 1 : 0}
              onClick={() => setActiveItem('home')}
            >
              Home
            </NavItem>
            <NavItem
              to="/nakedly/notifications"
              active={activeItem === 'notifications' ? 1 : 0}
              onClick={() => setActiveItem('notifications')}
            >
              Notifications
            </NavItem>
            <NavItem
              to="/nakedly/messages"
              active={activeItem === 'messages' ? 1 : 0}
              onClick={() => setActiveItem('messages')}
            >
              Messages
            </NavItem>
            <NavItem
              to="/nakedly/collections"
              active={activeItem === 'collections' ? 1 : 0}
              onClick={() => setActiveItem('collections')}
            >
              Collections
            </NavItem>
            <NavItem
              to="/nakedly/subscriptions"
              active={activeItem === 'subscriptions' ? 1 : 0}
              onClick={() => setActiveItem('subscriptions')}
            >
              Subscriptions
            </NavItem>
          </NavLinks>
        ) : (
          // Regular navigation
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
          <LoginButton as={Link} to="/role-selection">Login</LoginButton>
        </RightContainer>

        <MobileMenu isOpen={isMenuOpen}>
          <SearchInput type="text" placeholder="Search..." />

          {isNewsFeedPage ? (
            // Mobile NewsFeed specific navigation with icons
            <>
              <MobileNavItem
                to="/nakedly"
                active={activeItem === 'home' ? 1 : 0}
                onClick={() => handleNavClick('home')}
              >
                <MobileNavIcon><Home size={20} /></MobileNavIcon>
                <MobileNavText>NewsFeed</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/notifications"
                active={activeItem === 'notifications' ? 1 : 0}
                onClick={() => handleNavClick('notifications')}
              >
                <MobileNavIcon><Bell size={20} /></MobileNavIcon>
                <MobileNavText>Notifications</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/messages"
                active={activeItem === 'messages' ? 1 : 0}
                onClick={() => handleNavClick('messages')}
              >
                <MobileNavIcon><MessageCircle size={20} /></MobileNavIcon>
                <MobileNavText>Messages</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/collections"
                active={activeItem === 'collections' ? 1 : 0}
                onClick={() => handleNavClick('collections')}
              >
                <MobileNavIcon><Bookmark size={20} /></MobileNavIcon>
                <MobileNavText>Collections</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/subscriptions"
                active={activeItem === 'subscriptions' ? 1 : 0}
                onClick={() => handleNavClick('subscriptions')}
              >
                <MobileNavIcon><Users size={20} /></MobileNavIcon>
                <MobileNavText>Subscriptions</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/card"
                active={activeItem === 'card' ? 1 : 0}
                onClick={() => handleNavClick('card')}
              >
                <MobileNavIcon><CreditCard size={20} /></MobileNavIcon>
                <MobileNavText>Cards</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/profile"
                active={activeItem === 'profile' ? 1 : 0}
                onClick={() => handleNavClick('profile')}
              >
                <MobileNavIcon><User size={20} /></MobileNavIcon>
                <MobileNavText>Profile</MobileNavText>
              </MobileNavItem>
              <MobileNavItem
                to="/nakedly/settings"
                active={activeItem === 'settings' ? 1 : 0}
                onClick={() => handleNavClick('settings')}
              >
                <MobileNavIcon><Settings size={20} /></MobileNavIcon>
                <MobileNavText>Settings</MobileNavText>
              </MobileNavItem>
            </>
          ) : (
            // Mobile regular navigation
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
                <MobileNavIcon><Users size={20} /></MobileNavIcon>
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

          <MobileLoginButton as={Link} to="/role-selection">Login</MobileLoginButton>
        </MobileMenu>
      </Navigation>
    </StickyNavigation>
  );
};

export default Navbar;MobileNavItemText