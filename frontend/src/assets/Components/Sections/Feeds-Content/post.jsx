import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PostContainer,
  PostHeader,
  Avatar,
  PostUserInfo,
  PostUsername,
  PostTimestamp,
  PostContent,
  PostMediaContainer,
  PostImage,
  PostVideo,
  PostActions,
  PostActionButton,
  LikeButton,
  CommentButton,
  ShareButton,
  SaveButton,
  LikesCount,
  PostCaption,
  CommentsCount
} from '../../styles/pages/feeds';
import { Heart, MessageCircle, Send, Bookmark } from 'react-feather';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const Post = ({ post, onDelete }) => {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes_count || 0);
  const [showDelete, setShowDelete] = useState(false);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await axios.delete(`/api/posts/${post.id}/like`);
        setLikesCount(likesCount - 1);
      } else {
        await axios.post(`/api/posts/${post.id}/like`);
        setLikesCount(likesCount + 1);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post.id}`);
      onDelete(post.id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <PostContainer 
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <PostHeader>
        <Avatar>
          {post.user?.first_name?.charAt(0) || ''}
          {post.user?.last_name?.charAt(0) || ''}
        </Avatar>
        <PostUserInfo>
          <PostUsername>
            {post.user?.first_name} {post.user?.last_name}
          </PostUsername>
          <PostTimestamp>
            {new Date(post.created_at).toLocaleString()}
          </PostTimestamp>
        </PostUserInfo>
        {user?.id === post.user_id && showDelete && (
          <button 
            onClick={handleDelete}
            style={{ 
              marginLeft: 'auto',
              background: 'none',
              border: 'none',
              color: '#ff4d4f',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        )}
      </PostHeader>

      {post.content && <PostContent>{post.content}</PostContent>}

      {post.PostMedia && post.PostMedia.length > 0 && (
        <PostMediaContainer>
          {post.PostMedia.map((item) => (
            item.media_type === 'image' ? (
              <PostImage key={item.id} src={item.url} alt="Post media" />
            ) : (
              <PostVideo key={item.id} controls>
                <source src={item.url} type={`video/${item.url.split('.').pop()}`} />
              </PostVideo>
            )
          ))}
        </PostMediaContainer>
      )}

      <PostActions>
        <div>
          <PostActionButton onClick={handleLike}>
            <LikeButton isLiked={isLiked}>
              <Heart size={24} fill={isLiked ? '#ff4d4f' : 'none'} color={isLiked ? '#ff4d4f' : 'currentColor'} />
            </LikeButton>
          </PostActionButton>
          <PostActionButton>
            <CommentButton>
              <MessageCircle size={24} />
            </CommentButton>
          </PostActionButton>
          <PostActionButton>
            <ShareButton>
              <Send size={24} />
            </ShareButton>
          </PostActionButton>
        </div>
        <PostActionButton>
          <SaveButton>
            <Bookmark size={24} />
          </SaveButton>
        </PostActionButton>
      </PostActions>

      <LikesCount>{likesCount} likes</LikesCount>
      
      {post.content && (
        <PostCaption>
          <strong>{post.user?.first_name} {post.user?.last_name}</strong> {post.content}
        </PostCaption>
      )}
      
      <CommentsCount>View all {post.comments_count || 0} comments</CommentsCount>
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    created_at: PropTypes.string,
    likes_count: PropTypes.number,
    comments_count: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string
    }),
    PostMedia: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
        media_type: PropTypes.string
      })
    )
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Post;