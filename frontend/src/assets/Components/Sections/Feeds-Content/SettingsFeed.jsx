// components/notifications/OnlyFansNotifications.js
import React, { useState } from 'react';
import { 
  CheckCircle,
  Heart,
  MessageCircle,
  DollarSign,
  UserPlus,
  Star,
  Zap,
  Lock,
  Trash2,
  UserX,
  MoreVertical
} from 'react-feather';
import { 
  NotificationsContainer, 
  NotificationCard, 
  NotificationHeader, 
  CreatorAvatar, 
  CreatorInfo, 
  CreatorName, 
  NotifMeta, 
  NotifBody, 
  NotifMessage,
  NotifTime,
  NotifButton,
  ContentPreview,
  NotifButtonGroup,
  DropdownMenu,
  DropdownItem
} from '../../styles/pages/feeds';

const OnlyFansNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      creator: 'MiaKhalifa',
      avatar: 'MK',
      type: 'tip',
      amount: 50,
      time: '5 mins ago',
      message: 'Love your new content! 💋',
      preview: 'https://picsum.photos/100/100?random=101',
      read: false
    },
    {
      id: 2,
      creator: 'BellaThorne',
      avatar: 'BT',
      type: 'subscribe',
      tier: 'VIP',
      time: '25 mins ago',
      preview: 'https://picsum.photos/100/100?random=102',
      read: false
    },
    {
      id: 3,
      creator: 'RileyReid',
      avatar: 'RR',
      type: 'purchase',
      content: 'Private Video',
      price: 29.99,
      time: '2 hours ago',
      preview: 'https://picsum.photos/100/100?random=103',
      read: true
    },
    {
      id: 4,
      creator: 'LanaRhoades',
      avatar: 'LR',
      type: 'message',
      message: 'Check your DMs for something special 😈',
      time: '4 hours ago',
      preview: 'https://picsum.photos/100/100?random=104',
      read: true
    },
    {
      id: 5,
      creator: 'AlexisTexas',
      avatar: 'AT',
      type: 'like',
      content: 'Photo Set',
      time: '1 day ago',
      preview: 'https://picsum.photos/100/100?random=105',
      read: true
    }
  ]);
  
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const notificationTypes = {
    like: { icon: <Heart size={16} color="#ff4d4f" />, text: 'liked your post', color: '#ff4d4f' },
    tip: { icon: <DollarSign size={16} color="#52c41a" />, text: 'sent you a tip', color: '#52c41a' },
    message: { icon: <MessageCircle size={16} color="#1890ff" />, text: 'sent you a message', color: '#1890ff' },
    subscribe: { icon: <UserPlus size={16} color="#faad14" />, text: 'subscribed to you', color: '#faad14' },
    purchase: { icon: <Lock size={16} color="#722ed1" />, text: 'purchased your content', color: '#722ed1' }
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    setDropdownOpen(null);
  };

  const handleBlockCreator = (creator) => {
    alert(`Blocked ${creator}. They won't be able to interact with you anymore.`);
    setDropdownOpen(null);
  };

  const handleCreatorClick = (creator) => {
    alert(`Navigating to ${creator}'s profile`);
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  return (
    <NotificationsContainer>
      <div className="notifications-header">
        <h2>Notifications</h2>
        <button className="mark-all-read" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </div>
      
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} unread={!notification.read}>
          <NotificationHeader>
            <CreatorAvatar 
              style={{ backgroundColor: getRandomColor() }}
              onClick={() => handleCreatorClick(notification.creator)}
            >
              {notification.avatar}
            </CreatorAvatar>
            
            <CreatorInfo>
              <CreatorName onClick={() => handleCreatorClick(notification.creator)}>
                {notification.creator} <CheckCircle size={14} color="#1890ff" />
              </CreatorName>
              
              <NotifMessage>
                <span style={{ color: notificationTypes[notification.type].color }}>
                  {notificationTypes[notification.type].icon} {notificationTypes[notification.type].text}
                </span>
                {notification.amount && ` $${notification.amount}`}
                {notification.tier && ` (${notification.tier} Tier)`}
                {notification.content && `: ${notification.content}`}
                {notification.message && `: "${notification.message}"`}
              </NotifMessage>
              
              <NotifMeta>
                <NotifTime>{notification.time}</NotifTime>
                {notification.price && <span className="price">${notification.price.toFixed(2)}</span>}
              </NotifMeta>
            </CreatorInfo>
            
            <div className="notification-actions">
              <button 
                className="more-options" 
                onClick={() => toggleDropdown(notification.id)}
              >
                <MoreVertical size={16} />
              </button>
              
              {dropdownOpen === notification.id && (
                <DropdownMenu>
                  <DropdownItem onClick={() => handleDeleteNotification(notification.id)}>
                    <Trash2 size={14} /> Delete Notification
                  </DropdownItem>
                  <DropdownItem onClick={() => handleBlockCreator(notification.creator)}>
                    <UserX size={14} /> Block Creator
                  </DropdownItem>
                </DropdownMenu>
              )}
            </div>
            
            {notification.preview && (
              <ContentPreview 
                style={{ backgroundImage: `url(${notification.preview})` }} 
              />
            )}
          </NotificationHeader>

          <NotifBody>
            {notification.type === 'message' && (
              <NotifButtonGroup>
                <NotifButton primary>
                  <MessageCircle size={14} /> Reply
                </NotifButton>
                <NotifButton>
                  <Zap size={14} /> Tip to Unlock
                </NotifButton>
              </NotifButtonGroup>
            )}
            
            {notification.type === 'tip' && (
              <NotifButton>
                <Heart size={14} /> Send Thank You
              </NotifButton>
            )}
            
            {notification.type === 'subscribe' && (
              <NotifButton primary>
                <Star size={14} /> Send Welcome Message
              </NotifButton>
            )}
          </NotifBody>
        </NotificationCard>
      ))}
    </NotificationsContainer>
  );
};

// Helper function for random avatar colors
const getRandomColor = () => {
  const colors = ['#ff4d4f', '#1890ff', '#52c41a', '#faad14', '#722ed1'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default OnlyFansNotifications;