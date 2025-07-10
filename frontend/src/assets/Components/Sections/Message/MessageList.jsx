import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Header,
  Title,
  TabsContainer,
  Tab,
  ConversationList,
  ConversationItem,
  UserInfo,
  Username,
  LastMessage,
  TimeStamp,
  UnreadBadge,
  SearchContainer,
  SearchInput
} from '../../styles/pages/Messages';

function MessageListPage() {
  const [activeTab, setActiveTab] = useState('messages');
  const [conversations, setConversations] = useState([]);
  const [messageRequests, setMessageRequests] = useState([]);
  const [spamMessages, setSpamMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/conversations', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setConversations(response.data);
      } catch (error) {
        console.error('Failed to load conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  const filteredConversations = conversations.filter(conv => {
    if (!searchQuery) return true;
    return conv.participantName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'messages':
        return (
          <ConversationList>
            {filteredConversations.length > 0 ? (
              filteredConversations.map(conv => (
                <ConversationItem key={conv.id}>
                  <UserInfo>
                    <Username>
                      {conv.participantName}
                      {conv.participantIsPremium && (
                        <span className="premium-badge">PREMIUM</span>
                      )}
                    </Username>
                    <LastMessage>{conv.lastMessage?.content || 'No messages yet'}</LastMessage>
                  </UserInfo>
                  <TimeStamp>
                    {conv.lastMessage ? new Date(conv.lastMessage.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                  </TimeStamp>
                  {conv.unreadCount > 0 && (
                    <UnreadBadge>{conv.unreadCount}</UnreadBadge>
                  )}
                </ConversationItem>
              ))
            ) : (
              <div className="empty-state">No conversations found</div>
            )}
          </ConversationList>
        );
      case 'requests':
        return (
          <ConversationList>
            {messageRequests.length > 0 ? (
              messageRequests.map(request => (
                <ConversationItem key={request.id}>
                  <UserInfo>
                    <Username>{request.senderName}</Username>
                    <LastMessage>{request.message}</LastMessage>
                  </UserInfo>
                  <TimeStamp>
                    {new Date(request.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </TimeStamp>
                </ConversationItem>
              ))
            ) : (
              <div className="empty-state">No message requests</div>
            )}
          </ConversationList>
        );
      case 'spam':
        return (
          <ConversationList>
            {spamMessages.length > 0 ? (
              spamMessages.map(spam => (
                <ConversationItem key={spam.id}>
                  <UserInfo>
                    <Username>{spam.senderName}</Username>
                    <LastMessage>{spam.message}</LastMessage>
                  </UserInfo>
                  <TimeStamp>
                    {new Date(spam.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </TimeStamp>
                </ConversationItem>
              ))
            ) : (
              <div className="empty-state">No spam messages</div>
            )}
          </ConversationList>
        );
      case 'support':
        return (
          <div className="support-info">
            <h3>Customer Support</h3>
            <p>Contact our support team for any assistance.</p>
            <button className="support-button">Start Support Chat</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header>
        <Title>Messages</Title>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search messages"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
      </Header>

      <TabsContainer>
        <Tab
          active={activeTab === 'messages'}
          onClick={() => setActiveTab('messages')}
        >
          Messages
        </Tab>
        <Tab
          active={activeTab === 'requests'}
          onClick={() => setActiveTab('requests')}
        >
          Requests
        </Tab>
        <Tab
          active={activeTab === 'spam'}
          onClick={() => setActiveTab('spam')}
        >
          Spam
        </Tab>
        <Tab
          active={activeTab === 'support'}
          onClick={() => setActiveTab('support')}
        >
          Support
        </Tab>
      </TabsContainer>

      {renderTabContent()}
    </Container>
  );
}

export default MessageListPage;