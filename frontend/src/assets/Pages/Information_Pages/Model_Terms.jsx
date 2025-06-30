import React, { useState } from 'react';
import styled from 'styled-components';

const TermsOfService = ({ onAgree }) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = () => {
    if (agreed && onAgree) {
      onAgree();
    }
  };

  return (
    <TermsContainer>
      <ContentSection>
        <Header>Terms of Service for <span style={{ color: '#00aff0' }}>Nakedly</span></Header>
        
        <IntroParagraph>
          Nakedly is a content subscription platform designed to provide a safe environment for creators and subscribers. 
          These terms outline our policies to protect all parties involved.
        </IntroParagraph>

        <SectionTitle>Creator Protections & Requirements</SectionTitle>
        <RequirementsList>
          <RequirementItem><strong>Age verification:</strong> All creators must be at least 18 years old with valid government-issued ID.</RequirementItem>
          <RequirementItem><strong>Identity protection:</strong> We never display your full legal name or ID documents to subscribers.</RequirementItem>
          <RequirementItem><strong>Content ownership:</strong> You retain all rights to your content; we only host it under license.</RequirementItem>
          <RequirementItem><strong>Payment security:</strong> All payments are processed through secure channels with 128-bit encryption.</RequirementItem>
          <RequirementItem><strong>DMCA protection:</strong> We actively protect your content from unauthorized distribution.</RequirementItem>
        </RequirementsList>
        
        <SectionTitle>Subscriber Protections</SectionTitle>
        <RulesList>
          <RuleItem><strong>No harassment policy:</strong> Creators can block any subscriber for any reason, with no refunds for blocked accounts.</RuleItem>
          <RuleItem><strong>Payment disputes:</strong> Chargebacks will result in immediate account suspension and possible legal action.</RuleItem>
          <RuleItem><strong>Privacy guarantee:</strong> Your subscription activity is never shared with third parties.</RuleItem>
          <RuleItem><strong>Content usage:</strong> All content is for personal use only - redistribution is strictly prohibited.</RuleItem>
        </RulesList>
        
        <SectionTitle>Platform Safety Features</SectionTitle>
        <SafetyList>
          <SafetyItem><strong>Two-factor authentication:</strong> Available for all accounts to prevent unauthorized access.</SafetyItem>
          <SafetyItem><strong>Encrypted messaging:</strong> All communications are end-to-end encrypted.</SafetyItem>
          <SafetyItem><strong>Geoblocking:</strong> Creators can restrict content by country/region.</SafetyItem>
          <SafetyItem><strong>Watermarking:</strong> All media is automatically watermarked with subscriber ID to deter leaks.</SafetyItem>
        </SafetyList>
        
        <SectionTitle>Financial Terms</SectionTitle>
        <PaymentList>
          <PaymentItem><strong>Creator payouts:</strong> 80% base revenue share, with potential increases based on performance.</PaymentItem>
          <PaymentItem><strong>Payout schedule:</strong> Weekly payments after reaching $50 threshold.</PaymentItem>
          <PaymentItem><strong>Refund policy:</strong> No refunds for consumed content; disputes handled case-by-case.</PaymentItem>
        </PaymentList>
        
        <SectionTitle>Content Restrictions</SectionTitle>
        <RestrictionsList>
          <RestrictionItem><strong>Prohibited content:</strong> No illegal content, revenge porn, or content featuring non-consenting individuals.</RestrictionItem>
          <RestrictionItem><strong>Age verification:</strong> All depicted individuals must be verified as 18+ with documentation on file.</RestrictionItem>
          <RestrictionItem><strong>Community guidelines:</strong> Content promoting hate speech, violence, or discrimination will be removed.</RestrictionItem>
        </RestrictionsList>

        <SectionTitle>Coming Features</SectionTitle>
        <FeaturesList>
          <FeatureItem><strong>Enhanced verification:</strong> Facial recognition matching for creator identity confirmation.</FeatureItem>
          <FeatureItem><strong>Live content protections:</strong> Real-time watermarking for live streams.</FeatureItem>
          <FeatureItem><strong>Tip protections:</strong> Mandatory confirmation screens for large tips to prevent accidental transactions.</FeatureItem>
        </FeaturesList>
      </ContentSection>
      
      <AcceptanceSection>
        <TermsAgreement>
          <CheckboxInput
            type="checkbox"
            id="terms-agreement"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            required
          />
          <CheckboxLabel htmlFor="terms-agreement">
            I have read, understood, and agree to these Terms of Service and acknowledge that:
            <ul>
              <li>I am at least 18 years old</li>
              <li>I will comply with all platform rules</li>
              <li>I understand the payment terms</li>
              <li>I accept all content restrictions</li>
            </ul>
          </CheckboxLabel>
        </TermsAgreement>
        
        <AgreementButton 
          onClick={handleAgreement} 
          disabled={!agreed}
          agreed={agreed}
        >
          Accept Terms and Continue
        </AgreementButton>
        
        <LastUpdated>
          Last updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </LastUpdated>
      </AcceptanceSection>
    </TermsContainer>
  );
};

// Styled Components
const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Header = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  border-bottom: 2px solid #00aff0;
  padding-bottom: 0.5rem;
`;

const IntroParagraph = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #555;
`;

const ContentSection = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
`;

const SectionTitle = styled.h2`
  color: #00aff0;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed #ccc;
`;

const BaseList = styled.ul`
  padding-left: 1.8rem;
  margin-bottom: 1.8rem;
`;

const RequirementsList = styled(BaseList)`
  li::marker {
    color: #e74c3c;
    font-weight: bold;
  }
`;

const RulesList = styled(BaseList)`
  li::marker {
    color: #f39c12;
    font-weight: bold;
  }
`;

const SafetyList = styled(BaseList)`
  li::marker {
    color: #2ecc71;
    font-weight: bold;
  }
`;

const PaymentList = styled(BaseList)`
  li::marker {
    color: #27ae60;
    font-weight: bold;
  }
`;

const RestrictionsList = styled(BaseList)`
  li::marker {
    color: #9b59b6;
    font-weight: bold;
  }
`;

const FeaturesList = styled(BaseList)`
  li::marker {
    color: #3498db;
    font-weight: bold;
  }
`;

const BaseListItem = styled.li`
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
  strong {
    color: #2c3e50;
  }
`;

const RequirementItem = styled(BaseListItem)``;
const RuleItem = styled(BaseListItem)``;
const SafetyItem = styled(BaseListItem)``;
const PaymentItem = styled(BaseListItem)``;
const RestrictionItem = styled(BaseListItem)``;
const FeatureItem = styled(BaseListItem)``;

const AcceptanceSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
`;

const TermsAgreement = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #00aff0;
`;

const CheckboxInput = styled.input`
  margin-right: 15px;
  min-width: 20px;
  min-height: 20px;
  accent-color: #00aff0;
  cursor: pointer;
  transform: translateY(2px);
`;

const CheckboxLabel = styled.label`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  cursor: pointer;
  
  ul {
    margin-top: 10px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
    color: #555;
  }
`;

const AgreementButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  margin: 1.5rem 0;
  background-color: ${props => props.agreed ? '#00aff0' : '#cccccc'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${props => props.agreed ? 'pointer' : 'not-allowed'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.agreed ? '#008ecc' : '#cccccc'};
    transform: ${props => props.agreed ? 'translateY(-2px)' : 'none'};
  }
  
  &:active {
    transform: ${props => props.agreed ? 'translateY(0)' : 'none'};
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #777;
  font-size: 0.85rem;
  margin-top: 1rem;
`;

export default TermsOfService;