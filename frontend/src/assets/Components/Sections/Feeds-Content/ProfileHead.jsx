import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFemale,
  FaRulerVertical,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import { CheckCircle } from "react-feather";
// Import styled components
import {
  ProfileHeaderContainer,
  Banner,
  HeaderContent,
  HeaderTop,
  AvatarContainer,
  Avatar,
  VerifiedBadge,
  ProfileInfo,
  Name,
  Username,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
  Bio,
  DetailsContainer,
  DetailItem,
  SocialLinks,
  SocialIcon,
  EditButton,
  SubscribeButton,
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
} from "../../styles/pages/profile/profile";

const ProfileHeader = ({ isSubscribed = false, onSubscribeClick }) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    location: "",
    age: "",
    height: "",
    measurements: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    subscription_price: "",
    image: "",
    banner: "",
    specialties: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setModel(null);
          return;
        }

        // Fetch profile data
        const response = await axios.get("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setModel(response.data);

        // Set form data
        if (response.data) {
          setFormData({
            username: response.data.username || "",
            bio: response.data.bio || "",
            location: response.data.location || "",
            age: response.data.age || "",
            height: response.data.height || "",
            measurements: response.data.measurements || "",
            instagram: response.data.instagram || "",
            twitter: response.data.twitter || "",
            tiktok: response.data.tiktok || "",
            subscription_price: response.data.subscription_price || "",
            image: response.data.image || "",
            banner: response.data.banner || "",
            specialties: response.data.specialties || [],
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

const handleImageUpload = async (e, type) => {
  const file = e.target.files[0];
  const token = localStorage.getItem("token");
  if (!file || !token) return;

  const formData = new FormData();
  formData.append("image", file);

  const endpoint =
    type === "banner"
      ? "http://localhost:5000/api/upload/banner"
      : "http://localhost:5000/api/upload/profile";

  try {
    const res = await axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    const imageUrl = res.data.imageUrl;

    setFormData((prev) => ({
      ...prev,
      [type]: imageUrl, // either 'image' or 'banner'
    }));
  } catch (err) {
    console.error("Error uploading image:", err);
  }
};



  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put('http://localhost:5000/api/profile', formData, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

      setModel(response.data);
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <div>Loading profile...</div>;
  if (!model) return <a href="/login">Login to view your profile</a>;

  return (
    <ProfileHeaderContainer>
      <Banner style={{ backgroundImage: `url(${model.banner || "https://via.placeholder.com/1200x400"})` }}>
        {`Welcome to ${model.username || "Model"}'s Profile`}
      </Banner>

      <HeaderContent>
        <HeaderTop>
          <AvatarContainer>
            <Avatar src={model.image || "https://randomuser.me/api/portraits/women/44.jpg"} alt={model.username} />
            {model.is_verified && (
              <VerifiedBadge>
                <CheckCircle size={15} />
              </VerifiedBadge>
            )}
          </AvatarContainer>

          <ProfileInfo>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Name>
                {model.username}
                {model.is_verified && (
                  <CheckCircle
                    size={18}
                    color="#ff4b96"
                    style={{ marginLeft: "5px" }}
                  />
                )}
              </Name>
              <EditButton onClick={handleEditProfile}>
                <FaEdit /> Edit Profile
              </EditButton>
            </div>
            <Username>@{model.username}</Username>

            <StatsContainer>
              <StatItem>
                <StatNumber>0</StatNumber>
                <StatLabel>Posts</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>0</StatNumber>
                <StatLabel>Followers</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>0</StatNumber>
                <StatLabel>Following</StatLabel>
              </StatItem>
            </StatsContainer>

            {!isSubscribed && model.subscription_price && (
              <SubscribeButton onClick={onSubscribeClick}>
                Subscribe for ${model.subscription_price}/month
              </SubscribeButton>
            )}
          </ProfileInfo>
        </HeaderTop>

        <Bio>{model.bio || "No bio yet. Follow me for exclusive content!"}</Bio>

        <DetailsContainer>
          {model.location && (
            <DetailItem>
              <FaMapMarkerAlt /> {model.location}
            </DetailItem>
          )}
          {model.created_at && (
            <DetailItem>
              <FaCalendarAlt /> Joined{" "}
              {new Date(model.created_at).toLocaleDateString()}
            </DetailItem>
          )}
          {model.age && (
            <DetailItem>
              <FaFemale /> {model.age} years
            </DetailItem>
          )}
          {model.height && (
            <DetailItem>
              <FaRulerVertical /> {model.height}
            </DetailItem>
          )}
          {model.measurements && (
            <DetailItem>
              <FaFemale /> {model.measurements}
            </DetailItem>
          )}
        </DetailsContainer>

        {model.specialties && model.specialties.length > 0 && (
          <DetailsContainer>
            <DetailItem>
              <strong>Specialties: </strong>
              {model.specialties.join(", ")}
            </DetailItem>
          </DetailsContainer>
        )}

        <SocialLinks>
          {model.instagram && (
            <SocialIcon
              href={`https://instagram.com/${model.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIcon>
          )}
          {model.twitter && (
            <SocialIcon
              href={`https://twitter.com/${model.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIcon>
          )}
          {model.tiktok && (
            <SocialIcon
              href={`https://tiktok.com/@${model.tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </SocialIcon>
          )}
        </SocialLinks>
      </HeaderContent>

      {/* Edit Profile Modal */}
      {showEditModal && (
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
                    <ImagePreview
                      src={formData.banner}
                      alt="Banner Preview"
                    />
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
                    <ImagePreview
                      src={formData.image}
                      alt="Profile Preview"
                    />
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
      )}
    </ProfileHeaderContainer>
  );
};

export default ProfileHeader;