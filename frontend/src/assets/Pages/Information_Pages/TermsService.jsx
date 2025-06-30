import React from 'react';
import styled from 'styled-components';
import {
  TS_Container,
  TS_Title,
  TS_SectionTitle,
  TS_Paragraph,
  TS_List,
  TS_ListItem
} from '../../Components/styles/pages/information';


const TermsOfService = () => {
  return (
    <TS_Container>
      <TS_Title>Terms of Service</TS_Title>

      <TS_SectionTitle>1. Acceptance of Terms</TS_SectionTitle>
      <TS_Paragraph>
        By accessing or using Nakedly, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our platform.
      </TS_Paragraph>

      <TS_SectionTitle>2. Age Restriction</TS_SectionTitle>
      <TS_Paragraph>
        Nakedly is strictly for adults aged 18 years and older. You must verify your age before using our services. Any users found to be underage will have their accounts terminated immediately.
      </TS_Paragraph>

      <TS_SectionTitle>3. User Responsibilities</TS_SectionTitle>
      <TS_Paragraph>As a user (seller, model, or subscriber), you agree to:</TS_Paragraph>
      <TS_List>
        <TS_ListItem>Provide accurate and truthful information during registration.</TS_ListItem>
        <TS_ListItem>Respect other users and refrain from harassment or abuse.</TS_ListItem>
        <TS_ListItem>Comply with all applicable laws and regulations.</TS_ListItem>
        <TS_ListItem>Not upload or distribute illegal, abusive, or prohibited content.</TS_ListItem>
      </TS_List>

      <TS_SectionTitle>4. Content Ownership & License</TS_SectionTitle>
      <TS_Paragraph>
        You retain ownership of the content you upload. By uploading content to Nakedly, you grant us a license to host, display, and distribute your content to subscribers as part of the platform’s services.
      </TS_Paragraph>

      <TS_SectionTitle>5. Prohibited Content</TS_SectionTitle>
      <TS_Paragraph>
        Nakedly enforces a strict policy against content involving minors, non-consensual acts, or any illegal sexual activities. Violations will result in immediate removal and possible legal action.
      </TS_Paragraph>

      <TS_SectionTitle>6. Payments & Fees</TS_SectionTitle>
      <TS_Paragraph>
        All transactions on Nakedly are processed securely. Fees and payment terms will be clearly outlined during transactions. We are not responsible for payment disputes between sellers and subscribers.
      </TS_Paragraph>

      <TS_SectionTitle>7. Termination</TS_SectionTitle>
      <TS_Paragraph>
        We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent or harmful behavior.
      </TS_Paragraph>

      <TS_SectionTitle>8. Limitation of Liability</TS_SectionTitle>
      <TS_Paragraph>
        Nakedly is provided "as is." We do not guarantee uninterrupted service or be liable for any damages arising from the use of our platform.
      </TS_Paragraph>

      <TS_SectionTitle>9. Changes to Terms</TS_SectionTitle>
      <TS_Paragraph>
        We may update these Terms of Service from time to time. Continued use of the platform constitutes acceptance of any changes.
      </TS_Paragraph>

      <TS_SectionTitle>Contact Us</TS_SectionTitle>
      <TS_Paragraph>
        For any questions or concerns regarding these terms, please contact us at{' '}
        <a href="mailto:support@nakedly.com" style={{ color: '#00aff0', textDecoration: 'none' }}>
          support@nakedly.com
        </a>.
      </TS_Paragraph>
    </TS_Container>
  );
};

export default TermsOfService;
