// components/feeds/HomeFeed.js
import React from 'react';
import { 
  CheckCircle,
  Heart,
  MessageSquare,
  Send,
  MoreHorizontal
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
  ActionButton 
} from '../../styles/pages/feeds';

const HomeFeed = () => {
  return (
    <ScrollableFeed>
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
      
      {/* Additional posts */}
      {[...Array(5)].map((_, i) => (
        <Post key={i}>
          <PostHeader>
            <Avatar>U{i+1}</Avatar>
            <UserInfo>
              <UserName>
                User {i+1} <CheckCircle size={16} />
              </UserName>
              <UserDetails>@user{i+1} • {i+1} hours ago</UserDetails>
            </UserInfo>
            <MoreHorizontal size={16} />
          </PostHeader>

          <PostContent>
            <PostText>
              This is sample post content #{i+1} to demonstrate scrolling in the main feed area.
            </PostText>
          </PostContent>

          <PostImage style={{ backgroundImage: `url(https://picsum.photos/600/400?random=${i})` }}>
            <LocationBadge>LOCATION {i+1}</LocationBadge>
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
      ))}
    </ScrollableFeed>
  );
};

export default HomeFeed;