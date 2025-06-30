// components/feeds/MessageFeed.js
import React from 'react';
import { 
  Search,
  MoreHorizontal,
  ArrowLeft,
  Paperclip,
  Mic,
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
  MessageSendButton
} from '../../styles/pages/feeds';

const MessageFeed = () => {
  // Mock conversation data
  const conversations = [
    {
      id: 1,
      name: 'Jessica Parker',
      avatar: 'JP',
      lastMessage: 'Hey! How are you doing?',
      time: '2 min ago',
      unread: 3,
      online: true
    },
    {
      id: 2,
      name: 'Alex Morgan',
      avatar: 'AM',
      lastMessage: 'About our meeting tomorrow...',
      time: '1 hour ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Sophie Turner',
      avatar: 'ST',
      lastMessage: 'The files you requested',
      time: '3 hours ago',
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: 'Emma Watson',
      avatar: 'EW',
      lastMessage: 'Thanks for your help!',
      time: '1 day ago',
      unread: 1,
      online: false
    },
    {
      id: 5,
      name: 'Taylor Swift',
      avatar: 'TS',
      lastMessage: 'Let me know when you arrive',
      time: '2 days ago',
      unread: 0,
      online: false
    },
  ];

  return (
    <MessageContainer>
      <MessageHeader>
        <ArrowLeft size={20} />
        <h3>Messages</h3>
        <MoreHorizontal size={20} />
      </MessageHeader>

      <MessageSearch>
        <Search size={18} />
        <input type="text" placeholder="Search messages" />
      </MessageSearch>

      <MessageConversationList>
        {conversations.map(conversation => (
          <MessageConversationItem key={conversation.id}>
            <MessageAvatar online={conversation.online}>{conversation.avatar}</MessageAvatar>
            <MessageUserInfo>
              <MessageUserName>{conversation.name}</MessageUserName>
              <MessagePreviewText>{conversation.lastMessage}</MessagePreviewText>
            </MessageUserInfo>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <MessageTimestamp>{conversation.time}</MessageTimestamp>
              {conversation.unread > 0 && (
                <MessageUnreadCount>{conversation.unread}</MessageUnreadCount>
              )}
            </div>
          </MessageConversationItem>
        ))}
      </MessageConversationList>

      

      <MessageComposer>
        <MessageActionButton>
          <Paperclip size={20} />
        </MessageActionButton>
        <MessageInputField placeholder="Type a message..." />
        <MessageActionButton>
          <Smile size={20} />
        </MessageActionButton>
        <MessageSendButton>
          <Send size={20} />
        </MessageSendButton>
      </MessageComposer>
    </MessageContainer>
  );
};

export default MessageFeed;