// src/pages/TemplatePage.jsx
import React from 'react';
import styled from 'styled-components';

// Styled Components (Optional - for layout or structure)
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
`;

const Header = styled.header`
  height: 60px;
  background: #111;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;

const Footer = styled.footer`
  height: 50px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TemplatePage = () => {
  return (
    <PageWrapper>
      <Header>Header</Header>
      <Main>
        {/* Page content goes here */}
      </Main>
      <Footer>Footer</Footer>
    </PageWrapper>
  );
};

export default TemplatePage;
