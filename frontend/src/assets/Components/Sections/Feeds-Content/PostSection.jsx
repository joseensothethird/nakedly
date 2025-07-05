// components/feeds/NewPost.js
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { 
  Image as ImageIcon,
  Smile,
  MapPin,
  X
} from 'react-feather';
import { 
  NewPostContainer,
  NewPostTextarea,
  NewPostActions,
  NewPostActionButton,
  PostHeader,
  Avatar,
  ActionButton,
  ImagePreviewContainer,
  ImagePreview,
  RemoveImageButton
} from '../../styles/pages/feeds';

const NewPost = ({ onSubmit, currentUser = {} }) => {
  const [newPostText, setNewPostText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Handle case when currentUser is not loaded yet
  if (!currentUser || Object.keys(currentUser).length === 0) {
    return (
      <NewPostContainer>
        <div>Loading user data...</div>
      </NewPostContainer>
    );
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter(file => 
      file.type.match('image.*') && file.size <= 5 * 1024 * 1024 // 5MB limit
    );

    if (validImages.length + selectedImages.length > 4) {
      alert('You can upload a maximum of 4 images');
      return;
    }

    const imagePreviews = validImages.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setSelectedImages([...selectedImages, ...imagePreviews]);
  };

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    URL.revokeObjectURL(newImages[index].preview); // Clean up memory
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPostText.trim() && selectedImages.length === 0) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('content', newPostText);
      formData.append('user_id', currentUser.id);
      
      selectedImages.forEach((image, index) => {
        formData.append(`images[${index}]`, image.file);
      });

      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to create post');

      const newPost = await response.json();
      onSubmit(newPost);
      setNewPostText('');
      setSelectedImages([]);
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <NewPostContainer>
      <PostHeader>
        <Avatar>
          {currentUser?.first_name?.charAt(0) || ''}
          {currentUser?.last_name?.charAt(0) || ''}
        </Avatar>
        <NewPostTextarea
          placeholder="What's happening?"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
      </PostHeader>

      {selectedImages.length > 0 && (
        <ImagePreviewContainer>
          {selectedImages.map((image, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <ImagePreview src={image.preview} alt={`Preview ${index}`} />
              <RemoveImageButton onClick={() => removeImage(index)}>
                <X size={16} />
              </RemoveImageButton>
            </div>
          ))}
        </ImagePreviewContainer>
      )}

      <NewPostActions>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            multiple
            style={{ display: 'none' }}
          />
          <NewPostActionButton type="button" onClick={triggerFileInput}>
            <ImageIcon size={18} />
          </NewPostActionButton>
          <NewPostActionButton>
            <Smile size={18} />
          </NewPostActionButton>
          <NewPostActionButton>
            <MapPin size={18} />
          </NewPostActionButton>
        </div>
        <ActionButton 
          onClick={handleSubmit}
          disabled={(!newPostText.trim() && selectedImages.length === 0) || isUploading}
        >
          {isUploading ? 'Posting...' : 'Post'}
        </ActionButton>
      </NewPostActions>
    </NewPostContainer>
  );
};

NewPost.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string
  })
};

NewPost.defaultProps = {
  currentUser: {}
};

export default NewPost;