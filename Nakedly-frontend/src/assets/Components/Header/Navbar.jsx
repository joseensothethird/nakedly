import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {StickyNavigation,Navigation, NavLinks, MobileMenu, NavItem, SearchInput,DesktopSearch, RightContainer,LogoLink, LogoImage,LoginButton,MobileLoginButton,MenuButton,
} from '../styles/components';


const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return ( <StickyNavigation>
    <Navigation>
      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

  <LogoLink to="/">
  <LogoImage src="/logo/nakedly.png" alt="Nakedly logo" />
  Nakedly
</LogoLink>



      <NavLinks>
        <NavItem
          to="/"
          active={activeItem === 'home' ? 1 : 0}
          onClick={() => setActiveItem('home')}
        >
          Feed
        </NavItem>
        <NavItem
          to="/models"
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

      <RightContainer>
        <DesktopSearch type="text" placeholder="Search..." />
        <LoginButton as={Link} to="/role-selection">Login</LoginButton>
      </RightContainer>

      <MobileMenu isOpen={isMenuOpen}>
        <SearchInput type="text" placeholder="Search..." />

        <NavItem
          to="/"
          active={activeItem === 'home' ? 1 : 0}
          onClick={() => handleNavClick('home')}
        >
          Feed
        </NavItem>
        <NavItem
          to="/models"
          active={activeItem === 'models' ? 1 : 0}
          onClick={() => handleNavClick('models')}
        >
          Models
        </NavItem>
        <NavItem
          to="/contact-us"
          active={activeItem === 'contact' ? 1 : 0}
          onClick={() => handleNavClick('contact')}
        >
          Contact Us
        </NavItem>

        <MobileLoginButton as={Link} to="/role-selection">Login</MobileLoginButton>
      </MobileMenu>
    </Navigation> 
    </StickyNavigation>
  );
};

export default Navbar;