import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Lock, Heart, MessageSquare, Star } from "react-feather";
import {
  SectionContainer,
  GridContainer,
  SectionTitle,
  SectionSubtitle,
  ModelCard,
  ModelImageContainer,
  ModelInfo,
  ModelHeader,
  ModelName,
  ModelUsername,
  ModelPrice,
  ModelDescription,
  ModelMeta,
  ModelStats,
  StatItem,
  ModelRating,
  PremiumBadge,
  OnlineBadge,
  SubscribeButton,
  LoadingSpinner,
  ErrorMessage,
  PaginationContainer,
  PageButton,
  Ellipsis,
} from "../styles/pages/channel-card";

const OnlyFansModelsSection = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modelsPerPage] = useState(6); // Show 6 models per page

  useEffect(() => {
    const fetchModels = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const mockModels = [
          {
            id: 1,
            name: "Bella Rose",
            username: "@bellarose",
            country: "USA",
            age: 24,
            image:
              "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww",
            isPremium: true,
            price: "$12.99/mo",
            likes: "245k",
            rating: 4.8,
            posts: "1.2k",
            description: "Fitness model & lifestyle content",
            isOnline: true,
          },
          {
            id: 2,
            name: "Alex Morgan",
            username: "@alexmorgan",
            country: "UK",
            age: 27,
            image:
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
            isPremium: true,
            price: "$9.99/mo",
            likes: "182k",
            rating: 4.5,
            posts: "856",
            description: "Cosplay and gaming enthusiast",
            isOnline: false,
          },
          {
            id: 3,
            name: "Sophia Lee",
            username: "@sophialee",
            country: "Australia",
            age: 22,
            image:
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$14.99/mo",
            likes: "321k",
            rating: 4.9,
            posts: "2.1k",
            description: "Luxury lifestyle and travel",
            isOnline: true,
          },
          {
            id: 4,
            name: "Ryan Cole",
            username: "@ryancole",
            country: "Canada",
            age: 29,
            image:
              "https://images.unsplash.com/photo-1562788865-9c0e49bf1b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
            isPremium: false,
            price: "Free",
            likes: "87k",
            rating: 4.3,
            posts: "432",
            description: "Fitness coach and nutritionist",
            isOnline: true,
          },
          {
            id: 5,
            name: "Mia Khalifa",
            username: "@miakhalifa",
            country: "Lebanon",
            age: 30,
            image:
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$19.99/mo",
            likes: "456k",
            rating: 4.9,
            posts: "3.2k",
            description: "Exclusive content creator",
            isOnline: false,
          },
          {
            id: 6,
            name: "David King",
            username: "@davidking",
            country: "Germany",
            age: 31,
            image:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$15.99/mo",
            likes: "193k",
            rating: 4.6,
            posts: "1.1k",
            description: "Bodybuilder and fitness model",
            isOnline: true,
          },
          {
            id: 7,
            name: "Emma Watson",
            username: "@emmawatson",
            country: "UK",
            age: 28,
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$24.99/mo",
            likes: "512k",
            rating: 4.9,
            posts: "4.5k",
            description: "Actress and activist",
            isOnline: false,
          },
          {
            id: 8,
            name: "James Wilson",
            username: "@jameswilson",
            country: "USA",
            age: 26,
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            isPremium: false,
            price: "Free",
            likes: "76k",
            rating: 4.2,
            posts: "321",
            description: "Photographer and traveler",
            isOnline: true,
          },
          {
            id: 9,
            name: "Olivia Parker",
            username: "@oliviaparker",
            country: "France",
            age: 23,
            image:
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            isPremium: true,
            price: "$11.99/mo",
            likes: "198k",
            rating: 4.7,
            posts: "987",
            description: "Fashion model and influencer",
            isOnline: false,
          },
          {
            id: 10,
            name: "Noah Smith",
            username: "@noahsmith",
            country: "Canada",
            age: 32,
            image:
              "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            isPremium: true,
            price: "$16.99/mo",
            likes: "234k",
            rating: 4.8,
            posts: "1.5k",
            description: "Personal trainer and athlete",
            isOnline: true,
          },
          {
            id: 11,
            name: "Ava Johnson",
            username: "@avajohnson",
            country: "Australia",
            age: 25,
            image:
              "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: false,
            price: "Free",
            likes: "143k",
            rating: 4.4,
            posts: "654",
            description: "Artist and creative director",
            isOnline: false,
          },
          {
            id: 12,
            name: "Liam Brown",
            username: "@liambrown",
            country: "USA",
            age: 30,
            image:
              "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$13.99/mo",
            likes: "287k",
            rating: 4.7,
            posts: "1.8k",
            description: "Musician and songwriter",
            isOnline: true,
          },
          {
            id: 13,
            name: "Sophie Turner",
            username: "@sophieturner",
            country: "UK",
            age: 27,
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$21.99/mo",
            likes: "398k",
            rating: 4.9,
            posts: "2.7k",
            description: "Actress and model",
            isOnline: false,
          },
          {
            id: 14,
            name: "Ethan Miller",
            username: "@ethanmiller",
            country: "Germany",
            age: 29,
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: false,
            price: "Free",
            likes: "92k",
            rating: 4.1,
            posts: "412",
            description: "Chef and food blogger",
            isOnline: true,
          },
          {
            id: 15,
            name: "Isabella Garcia",
            username: "@isabellagarcia",
            country: "Spain",
            age: 24,
            image:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$18.99/mo",
            likes: "276k",
            rating: 4.8,
            posts: "1.6k",
            description: "Dancer and choreographer",
            isOnline: false,
          },
          {
            id: 16,
            name: "Michael Davis",
            username: "@michaeldavis",
            country: "USA",
            age: 33,
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$14.99/mo",
            likes: "321k",
            rating: 4.9,
            posts: "2.3k",
            description: "Entrepreneur and investor",
            isOnline: true,
          },
          {
            id: 17,
            name: "Charlotte Wilson",
            username: "@charlottewilson",
            country: "Canada",
            age: 26,
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: false,
            price: "Free",
            likes: "118k",
            rating: 4.3,
            posts: "543",
            description: "Writer and poet",
            isOnline: false,
          },
          {
            id: 18,
            name: "William Taylor",
            username: "@williamtaylor",
            country: "UK",
            age: 31,
            image:
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            isPremium: true,
            price: "$12.99/mo",
            likes: "201k",
            rating: 4.6,
            posts: "1.2k",
            description: "Actor and director",
            isOnline: true,
          },
        ];

        setModels(mockModels);
      } catch (err) {
        setError("Failed to load creators. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  // Get current models
  const indexOfLastModel = currentPage * modelsPerPage;
  const indexOfFirstModel = indexOfLastModel - modelsPerPage;
  const currentModels = models.slice(indexOfFirstModel, indexOfLastModel);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(models.length / modelsPerPage);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 4;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust if we're at the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    // Always show first page
    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("...");
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Always show last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <SectionContainer id="models">
      <SectionTitle>OnlyFans Creators</SectionTitle>
      <SectionSubtitle>
        Discover exclusive content from your favorite creators. Subscribe to
        access premium content.
      </SectionSubtitle>

      {loading ? (
        <LoadingSpinner>Loading creators...</LoadingSpinner>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <GridContainer>
            {currentModels.map((model) => (
              <ModelCard key={model.id}>
                <ModelImageContainer
                  style={{ backgroundImage: `url(${model.image})` }}
                />
                {model.isPremium && (
                  <PremiumBadge>
                    <Lock size={12} />
                    <span>PREMIUM</span>
                  </PremiumBadge>
                )}
                {model.isOnline && <OnlineBadge>ONLINE</OnlineBadge>}
                <ModelInfo>
                  <ModelHeader>
                    <div>
                      <ModelName>{model.name}</ModelName>
                      <ModelUsername>{model.username}</ModelUsername>
                    </div>
                    <ModelPrice $isPremium={model.isPremium}>
                      {model.price}
                    </ModelPrice>
                  </ModelHeader>

                  <ModelDescription>{model.description}</ModelDescription>

                  <ModelMeta>
                    <ModelStats>
                      <StatItem>
                        <Heart size={14} />
                        {model.likes}
                      </StatItem>
                      <StatItem $color="#00AFF0">
                        <MessageSquare size={14} />
                        {model.posts}
                      </StatItem>
                    </ModelStats>
                    <ModelRating>
                      <Star size={14} />
                      {model.rating}
                    </ModelRating>
                  </ModelMeta>

                  <SubscribeButton
                    to={`/nakedly/profile/${model.id}`}
                    $isPremium={model.isPremium}
                  >
                    {model.isPremium ? "Subscribe" : "Follow"}
                  </SubscribeButton>
                </ModelInfo>
              </ModelCard>
            ))}
          </GridContainer>

          {totalPages > 1 && (
            <PaginationContainer>
              <PageButton
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </PageButton>

              {getPageNumbers().map((number, index) =>
                number === "..." ? (
                  <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
                ) : (
                  <PageButton
                    key={number}
                    onClick={() => paginate(number)}
                    $isActive={number === currentPage}
                  >
                    {number}
                  </PageButton>
                )
              )}

              <PageButton
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </PageButton>
            </PaginationContainer>
          )}
        </>
      )}
    </SectionContainer>
  );
};

export default OnlyFansModelsSection;
