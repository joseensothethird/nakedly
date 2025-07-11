import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalFooter,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SaveButton,
  CancelButton,
  ImagePreviewContainer,
  ImagePreview,
  ImageUploadLabel,
} from '../styles/pages/profile/profile';

const EditProfileModal = ({
  showEditModal,
  handleCloseModal,
  formData,
  handleInputChange,
  handleArrayChange,
  handleImageUpload,
  handleSaveProfile,
}) => {
  if (!showEditModal) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Edit Profile</h2>
          <CloseButton onClick={handleCloseModal}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <FormLabel>Banner Image</FormLabel>
            <ImageUploadLabel htmlFor="banner-upload">
              Choose Banner Image
              <FormInput
                id="banner-upload"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "banner")}
                style={{ display: "none" }}
              />
            </ImageUploadLabel>
            {formData.banner && (
              <ImagePreviewContainer>
                <ImagePreview src={formData.banner} alt="Banner Preview" />
              </ImagePreviewContainer>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Profile Image</FormLabel>
            <ImageUploadLabel htmlFor="profile-upload">
              Choose Profile Image
              <FormInput
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "profile")}
                style={{ display: "none" }}
              />
            </ImageUploadLabel>
            {formData.image && (
              <ImagePreviewContainer>
                <ImagePreview src={formData.image} alt="Profile Preview" />
              </ImagePreviewContainer>
            )}
          </FormGroup>

          <FormGroup>
            <FormLabel>Username</FormLabel>
            <FormInput
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Bio</FormLabel>
            <FormTextarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Location</FormLabel>
            <FormInput
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Age</FormLabel>
            <FormInput
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Height</FormLabel>
            <FormInput
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="e.g. 5'6"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Measurements</FormLabel>
            <FormInput
              type="text"
              name="measurements"
              value={formData.measurements}
              onChange={handleInputChange}
              placeholder="e.g. 34-24-36"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Specialties (comma separated)</FormLabel>
            <FormInput
              type="text"
              name="specialties"
              value={formData.specialties.join(", ")}
              onChange={handleArrayChange}
              placeholder="e.g. Modeling, Photography, Dancing"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Subscription Price</FormLabel>
            <FormInput
              type="text"
              name="subscription_price"
              value={formData.subscription_price}
              onChange={handleInputChange}
              placeholder="e.g. 9.99"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Social Links</FormLabel>
            <FormInput
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              placeholder="Instagram username"
            />
            <FormInput
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              placeholder="Twitter username"
              style={{ marginTop: "5px" }}
            />
            <FormInput
              type="text"
              name="tiktok"
              value={formData.tiktok}
              onChange={handleInputChange}
              placeholder="TikTok username"
              style={{ marginTop: "5px" }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={handleSaveProfile}>Save Changes</SaveButton>
          <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditProfileModal;