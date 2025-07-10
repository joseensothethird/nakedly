import styled from 'styled-components';

export const ChatAppContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  color: #00aff0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    height: 100vh;
    border-radius: 0;
  }
`;

export const Header = styled.div`
  background-color: #ffffff;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ConversationList = styled.div`
  width: 300px;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    max-height: 40vh;
  }
`;

export const MessageArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 480px) {
    justify-content: space-around;
  }
`;

export const Tab = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#00aff0' : 'transparent'};
  color: ${props => props.active ? '#00aff0' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 60px; 
  font-size:12px;
  
  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    font-size: 14px;
    text-align: center;
    flex: 1;
    min-width: auto;
  }
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
`;

export const MessageItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${props => props.active ? '#f0f7ff' : 'transparent'};
  
  &:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
  }
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
`;

export const MessagePreview = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const Username = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const MessageText = styled.div`
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const TimeStamp = styled.div`
  color: #999;
  font-size: 12px;
  margin-left: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const PremiumBadge = styled.span`
  background-color: #ff4b96;
  color: white;
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 10px;
  margin-left: 5px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 250px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #00aff0;
  border-radius: 20px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #007acc;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 13px;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 5px;
`;

export const SearchResult = styled.div`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  display: block;
`;

export const LoadingText = styled.div`
  padding: 10px;
  text-align: center;
`;

export const NoResultsText = styled.div`
  padding: 10px;
  text-align: center;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #666;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ConversationHeader = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ConversationInfo = styled.div`
  margin-left: 12px;
  color: black;

  @media (max-width: 480px) {
    margin-left: 8px;
  }
`;

export const OnlineStatus = styled.div`
  color: black;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
export const MessageSender = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  color: ${props => props.isCurrentUser ? 'rgba(255,255,255,0.9)' : '#385898'};
`;
export const MessageTime = styled.div`
  font-size: 11px;
  color: rgba(0,0,0,0.4);
  text-align: right;
  margin-top: 4px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  margin: 4px 0;
  padding: 8px 12px;
  border-radius: 18px;
  position: relative;
  word-break: break-word;
  align-self: ${props => props.isCurrentUser ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.isCurrentUser ? '#0084ff' : '#e4e6eb'};
  color: ${props => props.isCurrentUser ? 'white' : 'black'};
  
  /* Rounded corners for message bubbles */
  border-top-left-radius: ${props => props.isCurrentUser ? '18px' : '4px'};
  border-top-right-radius: ${props => props.isCurrentUser ? '4px' : '18px'};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;

  /* Sender name styling */
  ${MessageSender} {
    font-weight: 600;
    margin-bottom: 4px;
    color: ${props => props.isCurrentUser ? 'rgba(255,255,255,0.9)' : '#385898'};
  }

  /* Message time styling */
  ${MessageTime} {
    display: block;
    text-align: right;
    font-size: 11px;
    margin-top: 4px;
    color: ${props => props.isCurrentUser ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.4)'};
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 85%;
    padding: 6px 10px;
  }
`;



export const MessageContent = styled.div`
  word-wrap: break-word;
  line-height: 1.4;
`;


export const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  outline: none;
  margin: 15px;

  @media (max-width: 480px) {
    margin: 10px;
    padding: 8px 12px;
  }
`;

export const UnreadBadge = styled.div`
  background-color: #00aff0;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 8px;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    font-size: 10px;
  }
`;

export const Title = styled.h1`
  color: #00aff0;
  margin: 0;
  font-size: 22px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const MessageInputContainer = styled.div`
  display: flex;
  padding: 10px;
  background: #f5f5f5;
  border-top: 1px solid #ddd;
  align-items: center;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const SendButton = styled.button`
  padding: 8px 15px;
  margin-left: 10px;
  background-color: #0084ff;
  color: white;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  font-weight: bold;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: #0073e6;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;
export const AttachmentButton = styled.div`
  cursor: pointer;
  padding: 8px;
  margin-right: 8px;
  
  label {
    cursor: pointer;
    font-size: 20px;
  }
  
  input[type="file"] {
    display: none;
  }
`;

export const AttachmentPreview = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  
  img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 4px;
  }
  
  span {
    margin-left: 8px;
  }
`;

export const RemoveAttachment = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4444;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
`;
export const ConversationActions = styled.div`
  display: flex;
  margin-left: auto;
  gap: 10px;
  position: relative;
`;

export const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #f0f2f5;
  color: #00aff0;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  
  &:hover {
    background-color: #e4e6eb;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 200px;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;
export const AcceptButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: #45a049;
  }
`;

export const DeclineButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #d32f2f;
  }
`;

export const RequestBadge = styled.span`
  background-color: #f44336;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
`;

export const RequestActions = styled.div`
  display: flex;
  margin-left: auto;
  padding: 0 10px;
`;