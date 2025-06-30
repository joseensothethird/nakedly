import React from 'react';
import styled from 'styled-components';
import { PP_Container, PP_Title, PP_SectionTitle, PP_Paragraph } from '../../Components/styles/pages/information';



const PrivacyPolicy = () => {
  return (
    <PP_Container>
      <PP_Title>Privacy Policy</PP_Title>

      <PP_Paragraph>
        Nakedly values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
      </PP_Paragraph>

      <PP_SectionTitle>1. Information We Collect</PP_SectionTitle>
      <PP_Paragraph>
        We collect information you provide directly, such as your name, email, payment details, and profile information. We also collect usage data automatically, including IP addresses, browser type, and interaction with our services.
      </PP_Paragraph>

      <PP_SectionTitle>2. How We Use Your Information</PP_SectionTitle>
      <PP_Paragraph>
        Your data is used to provide, maintain, and improve our services, process payments, communicate with you, and ensure platform security. We do not sell your personal information to third parties.
      </PP_Paragraph>

      <PP_SectionTitle>3. Cookies and Tracking</PP_SectionTitle>
      <PP_Paragraph>
        We use cookies and similar technologies to personalize your experience, analyze usage, and deliver relevant content and ads.
      </PP_Paragraph>

      <PP_SectionTitle>4. Data Security</PP_SectionTitle>
      <PP_Paragraph>
        We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.
      </PP_Paragraph>

      <PP_SectionTitle>5. Sharing Your Information</PP_SectionTitle>
      <PP_Paragraph>
        We may share information with trusted third-party service providers to help operate our platform. We require these partners to protect your data and use it only for specified purposes.
      </PP_Paragraph>

      <PP_SectionTitle>6. Your Rights</PP_SectionTitle>
      <PP_Paragraph>
        You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights or have questions about your data.
      </PP_Paragraph>

      <PP_SectionTitle>7. Children's Privacy</PP_SectionTitle>
      <PP_Paragraph>
        Nakedly does not knowingly collect data from anyone under 18. If you believe a minor has provided us personal data, please contact us immediately.
      </PP_Paragraph>

      <PP_SectionTitle>8. Changes to This Policy</PP_SectionTitle>
      <PP_Paragraph>
        We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated effective date.
      </PP_Paragraph>

      <PP_SectionTitle>Contact Us</PP_SectionTitle>
      <PP_Paragraph>
        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
        <a href="mailto:support@nakedly.com" style={{color: '#00aff0', textDecoration: 'none'}}>
          support@nakedly.com
        </a>.
      </PP_Paragraph>
    </PP_Container>
  );
};

export default PrivacyPolicy;
