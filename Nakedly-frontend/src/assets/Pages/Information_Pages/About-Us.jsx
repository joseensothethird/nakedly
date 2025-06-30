import React from 'react';
import {
  AboutContainer,
  Header,
  AboutTitle,
  Tagline,
  ContentSection,
  IntroParagraph,
  Highlight,
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  Section,
  AboutSubtitle,
  AboutParagraph,
  SafetyHighlight,
  ComplianceBadge,
  CTASection,
  CTATitle,
  CTAButton,
  CTASubtext
} from '../../Components/styles/pages/information';
import { FaShieldAlt, FaUserCheck, FaDollarSign, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <AboutContainer>
      <Header>
        <AboutTitle>About Nakedly</AboutTitle>
        <Tagline>The Premier Platform for Asian Creators</Tagline>
      </Header>

      <ContentSection>
        <IntroParagraph>
          Nakedly is a premium content platform designed <Highlight>exclusively for Asian creators</Highlight> — models, artists, and sellers — to build thriving communities and safely monetize their content with complete creative freedom.
        </IntroParagraph>

        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon><FaDollarSign /></FeatureIcon>
            <FeatureTitle>Maximize Earnings</FeatureTitle>
            <FeatureText>
              Keep up to 85% of your earnings with our industry-leading revenue model and multiple monetization options.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaShieldAlt /></FeatureIcon>
            <FeatureTitle>Total Protection</FeatureTitle>
            <FeatureText>
              Advanced content protection, secure payments, and 24/7 moderation to safeguard your work.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaUserCheck /></FeatureIcon>
            <FeatureTitle>Verified Community</FeatureTitle>
            <FeatureText>
              Strict ID verification for all users ensures a safe environment with real, engaged subscribers.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaUsers /></FeatureIcon>
            <FeatureTitle>Targeted Audience</FeatureTitle>
            <FeatureText>
              Connect with fans specifically interested in Asian creators and content.
            </FeatureText>
          </FeatureCard>
        </FeatureGrid>

        <Section>
          <AboutSubtitle>Our Mission</AboutSubtitle>
          <AboutParagraph>
            We empower Asian creators by providing a <Highlight>trusted, scam-free platform</Highlight> where they can monetize their content directly through subscriptions, tips, and pay-per-view. Our transparent 85/15 revenue split puts more money in creators' pockets.
          </AboutParagraph>
        </Section>

        <Section>
          <AboutSubtitle>Safety & Compliance</AboutSubtitle>
          <AboutParagraph>
            <SafetyHighlight>Strict 18+ policy enforced</SafetyHighlight> with mandatory ID verification. We use AI content scanning and human moderation to maintain compliance with all regulations. Zero tolerance for violations.
          </AboutParagraph>
          <ComplianceBadge>Fully Compliant with 18 U.S.C. § 2257</ComplianceBadge>
        </Section>

        <CTASection>
          <CTATitle>Ready to Take Control of Your Content?</CTATitle>
          <CTAButton href="/signup">Join Nakedly Today</CTAButton>
          <CTASubtext>Thousands of Asian creators are already building their empires with us</CTASubtext>
        </CTASection>
      </ContentSection>
    </AboutContainer>
  );
};

export default AboutUs;