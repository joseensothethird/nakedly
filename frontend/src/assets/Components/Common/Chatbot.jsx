import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Remove 'Message' from this import - it doesn't exist in your styles file
import { ChatbotContainer, ChatMessage, ChatButton, ChatWindow, ChatHeader, ChatLogo, ChatTitle, CloseButton, ChatBody, ChatFooter, MessageInput, SendButton, SearchContainer, ChatSearchInput, ChatCategories, CategoryButton, ChatList, ChatItem, ChatAvatar, ChatInfo, ChatName, ChatPreview } from "../styles/components";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeView, setActiveView] = useState("chats");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChat, setActiveChat] = useState(null);

  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Support Team",
      avatar: "/logo/nakedly.png",
      lastMessage: "How can we help you?",
      category: "support",
      unread: false,
    },
    {
      id: 2,
      name: "Sales Inquiry",
      avatar: "/logo/nakedly.png",
      lastMessage: "Ask about our premium plans",
      category: "sales",
      unread: true,
    },
    {
      id: 3,
      name: "Technical Help",
      avatar: "/logo/nakedly.png",
      lastMessage: "Need help with your account?",
      category: "support",
      unread: false,
    },
  ]);

  const [messages, setMessages] = useState([
    { text: "Hello! How can we help you today?", isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 5000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const chatContainer = document.querySelector(".chatbot-container");
      if (chatContainer && !chatContainer.contains(event.target)) {
        handleCloseChat();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, isUser: true }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you soon.",
          isUser: false,
        },
      ]);
    }, 1000);

    setNewMessage("");
  };

  const filteredChats = chats.filter((chat) => {
    const matchesSearch =
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || chat.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isVisible) return null;

  return (
    <ChatbotContainer className="chatbot-container">
      <ChatWindow open={isOpen}>
        <ChatHeader>
          {activeView === "messages" && (
            <CloseButton
              onClick={() => {
                setActiveView("chats");
                setActiveChat(null);
              }}
              style={{ marginRight: "10px" }}
            >
              ←
            </CloseButton>
          )}
          <ChatLogo src="/logo/nakedly.png" alt="Nakedly Logo" />
          <ChatTitle>
            {activeView === "messages" ? activeChat?.name : "Nakedly Messenger"}
          </ChatTitle>
          <CloseButton
            onClick={() => {
              setIsOpen(false);
              setActiveView("chats");
              setActiveChat(null);
            }}
          >
            ×
          </CloseButton>
        </ChatHeader>

        {activeView === "chats" ? (
          <>
            <SearchContainer>
              <ChatSearchInput
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchContainer>

            <ChatCategories>
              <CategoryButton
                active={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
              >
                All
              </CategoryButton>
              <CategoryButton
                active={activeCategory === "support"}
                onClick={() => setActiveCategory("support")}
              >
                Spam
              </CategoryButton>
              <CategoryButton
                active={activeCategory === "sales"}
                onClick={() => setActiveCategory("sales")}
              >
                Message Request
              </CategoryButton>
            </ChatCategories>

            <ChatList>
              {filteredChats.map((chat) => (
                <ChatItem
                  key={chat.id}
                  onClick={() => {
                    setActiveChat(chat);
                    setActiveView("messages");
                  }}
                >
                  <ChatAvatar src={chat.avatar} alt={chat.name} />
                  <ChatInfo>
                    <ChatName>{chat.name}</ChatName>
                    <ChatPreview>{chat.lastMessage}</ChatPreview>
                  </ChatInfo>
                  {chat.unread && (
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#0084ff",
                        marginLeft: "10px",
                      }}
                    />
                  )}
                </ChatItem>
              ))}
            </ChatList>
          </>
        ) : (
          <>
            <ChatBody>
              {messages.map((message, index) => (
                <ChatMessage key={index} isUser={message.isUser}>
                  {message.text}
                </ChatMessage>
              ))}
            </ChatBody>

            <ChatFooter>
              <MessageInput
                type="text"
                placeholder={`Message ${activeChat?.name || ""}...`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <SendButton onClick={handleSendMessage}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SendButton>
            </ChatFooter>
          </>
        )}
      </ChatWindow>

      <ChatButton onClick={handleToggleChat}>
        <img
          src="/logo/nakedly.png"
          alt="Chat"
          style={{
            width: "70%",
            height: "70%",
            objectFit: "contain",
            transform: isOpen ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </ChatButton>
    </ChatbotContainer>
  );
};

export default FloatingChatbot;