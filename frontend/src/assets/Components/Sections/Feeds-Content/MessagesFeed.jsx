// src/components/MessageFeed.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search,
  MoreHorizontal,
  ArrowLeft,
  Paperclip,
  Send,
  Smile
} from 'react-feather';
import { 
  MessageContainer,
  MessageHeader,
  MessageSearch,
  MessageConversationList,
  MessageConversationItem,
  MessageAvatar,
  MessageUserInfo,
  MessageUserName,
  MessagePreviewText,
  MessageTimestamp,
  MessageUnreadCount,
  MessageComposer,
  MessageInputField,
  MessageActionButton,
  MessageSendButton,
   MessageContent,
  MessageBubble,  
  MessageList,
} from '../../styles/pages/feeds';
import { useAuth } from '../../context/AuthContext';

const MessageFeed = () => {
  const { user, token } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);

  // Fetch conversations
  useEffect(() => {
    if (!token) return;
    
    const fetchConversations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/conversations', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        const data = await response.json();
        setConversations(data);
      } catch (err) {
        console.error('Error fetching conversations:', err);
      }
    };
    
    fetchConversations();
  }, [token]);

  // Fetch messages when conversation is selected
  useEffect(() => {
    if (!selectedConversation || !token) return;
    
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/conversations/${selectedConversation}/messages`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          }
        );
        const data = await response.json();
        setMessages(data);
        scrollToBottom();
      } catch (err) {
        console.error('Error fetching messages:', err);
      }
    };
    
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // Polling for new messages
    
    return () => clearInterval(interval);
  }, [selectedConversation, token]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation || !token) return;
    
    try {
      const response = await fetch(
        `http://localhost:5000/api/conversations/${selectedConversation}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: newMessage })
        }
      );
      
      const sentMessage = await response.json();
      setMessages([...messages, {
        ...sentMessage,
        sender_id: user.id,
        sender_name: `${user.first_name} ${user.last_name}`,
        sender_avatar: `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
      }]);
      
      setNewMessage('');
      scrollToBottom();
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const filteredConversations = conversations.filter(conv => 
    conv.user_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MessageContainer>
      <MessageHeader>
        {selectedConversation ? (
          <>
            <ArrowLeft size={20} onClick={() => setSelectedConversation(null)} />
            <h3>
              {conversations.find(c => c.id === selectedConversation)?.user_name || 'Chat'}
            </h3>
          </>
        ) : (
          <h3>Messages</h3>
        )}
        <MoreHorizontal size={20} />
      </MessageHeader>

      {!selectedConversation ? (
        <>
          <MessageSearch>
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search messages" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </MessageSearch>

          <MessageConversationList>
            {filteredConversations.map(conv => (
              <MessageConversationItem
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
              >
                <MessageAvatar online={conv.online}>
                  {conv.user_avatar}
                </MessageAvatar>
                <MessageUserInfo>
                  <MessageUserName>{conv.user_name}</MessageUserName>
                  <MessagePreviewText>{conv.last_message}</MessagePreviewText>
                </MessageUserInfo>
                <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                  <MessageTimestamp>
                    {formatTime(conv.last_message_time)}
                  </MessageTimestamp>
                  {conv.unread_count > 0 && (
                    <MessageUnreadCount>{conv.unread_count}</MessageUnreadCount>
                  )}
                </div>
              </MessageConversationItem>
            ))}
          </MessageConversationList>
        </>
      ) : (
        <>
          <MessageContent>
            <MessageList>
              {messages.map(message => (
                <MessageBubble 
                  key={message.id}
                  currentUser={message.sender_id === user.id}
                >
                  {message.sender_id !== user.id && (
                    <MessageAvatar small>
                      {message.sender_avatar}
                    </MessageAvatar>
                  )}
                  <div>
                    {message.sender_id !== user.id && (
                      <MessageUserName small>{message.sender_name}</MessageUserName>
                    )}
                    <p>{message.content}</p>
                    <MessageTimestamp small>
                      {formatTime(message.created_at)}
                    </MessageTimestamp>
                  </div>
                </MessageBubble>
              ))}
              <div ref={messagesEndRef} />
            </MessageList>
          </MessageContent>

          <MessageComposer>
            <MessageActionButton>
              <Paperclip size={20} />
            </MessageActionButton>
            <MessageInputField
              placeholder="Type a message..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <MessageActionButton>
              <Smile size={20} />
            </MessageActionButton>
            <MessageSendButton
              onClick={handleSendMessage}
            >
              <Send size={20} />
            </MessageSendButton>
          </MessageComposer>
        </>
      )}
    </MessageContainer>
  );
};

export default MessageFeed;