import React, { useState } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const ModernModelBanner = ({ 
  modelName = "Aria Nova",
  username = "@arianova",
  followersCount = "1.8M",
  photosCount = "524",
  videosCount = "236",
  price = "$12.99",
  isOnline = true,
  isVerified = true,
  subscribeLink = "/nakedly/profile",
  messageLink = "/nakedly/messages",
  socialLinks = {
    instagram: "#",
    twitter: "#",
    tiktok: "#"
  }
}) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    { text: `Hi there! Thanks for reaching out to ${modelName}. How can I help you today?`, isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageClick = (e) => {
    e.preventDefault();
    setShowChatbot(true);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const userMessage = { text: newMessage, isUser: true };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate response after 1 second
    setTimeout(() => {
      const botResponse = { 
        text: `${modelName} will respond to your message soon. Thank you for your patience!`, 
        isUser: false 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <FullScreenBanner>
        <BackgroundImage 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80" 
          alt="Model background"
        />
        <GradientOverlay />
        
        <ContentContainer>
          <LeftContent>
            <ModelInfo>
              <ModelName>{modelName}</ModelName>
              {isVerified && <VerifiedBadge>✓</VerifiedBadge>}
              {isOnline && <OnlineStatus>Online</OnlineStatus>}
            </ModelInfo>
            <Username>{username}</Username>
            
            <StatsContainer>
              <Stat>
                <StatNumber>{followersCount}</StatNumber>
                <StatLabel>Followers</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{photosCount}</StatNumber>
                <StatLabel>Photos</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{videosCount}</StatNumber>
                <StatLabel>Videos</StatLabel>
              </Stat>
            </StatsContainer>
            
            <Bio>
              Fashion model | Content creator | 21 y.o. | Los Angeles
              <br />
              Exclusive content daily 🔥 New photoset every Friday
            </Bio>
          </LeftContent>
          
          <RightContent>
            <PriceTag>{price}/month</PriceTag>
            <ActionButtons>
              <SubscribeButton as="a" href={subscribeLink} target="_blank" rel="noopener noreferrer">
                Subscribe
              </SubscribeButton>
              <MessageButton onClick={handleMessageClick}>
                Message
              </MessageButton>
            </ActionButtons>
            <SocialLinks>
              <SocialIcon as="a" href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} />
              </SocialIcon>
              <SocialIcon as="a" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={18} />
              </SocialIcon>
              <SocialIcon as="a" href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                <FaTiktok size={18} />
              </SocialIcon>
            </SocialLinks>
          </RightContent>
        </ContentContainer>
        
        <NavIndicator>Scroll down ↓</NavIndicator>
      </FullScreenBanner>

      {showChatbot && (
        <ChatPopup>
          <ChatHeader>
            <ChatTitle>Message {modelName}</ChatTitle>
            <CloseButton onClick={() => setShowChatbot(false)}>×</CloseButton>
          </ChatHeader>
          <ChatBody>
            {messages.map((message, index) => (
              <ChatMessage key={index} isUser={message.isUser}>
                {message.text}
              </ChatMessage>
            ))}
          </ChatBody>
          <ChatFooter>
            <MessageInput 
              type="text" 
              placeholder="Type your message..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SendButton>
          </ChatFooter>
        </ChatPopup>
      )}
    </>
  );
};

// Chat Popup Styled Components
const ChatPopup = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 99999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 500px;
`;

const ChatHeader = styled.div`
  background: linear-gradient(to right, #FF2D55, #FF5A5F);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const ChatBody = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatMessage = styled.div`
  background: ${props => props.isUser ? '#0084ff' : '#e5e5ea'};
  color: ${props => props.isUser ? 'white' : 'black'};
  padding: 10px 15px;
  border-radius: 18px;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  word-break: break-word;
  line-height: 1.4;
  font-size: 0.9rem;
`;

const ChatFooter = styled.div`
  display: flex;
  padding: 10px;
  background: white;
  border-top: 1px solid #eee;
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 0.9rem;
`;

const SendButton = styled.button`
  background: linear-gradient(to right, #FF2D55, #FF5A5F);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Original Banner Styled Components
const FullScreenBanner = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex: 1;
  padding: 5vw;
  color: white;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
    padding-bottom: 80px;
  }
`;

const LeftContent = styled.div`
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const ModelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const ModelName = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  margin: 0;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  color:white;

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 8vw, 3rem);
  }
`;

const Username = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  margin: 0 0 2rem 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatNumber = styled.span`
  font-size: 1.8rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 80%;
  opacity: 0.9;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
  }
`;

const VerifiedBadge = styled.div`
  background: linear-gradient(to right, #00aaff, #0088ff);
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 0.9rem;
  }
`;

const OnlineStatus = styled.span`
  background: #4CAF50;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
`;

const PriceTag = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.6rem 1.2rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const BaseButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const SubscribeButton = styled(BaseButton)`
  background: linear-gradient(to right, #FF2D55, #FF5A5F);
  color: white;
`;

const MessageButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(5px);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

const NavIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: white;
  opacity: 0.7;
  font-size: 1rem;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
    40% {transform: translateY(-20px) translateX(-50%);}
    60% {transform: translateY(-10px) translateX(-50%);}
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    font-size: 0.9rem;
  }
`;

export default ModernModelBanner;