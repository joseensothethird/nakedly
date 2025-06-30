import React, { useState } from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaComment,
  FaShare,
  FaFemale,
  FaRulerVertical,
  FaFilm,
  FaStar
} from "react-icons/fa";
import { CheckCircle } from 'react-feather';

// Icon components
const BodyIcon = styled(FaFemale)``;
const RulerIcon = styled(FaRulerVertical)``;
const FilmIcon = styled(FaFilm)``;
const StarIcon = styled(FaStar)``;

const ProfileFeed = ({ isCurrentUser = false, isSubscribed = false }) => {
  const model = {
    id: "MDL-2023-0471",
    name: "Sakura Arai",
    username: "@sakuraVIP",
    age: 22,
    height: "172cm",
    measurements: "80-58-83",
    location: "Tokyo",
    bio: "Japanese model creating exclusive content for my special fans 💖",
    content: "Softcore, Solo Play",
    specialties: ["Lingerie", "Swimsuit", "Cosplay"],
    socialMedia: {
      instagram: "sakura_arai",
      twitter: "sakuraofficial",
      tiktok: "sakuramodel"
    },
    subscriptionPrice: "$12.99/month",
    postsCount: 215,
    subscribersCount: "18.7K",
    lastOnline: "1 hour ago",
    joinedDate: "March 2023",
    image: "https://images.unsplash.com/photo-1536763225213-b5592b00b9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  };

  const samplePosts = [
    { 
      id: 1,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      caption: "Morning tease for my favorite subscribers 😘 #exclusive",
      isPremium: true,
      likes: 1243,
      comments: 89,
      date: "2 hours ago"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
      caption: "Free preview of what you're missing out on 😉",
      isPremium: false,
      likes: 2456,
      comments: 132,
      date: "1 day ago"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
      caption: "Sneak peek from yesterday's private shoot 🔥",
      isPremium: true,
      likes: 1872,
      comments: 104,
      date: "3 days ago"
    }
  ];

  const samplePhotos = Array(6).fill("https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600");
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  return (
    <ProfileContainer>
      {showSubscribeModal && (
        <SubscribeModal>
          <ModalContent>
            <h3>Unlock {model.name}'s Exclusive Content</h3>
            <PriceTag>{model.subscriptionPrice}</PriceTag>
            <BenefitsList>
              <li>Full access to all content</li>
              <li>Direct messaging</li>
              <li>Exclusive videos & photos</li>
              <li>Custom content requests</li>
            </BenefitsList>
            <SubscribeButton>Subscribe Now</SubscribeButton>
            <CloseButton onClick={() => setShowSubscribeModal(false)}>
              Not Now
            </CloseButton>
          </ModalContent>
        </SubscribeModal>
      )}

      <ProfileHeader>
        <ProfileBanner />
        <ProfileInfo>
          <Avatar src={model.image} />
          <ProfileDetails>
            <UserName>
              {model.name} <CheckCircle size={16} color="#1DA1F2" />
              {model.age && <AgeBadge>{model.age}</AgeBadge>}
            </UserName>
            <UserHandle>{model.username}</UserHandle>
            
            <StatsContainer>
              <Stat>
                <StatNumber>{model.postsCount}</StatNumber>
                <StatLabel>Posts</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{model.subscribersCount}</StatNumber>
                <StatLabel>Subscribers</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{model.lastOnline}</StatNumber>
                <StatLabel>Last Online</StatLabel>
              </Stat>
            </StatsContainer>
            
            <Bio>{model.bio}</Bio>
            
            <DetailsGrid>
              {model.measurements && (
                <DetailItem>
                  <BodyIcon /> {model.measurements}
                </DetailItem>
              )}
              {model.height && (
                <DetailItem>
                  <RulerIcon /> {model.height}
                </DetailItem>
              )}
              {model.location && (
                <DetailItem>
                  <FaMapMarkerAlt /> {model.location}
                </DetailItem>
              )}
              {model.content && (
                <DetailItem>
                  <FilmIcon /> {model.content}
                </DetailItem>
              )}
              {model.specialties && (
                <DetailItem>
                  <StarIcon /> {model.specialties.join(", ")}
                </DetailItem>
              )}
              <DetailItem>
                <FaCalendarAlt /> Joined {model.joinedDate}
              </DetailItem>
            </DetailsGrid>
            
            <SocialLinks>
              {model.socialMedia?.instagram && (
                <SocialLink href={`https://instagram.com/${model.socialMedia.instagram}`} target="_blank">
                  <FaInstagram size={20} />
                </SocialLink>
              )}
              {model.socialMedia?.twitter && (
                <SocialLink href={`https://twitter.com/${model.socialMedia.twitter}`} target="_blank">
                  <FaTwitter size={20} />
                </SocialLink>
              )}
              {model.socialMedia?.tiktok && (
                <SocialLink href={`https://tiktok.com/@${model.socialMedia.tiktok}`} target="_blank">
                  <FaTiktok size={20} />
                </SocialLink>
              )}
            </SocialLinks>
          </ProfileDetails>
          
          {!isCurrentUser && (
            <SubscribeButton onClick={() => setShowSubscribeModal(true)}>
              Subscribe {model.subscriptionPrice}
            </SubscribeButton>
          )}
        </ProfileInfo>
      </ProfileHeader>

      <ContentFeed>
        {samplePosts.map(post => {
          const shouldBlur = post.isPremium && !isSubscribed && !isCurrentUser;
          return (
            <Post key={post.id}>
              <PostImageContainer onClick={() => shouldBlur && setShowSubscribeModal(true)}>
                <PostImage src={post.image} blurred={shouldBlur} />
                {shouldBlur && (
                  <BlurOverlay>
                    <FaLock size={24} />
                    <span>Subscribe to unlock</span>
                  </BlurOverlay>
                )}
                {post.isPremium && (
                  <PremiumBadge>Premium</PremiumBadge>
                )}
              </PostImageContainer>
              <PostCaption>{post.caption}</PostCaption>
              <PostStats>
                <StatItem>
                  <FaHeart /> {post.likes.toLocaleString()}
                </StatItem>
                <StatItem>
                  <FaComment /> {post.comments.toLocaleString()}
                </StatItem>
                <StatItem>
                  <FaShare />
                </StatItem>
                <PostDate>{post.date}</PostDate>
              </PostStats>
            </Post>
          );
        })}
      </ContentFeed>

      <GallerySection>
        <GalleryHeader>
          <h3>Gallery</h3>
          {!isSubscribed && !isCurrentUser && (
            <SubscribePrompt onClick={() => setShowSubscribeModal(true)}>
              Subscribe to unlock all
            </SubscribePrompt>
          )}
        </GalleryHeader>
        <GalleryGrid>
          {samplePhotos.map((photo, index) => {
            const shouldBlur = index >= 2 && !isSubscribed && !isCurrentUser;
            return (
              <GalleryItem 
                key={index} 
                onClick={() => shouldBlur && setShowSubscribeModal(true)}
                blurred={shouldBlur}
              >
                <GalleryImage src={photo} alt="" />
                {shouldBlur && (
                  <BlurOverlay>
                    <FaLock size={20} />
                    <span>Subscribe</span>
                  </BlurOverlay>
                )}
              </GalleryItem>
            );
          })}
        </GalleryGrid>
      </GallerySection>
    </ProfileContainer>
  );
};

// Styled Components
const ProfileContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  color: #333;
  overflow-x: hidden;
`;

const ProfileHeader = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`;

const ProfileBanner = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #ff0076, #590fb7);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  margin-top: -75px;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 0 2rem;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1;
`;

const ProfileDetails = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const UserName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const UserHandle = styled.p`
  margin: 0.25rem 0;
  color: #fff;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const Bio = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  text-align: center;
  color:black;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1rem;
  margin: 1rem 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  color: #666;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #ff0076;
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(45deg, #ff0076, #590fb7);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  height: fit-content;
  transition: transform 0.2s;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 250px;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ContentFeed = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

const Post = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const PostImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${props => props.blurred ? 'blur(15px)' : 'none'};
  transition: filter 0.3s ease;
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.3);
  color: white;
  gap: 10px;
  font-weight: bold;
  height: 100%;
`;

const PremiumBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(45deg, #ff0076, #590fb7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const PostCaption = styled.p`
  padding: 0.5rem 1rem;
  margin: 0;
  color: black;
  line-height: 1.3;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex: 1;
`;

const PostStats = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid #eee;
  font-size: 0.8rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff0076;
  }
`;

const PostDate = styled.div`
  margin-left: auto;
  color: #666;
  font-size: 0.8rem;
`;

const AgeBadge = styled.span`
  background: #ff0076;
  color: white;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const SubscribeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const PriceTag = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff0076;
  margin: 1rem 0;
`;

const BenefitsList = styled.ul`
  text-align: left;
  padding-left: 1.5rem;
  margin: 1.5rem 0;

  li {
    margin-bottom: 0.75rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  margin-top: 1rem;
`;

const GallerySection = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
`;

const SubscribePrompt = styled.button`
  background: none;
  border: none;
  color: #3a86ff;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const GalleryItem = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  filter: ${props => props.blurred ? 'blur(3px)' : 'none'};
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    width: calc(50% - 0.5rem);
    height: auto;
    aspect-ratio: 1;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ProfileFeed;