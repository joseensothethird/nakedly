import React, { useState, useEffect } from 'react';
import { footerStyles, mobileStyles } from '../styles/components';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStyles = (baseStyle, mobileStyle) => {
    return isMobile ? { ...baseStyle, ...mobileStyle } : baseStyle;
  };

  const handleLinkHover = (linkName) => setHoveredLink(linkName);
  const handleLinkLeave = () => setHoveredLink(null);

  const getLinkStyle = (linkName) => ({
    ...footerStyles.footerLink,
    color: hoveredLink === linkName ? '#00aff0' : '#000',
    textDecoration: hoveredLink === linkName ? 'underline' : 'none'
  });

  return (
    <footer style={footerStyles.footerContainer}>
      <div style={getStyles(footerStyles.footerContent, mobileStyles.footerContent)}>
        <div style={getStyles(footerStyles.footerLogoSection, mobileStyles.footerLogoSection)}>
          <div style={footerStyles.footerLogo}>  <img src="/logo/nakedly.png" alt="Nakedly logo" style={footerStyles.logoImage} />Nakedly</div>
          <p style={getStyles(footerStyles.footerDescription, mobileStyles.footerDescription)}>
            A website designed for sellers and models to sell safely, ensuring protection against scams and fraud.
          </p>
        </div>

        <div style={getStyles(footerStyles.footerLinks, mobileStyles.footerLinks)}>
          {/* Navigation */}
          <div style={footerStyles.linkColumn}>
            <h4 style={footerStyles.columnTitle}>Navigation</h4>
            <ul style={footerStyles.linkList}>
              {['feeds', 'models', 'channels'].map((item) => (
                <li key={item} style={footerStyles.linkItem}>
                  <a
                    href={`/${item}`}
                    style={getLinkStyle(item)}
                    onMouseEnter={() => handleLinkHover(item)}
                    onMouseLeave={handleLinkLeave}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div style={footerStyles.linkColumn}>
            <h4 style={footerStyles.columnTitle}>Company</h4>
            <ul style={footerStyles.linkList}>
              {[
                { name: 'about', label: 'About Us' },
                { name: 'contact', label: 'Contact Us' },
                { name: 'blog', label: 'Blog' }
              ].map(({ name, label }) => (
                <li key={name} style={footerStyles.linkItem}>
                  <a
                    href={`/${name === 'about' ? 'about-us' : name === 'contact' ? 'contact-us' : '#'}`}
                    style={getLinkStyle(name)}
                    onMouseEnter={() => handleLinkHover(name)}
                    onMouseLeave={handleLinkLeave}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div style={footerStyles.linkColumn}>
            <h4 style={footerStyles.columnTitle}>Legal</h4>
            <ul style={footerStyles.linkList}>
              {[
                { name: 'terms', label: 'Terms of Service', href: '/terms-and-service' },
                { name: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'dmca', label: 'DMCA', href: '/dmca' }
              ].map(({ name, label, href }) => (
                <li key={name} style={footerStyles.linkItem}>
                  <a
                    href={href}
                    style={getLinkStyle(name)}
                    onMouseEnter={() => handleLinkHover(name)}
                    onMouseLeave={handleLinkLeave}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div style={footerStyles.linkColumn}>
            <h4 style={footerStyles.columnTitle}>Help</h4>
            <ul style={footerStyles.linkList}>
              {[
                { name: 'faq', label: 'FAQ' },
                { name: 'support', label: 'Support' },
                { name: 'report', label: 'Report Issue', href: '/contact-us' }
              ].map(({ name, label, href = '#' }) => (
                <li key={name} style={footerStyles.linkItem}>
                  <a
                    href={href}
                    style={getLinkStyle(name)}
                    onMouseEnter={() => handleLinkHover(name)}
                    onMouseLeave={handleLinkLeave}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={footerStyles.footerBottom}>
        <p style={{color:"#000"}}>© 2025 Nakedly - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;