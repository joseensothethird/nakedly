import React, { useState } from 'react';
import Gallery from '../ProfileContent/ProfileGallery';

import {
  MapPin,
  Calendar,
  Edit,
  UserPlus,
  UserCheck,
  Instagram,
  Twitter,
  Music,
  X,
  Check,
  CreditCard,
  DollarSign
} from 'lucide-react';
import {
  Container,
  BannerWrapper,
  Banner,
  EditButton,
  Content,
  Left,
  ProfileImg,
  Right,
  TopRow,
  NameContainer,
  NameWrapper,
  FirstName,
  LastName,
  Username,
  ActionButtons,
  FollowBtn,
  SubscribeBtn,
  Stats,
  Stat,
  OnlineIndicator,
  Bio,
  Details,
  DetailSection,
  Detail,
  SpecialtiesContainer,
  SpecialtyTags,
  SpecialtyTag,
  Links,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  FormGroup,
  Label,
  Input,
  Textarea,
  ButtonGroup,
  Button,
  SubscriptionPlans,
  PlanCard,
  PlanTitle,
  PlanPrice,
  PlanDescription,
  PaymentMethod,
  PaymentOption
} from '../../styles/pages/profile/profile';

const ProfileHeader = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  // Mock profile data with all fields populated
  const profile = {
    firstName: "Sarah",
    lastName: "Miller",
    username: "sarahmiller",
    profile_image: "https://images.unsplash.com/photo-1494790108755-2616b169fe6c?w=400&h=400&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=950&h=200&fit=crop",
    bio: "Professional photographer and content creator. Capturing life's beautiful moments ✨",
    posts_count: 342,
    subscribers_count: 15200,
    joined_date: "March 2022",
    last_online: "2 hours ago",
    age: 28,
    height: "5'6\"",
    measurements: "34-26-36",
    location: "Los Angeles, CA",
    subscription_price: "$19.99/month",
    content: "Photography, Lifestyle, Travel",
    specialties: ["Portrait Photography", "Travel Content", "Lifestyle Blogging"],
    instagram: "sarahmiller_photos",
    twitter: "sarahm_creative",
    tiktok: "sarahcreates",
    subscription_plans: [
      {
        id: 1,
        name: "Basic Plan",
        price: "$9.99/month",
        description: "Access to basic content and weekly updates"
      },
      {
        id: 2,
        name: "Premium Plan",
        price: "$19.99/month",
        description: "Full access to all content, exclusive posts, and direct messaging"
      },
      {
        id: 3,
        name: "VIP Plan",
        price: "$49.99/month",
        description: "All premium benefits plus personalized content and priority requests"
      }
    ]
  };

  const currentUserId = "user123";
  const isOwner = currentUserId === "user123";
  const DEFAULT_BANNER = "/logo/nakedly.png";
  const DEFAULT_PROFILE = "/logo/users.svg";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleSubscribe = () => {
    if (isSubscribed) {
      setIsSubscribed(false);
    } else {
      setShowSubscribeModal(true);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const confirmSubscription = () => {
    setIsSubscribed(true);
    setShowSubscribeModal(false);
    setSelectedPlan(null);
  };

  return (
    <Container>
      <BannerWrapper>
        <Banner
          src={profile.banner || DEFAULT_BANNER}
          alt="Profile Banner"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_BANNER;
          }}
        />
        {isOwner && (
          <EditButton onClick={() => setShowEditModal(true)}>
            <Edit size={14} />
            Edit Profile
          </EditButton>
        )}
      </BannerWrapper>

      <Content>
        <Left>
          <ProfileImg
            src={profile.profile_image || DEFAULT_PROFILE}
            alt={`${profile.firstName} ${profile.lastName}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_PROFILE;
            }}
          />
        </Left>

        <Right>
          <TopRow>
            <NameWrapper>
              <NameContainer>
          <FirstName>
  {profile.firstName} {profile.lastName} @{profile.username} <Button>Follow + </Button>
</FirstName>
            
              </NameContainer>
            
            </NameWrapper>
            {!isOwner && (
              <ActionButtons>
                <SubscribeBtn onClick={handleSubscribe}>
                  {isSubscribed ? <Check size={16} /> : <DollarSign size={16} />}
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </SubscribeBtn>
              </ActionButtons>
            )}
          </TopRow>

          <Stats>
            <Stat>
              <strong>{profile.posts_count}</strong>
              <span>posts</span>
            </Stat>
            <Stat>
              <strong>{profile.subscribers_count}</strong>
              <span>subscribers</span>
            </Stat>
            <Stat>
              <Calendar size={14} />
              <span>Joined {profile.joined_date}</span>
            </Stat>
            <Stat>
              <OnlineIndicator />
              <span>Last online: {profile.last_online}</span>
            </Stat>
          </Stats>

          <Bio>{profile.bio}</Bio>

          <Details>
            <DetailSection>
              <Detail>
                <strong>Age:</strong>
                <span>{profile.age}</span>
              </Detail>
              <Detail>
                <strong>Height:</strong>
                <span>{profile.height}</span>
              </Detail>
              <Detail>
                <strong>Measurements:</strong>
                <span>{profile.measurements}</span>
              </Detail>
              <Detail>
                <MapPin size={14} />
                <span>{profile.location}</span>
              </Detail>
            </DetailSection>
            <DetailSection>
              <Detail>
                <strong>Subscription:</strong>
                <span>{profile.subscription_price}</span>
              </Detail>
              <Detail>
                <strong>Content:</strong>
                <span>{profile.content}</span>
              </Detail>
              <SpecialtiesContainer>
                <strong>Specialties:</strong>
                <SpecialtyTags>
                  {profile.specialties.map((specialty, index) => (
                    <SpecialtyTag key={index}>{specialty}</SpecialtyTag>
                  ))}
                </SpecialtyTags>
              </SpecialtiesContainer>
            </DetailSection>
          </Details>

          <Links>
            <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
            <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
            <a href={`https://tiktok.com/@${profile.tiktok}`} target="_blank" rel="noopener noreferrer">
              <Music size={24} />
            </a>
          </Links>
        </Right>
      </Content>

      {showEditModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Profile</ModalTitle>
              <CloseButton onClick={() => setShowEditModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            
            <div>
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" defaultValue={profile.firstName} />
              </FormGroup>
              
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" defaultValue={profile.lastName} />
              </FormGroup>
              
              <FormGroup>
                <Label>Username</Label>
                <Input type="text" defaultValue={profile.username} />
              </FormGroup>
              
              <FormGroup>
                <Label>Bio</Label>
                <Textarea defaultValue={profile.bio} rows={3} />
              </FormGroup>
              
              <FormGroup>
                <Label>Location</Label>
                <Input type="text" defaultValue={profile.location} />
              </FormGroup>
              
              <FormGroup>
                <Label>Age</Label>
                <Input type="number" defaultValue={profile.age} />
              </FormGroup>
              
              <ButtonGroup>
                <Button className="secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </Button>
                <Button className="primary" onClick={() => setShowEditModal(false)}>
                  Save Changes
                </Button>
              </ButtonGroup>
            </div>
          </ModalContent>
        </Modal>
      )}

      {showSubscribeModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{isSubscribed ? 'Manage Subscription' : 'Choose a Plan'}</ModalTitle>
              <CloseButton onClick={() => setShowSubscribeModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            
           
          </ModalContent>
        </Modal>
      )}
      <Gallery />
    </Container>
  );
};

export default ProfileHeader;