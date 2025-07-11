import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useAuth } from '../../context/AuthContext';
import { ChatAppContainer, Header, Content, Username, Title, SearchContainer, SearchInput, SearchResults, SearchResult, UserName, EmptyState, ConversationHeader, ConversationList, MessageArea, Tabs, Tab, MessageList, MessageItem, UserAvatar, MessagePreview, MessageText, TimeStamp, PremiumBadge, MessageInput, MessageBubble, MessageSender, MessageContent, MessageTime, UnreadBadge, HeaderRight, LoadingText, NoResultsText, ConversationInfo, OnlineStatus, MessageInputContainer, SendButton, AttachmentButton, AttachmentPreview, RemoveAttachment, ConversationActions, ActionButton, DropdownMenu, DropdownItem, RequestActions, AcceptButton, DeclineButton, RequestBadge } from '../../styles/pages/Messages';

function ChatApp() {
  const [activeTab, setActiveTab] = useState('messages');
  const [conversations, setConversations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useAuth();
  const searchInputRef = useRef();
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);
  const dropdownRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchFocus = () => {
    if (searchQuery.length >= 1) {
      setShowResults(true);
    }
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchUsers(query);
  };

  const handleUserSelect = (selectedUser) => {
    startChat(selectedUser.id);
    setSearchQuery('');
    setShowResults(false);
    setSearchResults([]);
    if (searchInputRef.current) searchInputRef.current.blur();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const removeAttachment = () => {
    setAttachment(null);
  };

  const handleAttachmentChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleVoiceCall = () => {
    alert('Initiating voice call...');
  };

  const handleVideoCall = () => {
    alert('Initiating video call...');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBlockUser = () => {
    if (currentConversation) {
      alert(`Blocking user: ${currentConversation.participant?.username}`);
      setShowDropdown(false);
    }
  };

  const handleDeleteConversation = async () => {
    if (currentConversation) {
      try {
        await axios.delete(`http://localhost:5000/api/conversations/${currentConversation.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        setConversations(prev => prev.filter(conv => conv.id !== currentConversation.id));
        setCurrentConversation(null);
        setMessages([]);
      } catch (error) {
        console.error('Failed to delete conversation:', error);
        alert('Failed to delete conversation');
      }
      setShowDropdown(false);
    }
  };

  const acceptRequest = async (conversationId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/conversations/${conversationId}/accept`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      
      const acceptedRequest = requests.find(req => req.id === conversationId);
      if (acceptedRequest) {
        setRequests(prev => prev.filter(req => req.id !== conversationId));
        setConversations(prev => [{
          ...acceptedRequest,
          is_request: false
        }, ...prev]);
        
        if (currentConversation?.id === conversationId) {
          setCurrentConversation(prev => ({
            ...prev,
            is_request: false
          }));
        }
      }
    } catch (error) {
      console.error('Failed to accept request:', error);
      alert('Failed to accept request');
    }
  };

  const declineRequest = async (conversationId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/conversations/${conversationId}/decline`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      
      setRequests(prev => prev.filter(req => req.id !== conversationId));
      
      if (currentConversation?.id === conversationId) {
        setCurrentConversation(null);
        setMessages([]);
      }
    } catch (error) {
      console.error('Failed to decline request:', error);
      alert('Failed to decline request');
    }
  };

  useEffect(() => {
    socketRef.current = io('http://localhost:5000', {
      auth: {
        token: localStorage.getItem('token')
      }
    });

    if (user?.id) {
      socketRef.current.emit('joinUserRoom', user.id);
    }

    const handleNewMessage = (message) => {
      if (currentConversation && message.conversation_id === currentConversation.id) {
        setMessages(prev => [...prev, message]);
        scrollToBottom();
      }
      
      if (message.conversation_updated?.is_request === false) {
        setRequests(prev => prev.filter(req => req.id !== message.conversation_id));
        setConversations(prev => {
          const existing = prev.find(conv => conv.id === message.conversation_id);
          if (existing) return prev;
          
          const request = requests.find(req => req.id === message.conversation_id);
          if (request) {
            return [{
              ...request,
              is_request: false
            }, ...prev];
          }
          return prev;
        });
      } else {
        const updateList = (list) => list.map(conv => {
          if (conv.id === message.conversation_id) {
            return { 
              ...conv, 
              last_message: message.content || 'Attachment', 
              last_message_time: 'now',
              unread_count: currentConversation?.id === conv.id ? 0 : (conv.unread_count || 0) + 1
            };
          }
          return conv;
        });
        
        setConversations(updateList);
        setRequests(updateList);
      }
    };

    const handleConversationUpdated = (data) => {
      if (data.is_request === false) {
        setRequests(prev => prev.filter(req => req.id !== data.conversation_id));
        setConversations(prev => {
          const existing = prev.find(conv => conv.id === data.conversation_id);
          if (existing) return prev.map(conv => 
            conv.id === data.conversation_id ? { ...conv, is_request: false } : conv
          );
          
          const request = requests.find(req => req.id === data.conversation_id);
          if (request) {
            return [{ ...request, is_request: false }, ...prev];
          }
          return prev;
        });
        
        if (currentConversation?.id === data.conversation_id) {
          setCurrentConversation(prev => ({ ...prev, is_request: false }));
        }
      }
    };

    const handleConversationRemoved = (data) => {
      setRequests(prev => prev.filter(req => req.id !== data.conversation_id));
      if (currentConversation?.id === data.conversation_id) {
        setCurrentConversation(null);
        setMessages([]);
      }
    };

    socketRef.current.on('new_message', handleNewMessage);
    socketRef.current.on('conversation_updated', handleConversationUpdated);
    socketRef.current.on('conversation_removed', handleConversationRemoved);

    return () => {
      if (socketRef.current) {
        socketRef.current.off('new_message', handleNewMessage);
        socketRef.current.off('conversation_updated', handleConversationUpdated);
        socketRef.current.off('conversation_removed', handleConversationRemoved);
        socketRef.current.disconnect();
      }
    };
  }, [currentConversation, user, requests]);

  useEffect(() => {
    const loadConversations = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/api/conversations', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        setConversations(response.data.conversations.map(conv => ({
          ...conv,
          participantName: conv.participant?.username || 'Unknown',
          participantIsPremium: conv.participant?.is_premium || false,
          last_message: conv.last_message || 'No messages yet',
          last_message_time: conv.last_message_time 
            ? formatTime(conv.last_message_time)
            : 'now'
        })));
        
        setRequests(response.data.requests.map(req => ({
          ...req,
          participantName: req.participant?.username || 'Unknown',
          participantIsPremium: req.participant?.is_premium || false,
          last_message: req.last_message || 'No messages yet',
          last_message_time: req.last_message_time 
            ? formatTime(req.last_message_time)
            : 'now'
        })));
      } catch (error) {
        console.error('Failed to load conversations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (user) {
      loadConversations();
    }
  }, [user]);

  useEffect(() => {
    if (currentConversation) {
      loadMessages(currentConversation.id);
    }
  }, [currentConversation]);

  const loadMessages = async (conversationId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/conversations/${conversationId}/messages`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      
      setMessages(response.data);
      
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, unread_count: 0 }
            : conv
        )
      );
      setRequests(prev => 
        prev.map(req => 
          req.id === conversationId 
            ? { ...req, unread_count: 0 }
            : req
        )
      );
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const searchUsers = async (query) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (!query || query.trim().length < 1) {
      setSearchResults([]);
      setShowResults(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setShowResults(true);
    
    const timeout = setTimeout(async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/search', {
          params: { username: query },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        setSearchResults(response.data.map(user => ({
          id: user.id,
          username: user.username,
          is_premium: user.is_premium || false
        })));
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    setSearchTimeout(timeout);
  };

  const startChat = async (userId) => {
    try {
      const existingConversation = [...conversations, ...requests].find(conv => 
        conv.participant?.id === userId
      );
      
      if (existingConversation) {
        setCurrentConversation(existingConversation);
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/conversations',
        { participantId: userId },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      const newConversation = {
        id: response.data.id,
        is_request: response.data.is_request,
        participant: {
          id: response.data.participant.id,
          username: response.data.participant.username,
          is_premium: response.data.participant.is_premium
        },
        last_message: '',
        last_message_time: 'now',
        unread_count: 0
      };

      if (response.data.is_request) {
        setRequests(prev => [newConversation, ...prev]);
      } else {
        setConversations(prev => [newConversation, ...prev]);
      }

      setCurrentConversation(newConversation);
    } catch (error) {
      console.error('Error starting chat:', error);
      alert('Failed to start conversation. Please try again.');
    }
  };

  const sendMessage = async () => {
    if (!currentConversation || (!newMessage.trim() && !attachment)) return;

    try {
      const formData = new FormData();
      if (newMessage) formData.append('content', newMessage);
      if (attachment) formData.append('attachment', attachment);

      const response = await axios.post(
        `http://localhost:5000/api/conversations/${currentConversation.id}/messages`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      const sentMessage = response.data;
      setMessages(prev => [...prev, sentMessage]);
      setConversations(prev => 
        prev.map(conv => 
          conv.id === currentConversation.id 
            ? { 
                ...conv, 
                last_message: newMessage || 'Attachment', 
                last_message_time: 'now' 
              }
            : conv
        )
      );
      setNewMessage('');
      setAttachment(null);
      scrollToBottom();
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <ChatAppContainer>
      <Header>
        <Title>Messenger</Title>
        <HeaderRight>
          <SearchContainer>
            <SearchInput
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              placeholder="Search for people..."
            />

            {showResults && (
              <SearchResults>
                {isSearching ? (
                  <LoadingText>Searching...</LoadingText>
                ) : searchResults.length > 0 ? (
                  searchResults.map(user => (
                    <SearchResult
                      key={user.id}
                      onClick={() => handleUserSelect(user)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <UserName>
                        {user.username}
                        {user.is_premium && <PremiumBadge>PREMIUM</PremiumBadge>}
                      </UserName>
                    </SearchResult>
                  ))
                ) : searchQuery.length >= 1 ? (
                  <NoResultsText>No users found for "{searchQuery}"</NoResultsText>
                ) : (
                  <NoResultsText>Type to search</NoResultsText>
                )}
              </SearchResults>
            )}
          </SearchContainer>
          <Username>{user?.username || 'Guest'}</Username>
        </HeaderRight>
      </Header>

      <Content>
        <ConversationList>
          <Tabs>
            <Tab 
              active={activeTab === 'messages'} 
              onClick={() => setActiveTab('messages')}
            >
              Messages -
              {conversations.length > 0 && (
               ( <span style={{ marginLeft: '5px' }}>{conversations.length}</span>)
              )}
            </Tab>
            <Tab 
              active={activeTab === 'requests'} 
              onClick={() => setActiveTab('requests')}
            >
               Message Requests
              {requests.length > 0 && (
                <RequestBadge>{requests.length}</RequestBadge>
              )}
            </Tab>
          </Tabs>

          {!user ? (
            <EmptyState>Please log in to view your messages</EmptyState>
          ) : isLoading && conversations.length === 0 && requests.length === 0 ? (
            <LoadingText>Loading conversations...</LoadingText>
          ) : activeTab === 'messages' ? (
            conversations.length > 0 ? (
              conversations.map(conv => (
                <MessageItem 
                  key={conv.id} 
                  onClick={() => setCurrentConversation(conv)}
                  active={currentConversation?.id === conv.id}
                >
                  <UserAvatar>
                    {conv.participant?.username?.charAt(0)?.toUpperCase() || 'U'}
                  </UserAvatar>
                  <MessagePreview>
                    <Username>
                      {conv.participant?.username || 'Unknown'}
                      {conv.participant?.is_premium && <PremiumBadge>PREMIUM</PremiumBadge>}
                      <TimeStamp>
                        {conv.last_message_time === 'now' ? 'now' : conv.last_message_time}
                      </TimeStamp>
                    </Username>
                    <MessageText>
                      {conv.last_message?.length > 30 
                        ? `${conv.last_message.substring(0, 30)}...` 
                        : conv.last_message}
                      {conv.is_my_last_message && ' (You)'}
                    </MessageText>
                  </MessagePreview>
                  {conv.unread_count > 0 && (
                    <UnreadBadge>{conv.unread_count}</UnreadBadge>
                  )}
                </MessageItem>
              ))
            ) : (
              <EmptyState>No conversations yet. Search for someone to message!</EmptyState>
            )
          ) : requests.length > 0 ? (
            requests.map(req => (
              <MessageItem 
                key={req.id} 
                onClick={() => setCurrentConversation(req)}
                active={currentConversation?.id === req.id}
              >
                <UserAvatar>
                  {req.participant?.username?.charAt(0)?.toUpperCase() || 'U'}
                </UserAvatar>
                <MessagePreview>
                  <Username>
                    {req.participant?.username || 'Unknown'}
                    {req.participant?.is_premium && <PremiumBadge>PREMIUM</PremiumBadge>}
                    <TimeStamp>
                      {req.last_message_time === 'now' ? 'now' : req.last_message_time}
                    </TimeStamp>
                  </Username>
                  <MessageText>
                    {req.last_message?.length > 30 
                      ? `${req.last_message.substring(0, 30)}...` 
                      : req.last_message}
                  </MessageText>
                </MessagePreview>
                {req.unread_count > 0 && (
                  <UnreadBadge>{req.unread_count}</UnreadBadge>
                )}
                <RequestActions>
                  <AcceptButton onClick={(e) => {
                    e.stopPropagation();
                    acceptRequest(req.id);
                  }}>
                    Accept
                  </AcceptButton>
                  <DeclineButton onClick={(e) => {
                    e.stopPropagation();
                    declineRequest(req.id);
                  }}>
                    Decline
                  </DeclineButton>
                </RequestActions>
              </MessageItem>
            ))
          ) : (
            <EmptyState>No message requests</EmptyState>
          )}
        </ConversationList>

        <MessageArea>
          {!user ? (
            <EmptyState>Please log in to send messages</EmptyState>
          ) : currentConversation ? (
            <>
              <ConversationHeader>
                <UserAvatar>
                  {currentConversation.participant?.username?.charAt(0)?.toUpperCase() || 'U'}
                </UserAvatar>
                <ConversationInfo>
                  <Username>
                    {currentConversation.participant?.username || 'Unknown'}
                    {currentConversation.participant?.is_premium && <PremiumBadge>PREMIUM</PremiumBadge>}
                  </Username>
                  <OnlineStatus>Online</OnlineStatus>
                </ConversationInfo>
                <ConversationActions>
                  <ActionButton onClick={handleVoiceCall}>1</ActionButton>
                  <ActionButton onClick={handleVideoCall}>2</ActionButton>
                  <ActionButton onClick={toggleDropdown} ref={dropdownRef}>3</ActionButton>
                  {showDropdown && (
                    <DropdownMenu>
                      <DropdownItem onClick={handleBlockUser}>Block User</DropdownItem>
                      <DropdownItem onClick={handleDeleteConversation}>Delete Conversation</DropdownItem>
                      <DropdownItem>Report User</DropdownItem>
                      <DropdownItem>Mute Notifications</DropdownItem>
                    </DropdownMenu>
                  )}
                </ConversationActions>
              </ConversationHeader>
              
              <MessageList>
                {isLoading ? (
                  <LoadingText>Loading messages...</LoadingText>
                ) : messages.length > 0 ? (
                  messages.map(msg => (
                    <MessageBubble 
                      key={msg.id} 
                      isCurrentUser={msg.sender_id === user?.id}
                    >
                      {msg.sender_id !== user?.id && (
                        <MessageSender>{msg.sender_name}</MessageSender>
                      )}
                      <MessageContent>
                        {msg.content}
                        {msg.attachment && (
                          <a 
                            href={msg.attachment.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {msg.attachment.type === 'image' ? (
                              <img 
                                src={msg.attachment.url} 
                                alt="Attachment" 
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                              />
                            ) : (
                              `Download ${msg.attachment.type}`
                            )}
                          </a>
                        )}
                      </MessageContent>
                      <MessageTime isCurrentUser={msg.sender_id === user?.id}>
                        {formatTime(msg.created_at)}
                        {msg.is_read && msg.sender_id === user?.id && ' ✓✓'}
                      </MessageTime>
                    </MessageBubble>
                  ))
                ) : (
                  <EmptyState>No messages yet. Say hello!</EmptyState>
                )}
                <div ref={messagesEndRef} />
              </MessageList>
              
              {!currentConversation.is_request ? (
                <MessageInputContainer>
                  {attachment && (
                    <AttachmentPreview>
                      {attachment.type.startsWith('image/') ? (
                        <img 
                          src={URL.createObjectURL(attachment)} 
                          alt="Preview" 
                          style={{ maxWidth: '100px', maxHeight: '100px' }}
                        />
                      ) : (
                        <span>{attachment.name}</span>
                      )}
                      <RemoveAttachment onClick={removeAttachment}>×</RemoveAttachment>
                    </AttachmentPreview>
                  )}
                  <AttachmentButton>
                    <input 
                      type="file" 
                      onChange={handleAttachmentChange}
                      style={{ display: 'none' }}
                      id="attachment-input"
                    />
                    <label htmlFor="attachment-input">📎</label>
                  </AttachmentButton>
                  <MessageInput
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                  />
                  <SendButton 
                    onClick={sendMessage}
                    disabled={!newMessage.trim() && !attachment}
                  >
                    Send
                  </SendButton>
                </MessageInputContainer>
              ) : (
                <EmptyState>
                  You need to accept this request before you can message
                </EmptyState>
              )}
            </>
          ) : (
            <EmptyState>
              {activeTab === 'messages' 
                ? "Select a conversation to start chatting" 
                : "Select a request to view or respond"}
            </EmptyState>
          )}
        </MessageArea>
      </Content>
    </ChatAppContainer>
  );
}

export default ChatApp;