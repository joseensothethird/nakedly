import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import MessageList from '../Message/MessageList';
import {
  ChatContainer,
  ConversationHeader,
  MessageBody,
  InputContainer,
  AttachmentButton,
  InputField,
  SendButton,
  AttachmentMenu,
  AttachmentOption
} from '../../styles/pages/Messages';

const socket = io('http://localhost:5000');

function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [conversation, setConversation] = useState(null);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/conversations/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setConversation(response.data);
      } catch (error) {
        console.error('Failed to load conversation:', error);
      }
    };

    fetchConversation();
  }, [id]);

  useEffect(() => {
    if (conversation) {
      loadMessages();
    }
  }, [conversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/conversations/${id}/messages`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setMessages(response.data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!messageInput.trim() && !fileInputRef.current?.files[0]) return;

    try {
      const formData = new FormData();
      if (messageInput.trim()) {
        formData.append('content', messageInput);
      }
      if (fileInputRef.current?.files[0]) {
        formData.append('attachment', fileInputRef.current.files[0]);
      }

      const response = await axios.post(
        `http://localhost:5000/api/conversations/${id}/messages`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setMessages(prev => [...prev, response.data]);
      setMessageInput('');
      fileInputRef.current.value = '';
      socket.emit('newMessage', response.data);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAttachmentClick = (type) => {
    setShowAttachmentMenu(false);
    if (type === 'image') {
      fileInputRef.current.accept = 'image/*';
    } else if (type === 'video') {
      fileInputRef.current.accept = 'video/*';
    } else {
      fileInputRef.current.accept = '*';
    }
    fileInputRef.current.click();
  };

  return (
    <ChatContainer>
      {conversation && (
        <>
          <ConversationHeader>
            <span className="username">
              {conversation.participantName}
              {conversation.participantIsPremium && (
                <span className="premium-badge">PREMIUM</span>
              )}
            </span>
          </ConversationHeader>

          <MessageBody>
            <MessageList
              messages={messages}
              currentUser={user?.id}
            />
            <div ref={messagesEndRef} />
          </MessageBody>

          <InputContainer>
            <AttachmentButton onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}>
              <i className="fas fa-paperclip"></i>
            </AttachmentButton>

            {showAttachmentMenu && (
              <AttachmentMenu>
                <AttachmentOption onClick={() => handleAttachmentClick('image')}>
                  <i className="fas fa-image"></i> Photo
                </AttachmentOption>
                <AttachmentOption onClick={() => handleAttachmentClick('video')}>
                  <i className="fas fa-video"></i> Video
                </AttachmentOption>
                <AttachmentOption onClick={() => handleAttachmentClick('file')}>
                  <i className="fas fa-file"></i> File
                </AttachmentOption>
              </AttachmentMenu>
            )}

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => {
                if (e.target.files[0]) {
                  handleSendMessage();
                }
              }}
            />

            <InputField
              as="textarea"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
            />

            <SendButton onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </SendButton>
          </InputContainer>
        </>
      )}
    </ChatContainer>
  );
}

export default MessagePage;