import styled from 'styled-components';
import { Link } from 'react-router-dom';
/*Navbar*/
export const Navigation = styled.nav`
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%; /* Add 5% left and right padding */
  position: relative;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const StickyNavigation = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: inherit;
`;

export const LogoLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #00aff0;
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px; /* space between image and text */
`;
export const LogoImage = styled.img`
  height: 40px;  /* adjust as needed */
  width: auto;
`;
export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: ${({ active }) => (active ? '#00aff0' : '#333')};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  text-decoration: none; /* Remove underline */
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;

  &:hover {
    background: #f2f2f2;
    color: #00aff0;       /* Optional: subtle hover color */
    text-decoration: none; /* Prevent underline on hover */
  }

  &:focus,
  &:active {
    outline: none;
    color: #00aff0;       /* Keep it blue instead of red */
    text-decoration: none;
  }
`;


export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DesktopSearch = styled.input`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
`;

export const LoginButton = styled.button`
  background: #00aff0;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background: #0099d8;
  }
`;

export const MobileLoginButton = styled(LoginButton)`
  width: 100%;
  margin-top: 20px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333;

  @media (min-width: 769px) {
    display: none;
  }

  /* Move to right */
  position: absolute;
  right: 16px;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  background: white;
  padding: 20px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
`;
/*Footer*/
export const footerStyles = {
  footerContainer: {
    backgroundColor: '#f5f5f5',
    color: '#000',
    padding: '40px 0 20px',
    fontFamily: "'Arial', sans-serif",
    marginTop: '40px'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0 20px'
  },
  footerLogoSection: {
    flex: '1 1 200px',
    marginBottom: '20px'
  },
  footerLogo: {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#00aff0',
  cursor: 'default',
  userSelect: 'none',
  marginBottom: '8px',
  display: 'flex',           // add flexbox
  alignItems: 'center',     // vertically center image + text
  gap: '8px',               // space between image and text
},
logoImage: {
  height: '32px',
  width: 'auto',
  display: 'block',
},

  footerDescription: {
    fontSize: '14px',
    color: '#000',
    lineHeight: '1.4',
    maxWidth: '280px'
  },
  footerLinks: {
    display: 'flex',
    gap: '60px'
  },
  linkColumn: {
    minWidth: '150px'
  },
  columnTitle: {
    fontSize: '16px',
    marginBottom: '15px',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  linkList: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  linkItem: {
    marginBottom: '12px',
    color: '#000'
  },
  footerLink: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'inline-block',
    transition: 'color 0.3s ease'
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '30px',
    marginTop: '30px',
    borderTop: '1px solid #ccc',
    fontSize: '13px',
    color: '#000',
    width: '100%'
  }
};

export const mobileStyles = {
  footerContent: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  footerLogoSection: {
    textAlign: 'center'
  },
  footerDescription: {
    margin: '0 auto'
  },
  footerLinks: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px'
  }
};
export const MobileNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
`;

export const MobileNavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
`;

export const MobileNavText = styled.span`
  font-size: 0.95rem;
  margin-left: 10px;
`;
export const MobileNavItemText = styled.span`
  font-size: 0.95rem;
  margin-left: 10px;
`;
/*Chatbot*/

export const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: 'Segoe UI', sans-serif;
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

export const ChatButton = styled.button`
  background: #fff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const ChatWindow = styled.div`
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  bottom: 70px;
  right: 0;
  transition: all 0.3s ease;
  transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0.9)')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  @media (max-width: 768px) {
    width: 300px;
    height: 450px;
    bottom: 60px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 80vh;
    max-height: 500px;
    bottom: 55px;
    right: -10px;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #0084ff, #006fff);
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChatLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ChatTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: white;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const ChatBody = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background: #f0f2f5;
`;

export const ChatMessage = styled.div`
  max-width: 80%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  position: relative;

  ${({ isUser }) =>
    isUser
      ? `
    background: #0084ff;
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 4px;
  `
      : `
    background: white;
    color: #333;
    margin-right: auto;
    border-bottom-left-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  `}
`;


export const ChatFooter = styled.div`
  padding: 10px;
  background: white;
  border-top: 1px solid #eee;
  display: flex;
`;

export const MessageInput = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px 15px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #0084ff;
  }
`;

export const SendButton = styled.button`
  background: #0084ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  padding: 10px 15px;
  background: white;
  border-bottom: 1px solid #eee;
`;

export const ChatSearchInput = styled.input`
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #0084ff;
  }
`;

export const ChatCategories = styled.div`
  display: flex;
  padding: 10px 15px;
  background: white;
  border-bottom: 1px solid #eee;
`;

export const CategoryButton = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 15px;
  background: ${({ active }) => (active ? '#0084ff' : '#f0f2f5')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? '#0073e6' : '#e4e6eb')};
  }
`;

export const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const ChatItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #f0f2f5;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

export const ChatAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatInfo = styled.div`
  flex: 1;
`;

export const ChatName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color:#000;
`;

export const ChatPreview = styled.div`
  font-size: 13px;
  color: #65676b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
