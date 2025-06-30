import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in;
`;

const LogoSpinner = styled.img`
  width: 100px;
  height: 100px;
  animation: ${rotate} 1.5s linear infinite;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const LazyLoading = () => {
  return (
    <Wrapper>
      <div style={{ textAlign: 'center' }}>
        <LogoSpinner 
          src="/logo/nakedly.png"  // Make sure this path is correct
          alt="Nakedly Logo Spinner"
        />
        <LoadingText>Loading Nakedly...</LoadingText>
      </div>
    </Wrapper>
  );
};

export default LazyLoading;