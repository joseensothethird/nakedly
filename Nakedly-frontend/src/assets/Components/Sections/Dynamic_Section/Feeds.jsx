import React from 'react';
import styled from 'styled-components';
import { Play, CheckCircle } from 'lucide-react';

const NakedlyLogo = '/logo/nakedly.png'; 
// Responsive Container
const Container = styled.div`
  max-width: 100%;
  height:80vh;
  margin: 0 auto;
  background: linear-gradient(135deg, #87CEEB 0%, #1E90FF 100%);
  min-height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Responsive Feed Container
const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
  gap: 20px;
  justify-items: center;
  margin-bottom: 20px;
  width: 100%;
  

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

// Responsive Post Card
const PostCardContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 500px;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border:1px solid #1E90FF;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  font-size: 16px;
  color:black;
`;

const Handle = styled.div`
  color: #666;
  font-size: 14px;
`;

const Timestamp = styled.div`
  color: #999;
  font-size: 14px;
`;

const PostContent = styled.div`
  padding: 0 16px 16px;
`;

const PostText = styled.p`
  margin: 0 0 12px 0;
  line-height: 1.5;
  color: #000 !important;
`;

const ReadMore = styled.a`
  color: #1DA1F2;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: ${props => props.background || 'black'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ensures nothing spills out */
`;
const MediaContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(0,0,0,0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0,0,0,0.8);
    transform: scale(1.1);
  }
`;

const LocationTag = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255,193,7,0.9);
  color: black;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  transform: rotate(-2deg);
`;

const VlogTag = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const GolfTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(139,69,19,0.9);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  line-height: 1.2;
`;
const SeeMoreLink = styled.a`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #1E90FF;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #104E8B;
  }
`;

// Data structure for all posts
const postsData = [
  {
    id: 1,
    user: {
      name: "Saritas Fishes",
      handle: "@saritasfishes",
      avatar: NakedlyLogo,
      verified: true
    },
    timestamp: "8 hours ago",
    content: {
      text: "In Costa Rica, @saritafishes reels in a legendary roosterfish and a power-",
      readMore: true
    },
    media: {
      background: `
        linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
        url('https://cdn2.onlyfans.com/files/3/34/34c63c05242b009df5ca52ce75ba3e15/960x540_84fbb0144ea639b5e9904fa9154f6b77.jpg?Tag=2&u=0&Expires=1751108400&Signature=WNn7kXOnPFQJOPqGd7YZfzDrr6s4teMFUivkeqiuVVRFW7EhxgE4JCnHdA44OugMQK9Vvxw6VnpBfy0c1KzrChmbFruLEPQhTWJpbOm5pe9fkZhCqznnIVECUGeoZp4jPqi2XKCjC69FKzY2bFhaVD3nNR4oaTwpnaxFshCLVBMnSrWvJP0uVmEFO4Y2hiW-PjUFd~bo3BeiYemZveBRfTCUppi9MMceNaN9LY7VOHRw~wK3kjlDHQJs~Pn0yj9wb8vb2FshmR9Pn2x6VSHAoal8y7UE5PbtnQX9qcy6zbcTi-pTqzmbreyDcBkbWrliPL77f33CVzLgZFuVdUjZMA__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD')
      `,
      hasPlayButton: true,
      overlay: {
        type: "location",
        text: "QUEPOS, COSTA RICA",
        position: "top-left",
        style: "yellow"
      }
    }
  },
  {
    id: 2,
    user: {
      name: "Kyndal Lynnfree",
      handle: "@kyndal_lynnfree", 
      avatar: NakedlyLogo,
      verified: true
    },
    timestamp: "14 hours ago",
    content: {
      text: "Just two girls, one boat, and plenty of fish to catch off the coast of",
      readMore: true
    },
    media: {
      background: `
        linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
        url('https://cdn2.onlyfans.com/files/b/bc/bcbc5db0b5e9e8e492f1836c876fa8f9/960x540_50c4867c383197bd41619df12787f093.jpg?Tag=2&u=0&Expires=1751112000&Signature=O6rq3ww3-pfwLj1iEwU~1kbGBZbU-B42NUV0yiazxta8~R4CKpxiO8GFA3oFIGLH6qVteHqzc4quPWSsAKqySy8YCVNFDJKA5-HOwCy6uANQRzpzziZAX~eBc-UiFlDdJpOHJS5maS-m9YWvFJbhH4rzVMX6Z7mkiDxu6jBqgeZnfnntfwYXIcNJG2rAVQRD~9D5xEri5mi2a51KmkcExjuXyT0Dj8E5M1-~BhUecxbsJ3U1OcDk4Zr6hHPK0RQvqHS4n03K5GgtWxOKuXeg-aKpAs2yShc0kaQ73P-YaQ5J2ggCnmN396DWGVn3tZ3wWwtmW2X0POSfYZswNqx-qA__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD')
      `,
      hasPlayButton: true,
      overlay: {
        type: "location",
        text: "Mexico, Texas",
        position: "top-left",
        style: "yellow"
      }
    }
  },
  {
    id: 3,
    user: {
      name: "Vannae Inerson",
      handle: "@vannaeinerson",
      avatar: NakedlyLogo,  
      verified: true
    },
    timestamp: "Yesterday",
    content: {
      text: "@vannaeinerson hits the course at golden hour for a dreamy sunset",
      readMore: true
    },
    media: {
      background: `
        linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
        url('https://cdn2.onlyfans.com/files/6/6e/6ee4a9cf6714c9ac64ff5c0fa6fac9b6/960x540_e4db2bb65b080dfa6ddfde1293dca11f.jpg?Tag=2&u=0&Expires=1751112000&Signature=habb3vzz6nvQdCZLgd1mYOpLl8gsVMzdUmjNzovbHJw-oIqURt5V2ajxqhUpRwz1nbk9NtELeBhkx74rmv~zBjLP79Y4n7TT8BxDqN2EXqUP-LGr~c31WKCMKtHAT4R~tjlKAbW8LwEPWfxrZ2HPOZlcPIPCHG1qX4mhbIpCs753LUQtUEX4eGRafR56WYuDTkoQLO3vTmQzvwRYHWWpH3-N6XtlxrbPh7v1Z96zSq4mfSRHg98JOnUtlK-VfAzpT7nIVSeoZ8dtx2Mant28u~UXNdC7mkwulRVW0avtMQ3KhW32XLgWa5vYWKTfHEp-WLwJwXzsGrSrx5sRKComGg__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD')
      `,
      hasPlayButton: true,
       overlay: {
        type: "location",
        text: "Canada, Los Angeles",
        position: "top-left",
        style: "yellow"
      }
    }
  }
];

// Single template component for post cards
const PostCard = ({ post }) => {
  const renderOverlay = (overlay) => {
    if (!overlay) return null;

    if (overlay.type === "location") {
      return <LocationTag>{overlay.text}</LocationTag>;
    }
    
    if (overlay.type === "vlog") {
      return (
        <VlogTag>
          {overlay.lines.map((line, i) => (
            <div key={i} style={i === 0 ? {} : i === 1 ? { fontSize: '12px' } : { fontSize: '18px', fontWeight: 'bold' }}>
              {line}
            </div>
          ))}
        </VlogTag>
      );
    }
    
    if (overlay.type === "text") {
      return (
        <GolfTag>
          {overlay.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < overlay.lines.length - 1 && <br />}
            </span>
          ))}
        </GolfTag>
      );
    }
  };

  return (
    <PostCardContainer>
      <PostHeader>
        <Avatar src={post.user.avatar} alt="User avatar" />
        <UserInfo>
          <Username>
            {post.user.name} {post.user.verified && <CheckCircle size={16} color="#1DA1F2" />}
          </Username>
          <Handle>{post.user.handle}</Handle>
        </UserInfo>
        <Timestamp>{post.timestamp}</Timestamp>
      </PostHeader>
      
    <PostContent>
  <PostText>{post.content.text}</PostText>
  {post.content.readMore && <ReadMore href="/nakedly">Read more</ReadMore>}
</PostContent>


      
     <MediaContainer background={post.media.background}>
        <MediaContent>
          {renderOverlay(post.media.overlay)}
          {post.media.hasPlayButton && (
            <PlayButton>
              <Play size={24} fill="white" />
            </PlayButton>
          )}
        </MediaContent>
      </MediaContainer>
    </PostCardContainer>
  );
};

export default function OnlyFansFeed() {
  return (
    <Container>
      <FeedContainer>
        {postsData.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </FeedContainer>
    </Container>
  );
}