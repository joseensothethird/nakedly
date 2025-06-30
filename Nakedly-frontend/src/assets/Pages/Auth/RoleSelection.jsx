import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  AuthContainer,
  Title,
  RoleSelect,
  RoleButton,
  FooterText,
  Paragraph,
  RoleImage,
  RoleLabel,
} from "../../Components/styles/pages/AUTH";
import styled from "styled-components";

// Styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  color: black;
  max-height: 90vh;
  overflow-y: auto;

  p,
  ul,
  li,
  strong,
  span {
    color: black;
    text-align: left;
    margin-bottom: 10px;
    font-size: 0.95rem;
  }

  ul {
    padding-left: 20px;
    text-align: left;
  }

  li {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ModalButton = styled.button`
  padding: 12px 24px;
  background-color: #00aff0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px auto 0;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #008ecc;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 200px;
`;
const TermsLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.5;

  a {
    color: #00aff0;
    text-decoration: underline;

    &:hover {
      color: #008ecc;
    }
  }

  input {
    margin-right: 10px;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ModalButtonLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin: 20px auto 0;
  max-width: 200px;
`;
const RoleSelectionPage = ({ onRoleSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleClick = (role) => {
    if (role === "model") {
      setSelectedRole(role);
      setShowModal(true);
    }
  };
  const [agreed, setAgreed] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    onRoleSelect(selectedRole);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <PageWrapper>
      <AuthContainer>
        <Title>
          Welcome back to <span style={{ color: "#00aff0" }}>Nakedly</span>
        </Title>
        <Paragraph>Who are you?</Paragraph>

        <RoleSelect>
          <StyledLink to="/signup">
            <RoleButton>
              <RoleImage
                style={{ backgroundImage: "url('/images/Subs.jpg')" }}
              />
              <RoleLabel>Subscriber</RoleLabel>
            </RoleButton>
          </StyledLink>

          <RoleButton onClick={() => handleRoleClick("model")}>
            <RoleImage
              style={{ backgroundImage: "url('/images/ayesha.jpeg')" }}
            />
            <RoleLabel>Model</RoleLabel>
          </RoleButton>
        </RoleSelect>

        <FooterText>
          Already have an account? <a href="/login">Log in</a>
        </FooterText>

        {showModal && (
          <ModalOverlay>
            <ModalContent>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              <p>
                You're selecting the <strong>Model</strong> role in{" "}
                <span style={{ color: "#00aff0" }}>Nakedly</span>. Please review
                the registration rules before continuing:
                <ul>
                  <li>
                    You must be <strong>18 years old or above</strong>.
                  </li>
                  <li>
                    A <strong>valid government-issued ID</strong> is required
                    for age and identity verification.
                  </li>
                  <li>
                    This platform is for selling your content and bookings only—
                    <strong>no external transactions</strong> allowed to protect
                    against scams.
                  </li>
                  <li>
                    <strong>Only subscribers</strong> can interact with you. No
                    random friend requests or non-subscriber messaging.
                  </li>
                  <li>
                    <strong>Bookings must be confirmed</strong> through the
                    website to ensure safety for both you and your subscribers.
                  </li>
                  <li>
                    All transactions and payments must happen here.{" "}
                    <strong>
                      You’ll receive booking payments after the session is
                      marked complete.
                    </strong>
                  </li>
                  <li>
                    There’s a button available for you to{" "}
                    <strong>confirm a booking</strong> by uploading a photo of
                    the client’s ID for verification.
                  </li>
                  <li>
                    <strong>
                      Video call and Live features are coming soon
                    </strong>
                    —you'll be able to engage with your subscribers in real-time
                    through secure sessions on the platform.
                  </li>
                </ul>
              </p>
              <TermsLabel>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  required
                />
                I have read and agree to the{" "}
                <a
                  href="/model-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Model Terms of Service
                </a>
                .
              </TermsLabel>

              <div>
                <ModalButtonLink to={agreed ? "/signup" : "#"} onClick={handleConfirm}>
                  <ModalButton disabled={!agreed}>
                    Yes, Continue
                  </ModalButton>
                </ModalButtonLink>
              </div>
            </ModalContent>
          </ModalOverlay>
        )}
      </AuthContainer>
    </PageWrapper>
  );
};

export default RoleSelectionPage;
