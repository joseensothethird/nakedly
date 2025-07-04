// components/feeds/HomeFeed.js
import React, { useState } from 'react';
import { 
  CheckCircle,
  Heart,
  MessageSquare,
  Send,
  MoreHorizontal,
  Image,
  Smile,
  MapPin
} from 'react-feather';
import { 
  ScrollableFeed, 
  Post, 
  PostHeader, 
  Avatar, 
  UserInfo, 
  UserName, 
  UserDetails, 
  PostContent, 
  PostText, 
  Mention, 
  PostLink, 
  PostImage, 
  LocationBadge, 
  LiveIndicator, 
  PostActions, 
  ActionButton,
  NewPostContainer,
  NewPostTextarea,
  NewPostActions,
  NewPostActionButton,
  PaginationContainer,
  PaginationButton,
  PaginationPageNumber
} from '../../styles/pages/feeds';

const HomeFeed = () => {
  const [newPostText, setNewPostText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostText.trim()) {
      // In a real app, you would send this to your backend
      console.log('New post:', newPostText);
      setNewPostText('');
      // Reset to first page when posting new content
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Simulate different content for different pages
  const generatePosts = () => {
    const startIndex = (currentPage - 1) * 5;
    return [...Array(5)].map((_, i) => (
      <Post key={startIndex + i}>
        <PostHeader>
          <Avatar>U{startIndex + i + 1}</Avatar>
          <UserInfo>
            <UserName>
              User {startIndex + i + 1} <CheckCircle size={16} />
            </UserName>
            <UserDetails>@user{startIndex + i + 1} • {i+1} hours ago</UserDetails>
          </UserInfo>
          <MoreHorizontal size={16} />
        </PostHeader>

        <PostContent>
          <PostText>
            This is sample post content #{startIndex + i + 1} from page {currentPage}.
          </PostText>
        </PostContent>

        <PostImage style={{ backgroundImage: `url(https://picsum.photos/600/400?random=${startIndex + i})` }}>
          <LocationBadge>LOCATION {startIndex + i + 1}</LocationBadge>
        </PostImage>

        <PostActions>
          <ActionButton>
            <Heart size={18} />
            <span>Like</span>
          </ActionButton>
          <ActionButton>
            <MessageSquare size={18} />
            <span>Comment</span>
          </ActionButton>
          <ActionButton>
            <Send size={18} />
            <span>Share</span>
          </ActionButton>
        </PostActions>
      </Post>
    ));
  };

  return (
    <ScrollableFeed>
      {/* New Post Creation */}
      <NewPostContainer>
        <PostHeader>
          <Avatar>ME</Avatar>
          <NewPostTextarea
            placeholder="What's happening?"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
        </PostHeader>
        <NewPostActions>
          <div>
            <NewPostActionButton>
              <Image size={18} />
            </NewPostActionButton>
            <NewPostActionButton>
              <Smile size={18} />
            </NewPostActionButton>
            <NewPostActionButton>
              <MapPin size={18} />
            </NewPostActionButton>
          </div>
          <ActionButton 
            onClick={handlePostSubmit}
            disabled={!newPostText.trim()}
          >
            Post
          </ActionButton>
        </NewPostActions>
      </NewPostContainer>

      {/* Original Featured Post */}
      <Post>
        <PostHeader>
          <Avatar>OF</Avatar>
          <UserInfo>
            <UserName>
              OnlyFans <CheckCircle size={16} />
            </UserName>
            <UserDetails>@onlyfans • 9 hours ago</UserDetails>
          </UserInfo>
          <MoreHorizontal size={16} />
        </PostHeader>

        <PostContent>
          <PostText>
            In Costa Rica, <Mention>@saritalfiehes</Mention> reels in a legendary roosterfish and a powerful needlefish—showcasing the thrill of the catch in every moment. 💹️
          </PostText>
          <PostLink>onlyfans.com/saritalfiehes / onlyfans.com/oftv</PostLink>
        </PostContent>

        <PostImage>
          <LocationBadge>QUEPOS, COSTA RICA</LocationBadge>
          <LiveIndicator />
        </PostImage>

        <PostActions>
          <ActionButton>
            <Heart size={18} />
            <span>Like</span>
          </ActionButton>
          <ActionButton>
            <MessageSquare size={18} />
            <span>Comment</span>
          </ActionButton>
          <ActionButton>
            <Send size={18} />
            <span>Share</span>
          </ActionButton>
        </PostActions>
      </Post>

      {/* Generated Posts */}
      {generatePosts()}

      {/* Pagination */}
      <PaginationContainer>
        <PaginationButton 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        
        {[...Array(totalPages)].map((_, i) => (
          <PaginationPageNumber
            key={i}
            active={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </PaginationPageNumber>
        ))}
        
        <PaginationButton 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </ScrollableFeed>
  );
};

export default HomeFeed;