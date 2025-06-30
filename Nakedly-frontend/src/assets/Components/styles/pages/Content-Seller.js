import styled from 'styled-components';

export const ChannelContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: white;
`;

export const AdminControls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 20px;
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const ChannelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 40px;
  color: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ChannelAvatarContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const ChannelAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const UploadButton = styled.label`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  input {
    display: none;
  }
`;

export const ChannelInfo = styled.div`
  flex: 1;
`;

export const ChannelName = styled.h1`
  margin: 0 0 8px 0;
  color: #111;
  font-size: 2rem;
  font-weight: 700;
`;

export const ChannelMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  color: #666;
  font-size: 0.95rem;
  flex-wrap: wrap;
`;

export const ChannelCountry = styled.span`
  font-weight: 500;
`;

export const ChannelStats = styled.span`
  font-weight: 500;
`;

export const DotSeparator = styled.span`
  opacity: 0.6;
`;

export const ChannelDescription = styled.p`
  margin: 0 0 24px 0;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

export const SubscribeButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 75, 87, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 75, 87, 0.3);
  }
`;

export const ContentTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const TabButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.$active ? '#4e6bff' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 40px;
`;

export const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1/1;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.5s ease;
  filter: ${props => props.$isBlurred ? 'blur(12px) brightness(0.7)' : 'none'};
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: ${props => props.$isBlurred ? 'blur(12px) brightness(0.7)' : 'none'};
`;

export const EditOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
`;

export const PremiumOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.$isHovered 
    ? 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)' 
    : 'rgba(0, 0, 0, 0.5)'};
  color: white;
  transition: all 0.3s ease;
  padding: 20px;
  text-align: center;
`;

export const LockIcon = styled.div`
  margin-bottom: 16px;
  svg {
    width: 48px;
    height: 48px;
  }
`;

export const OverlayText = styled.div`
  font-size: ${props => props.$isHovered ? '1.1rem' : '0.9rem'};
  font-weight: ${props => props.$isHovered ? '500' : '400'};
  margin-bottom: ${props => props.$isHovered ? '20px' : '0'};
  opacity: ${props => props.$isHovered ? '1' : '0.9'};
  transition: all 0.3s ease;
  max-width: 80%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #000;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 5px;

  &:hover {
    color: #333;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;