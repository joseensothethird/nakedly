// ProfileHeader.styles.js
import styled from 'styled-components';
import { CheckCircle } from 'react-feather';

export const ProfileHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: #000; /* Added black text color */
`;

export const Banner = styled.div`
  height: 200px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000; /* Changed to black */
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderContent = styled.div`
  padding: 20px;
  color: #000; /* Added black text color */
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-right: 20px;
  margin-top: -50px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
`;

export const VerifiedBadge = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: white;
  border-radius: 50%;
  padding: 2px;
  color: #ff4b96;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  color: #000; /* Added black text color */
`;

export const Name = styled.h1`
  font-size: 24px;
  margin: 0;
  display: flex;
  align-items: center;
  color: #000; /* Added black text color */
`;

export const Username = styled.p`
  color: #000; /* Changed from #666 to black */
  margin: 5px 0;
`;

export const StatsContainer = styled.div`
  display: flex;
  margin: 15px 0;
`;

export const StatItem = styled.div`
  margin-right: 20px;
  text-align: center;
`;

export const StatNumber = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #000; /* Added black text color */
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #000; /* Changed from #666 to black */
`;

export const Bio = styled.p`
  margin: 15px 0;
  line-height: 1.5;
  color: #000; /* Added black text color */
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  gap: 15px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  color: #000; /* Changed from #666 to black */
  font-size: 14px;
  
  svg {
    margin-right: 5px;
    color: #ff4b96;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
`;

export const SocialIcon = styled.a`
  color: #000; /* Changed from #666 to black */
  font-size: 20px;
  transition: color 0.3s;
  
  &:hover {
    color: #ff4b96;
  }
`;

export const EditButton = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;
  color: #000; /* Added black text color */
  
  &:hover {
    background: #e0e0e0;
  }
  
  svg {
    margin-right: 5px;
  }
`;

export const SubscribeButton = styled.button`
  background: #ff4b96;
  color: #000; /* Changed from white to black */
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #ff2d81;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  color: #000; /* Added black text color */
`;

export const ModalHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: 20px;
    color: #000; /* Added black text color */
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000; /* Changed from #666 to black */
  
  &:hover {
    color: #333;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
`;

export const ModalFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #000; /* Added black text color */
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #000; /* Added black text color */
  
  &:focus {
    outline: none;
    border-color: #ff4b96;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  color: #000; /* Added black text color */
  
  &:focus {
    outline: none;
    border-color: #ff4b96;
  }
`;

export const SaveButton = styled.button`
  background: #ff4b96;
  color: #000; /* Changed from white to black */
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #ff2d81;
  }
`;

export const CancelButton = styled.button`
  background: #f0f0f0;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  color: #000; /* Added black text color */
  
  &:hover {
    background: #e0e0e0;
  }
`;

export const ImagePreviewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const ImageUploadLabel = styled.label`
  display: inline-block;
  padding: 8px 12px;
  background-color: #f0f0f0;
  color: #000; /* Changed from #333 to black */
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;