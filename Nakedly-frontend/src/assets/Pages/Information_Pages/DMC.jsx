import React from 'react';
import styled from 'styled-components';
import { DMCA_Container, DMCA_Title, DMCA_SectionTitle, DMCA_Paragraph } from '../../Components/styles/pages/information';



const DmcaPolicy = () => {
  return (
    <DMCA_Container>
      <DMCA_Title>DMCA Policy</DMCA_Title>

      <DMCA_Paragraph>
        Nakedly respects the intellectual property rights of others and expects our users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and have established procedures for addressing claims of copyright infringement.
      </DMCA_Paragraph>

      <DMCA_SectionTitle>Reporting Copyright Infringement</DMCA_SectionTitle>
      <DMCA_Paragraph>
        If you believe that your copyrighted work has been copied and is accessible on our platform in a way that constitutes copyright infringement, please provide our designated Copyright Agent with the following information:
      </DMCA_Paragraph>
      <ul>
        <li>Your full name, address, telephone number, and email address.</li>
        <li>A description of the copyrighted work that you claim has been infringed.</li>
        <li>A description of where the material that you claim is infringing is located on the platform.</li>
        <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement that the information in your notification is accurate, and under penalty of perjury, that you are the copyright owner or authorized to act on behalf of the owner.</li>
        <li>Your electronic or physical signature.</li>
      </ul>

      <DMCA_SectionTitle>Submit Your Notice To</DMCA_SectionTitle>
      <DMCA_Paragraph>
        Email: <a href="mailto:dmca@nakedly.com" style={{color: '#00aff0', textDecoration: 'none'}}>dmca@nakedly.com</a>
      </DMCA_Paragraph>

      <DMCA_SectionTitle>Counter-Notification</DMCA_SectionTitle>
      <DMCA_Paragraph>
        If you believe your content was removed or disabled due to mistake or misidentification, you may submit a counter-notification with the following:
      </DMCA_Paragraph>
      <ul>
        <li>Your name, address, and telephone number.</li>
        <li>Identification of the material that was removed and its original location on the platform.</li>
        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed due to mistake or misidentification.</li>
        <li>Your electronic or physical signature.</li>
      </ul>

      <DMCA_SectionTitle>Repeat Infringers</DMCA_SectionTitle>
      <DMCA_Paragraph>
        We reserve the right to terminate accounts of users who are repeat infringers.
      </DMCA_Paragraph>

      <DMCA_SectionTitle>Contact Us</DMCA_SectionTitle>
      <DMCA_Paragraph>
        For any questions regarding this DMCA Policy, please contact us at <a href="mailto:dmca@nakedly.com" style={{color: '#00aff0', textDecoration: 'none'}}>dmca@nakedly.com</a>.
      </DMCA_Paragraph>
    </DMCA_Container>
  );
};

export default DmcaPolicy;
