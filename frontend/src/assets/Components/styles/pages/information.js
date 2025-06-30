import styled from 'styled-components';
/*About Us*/
export const AboutContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  background: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 60px;
  padding: 5% 20px 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const AboutTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #00AFF0;
  margin-bottom: 10px;
  background: linear-gradient(to right, #00AFF0, #0088CC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Tagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: #666;
  font-weight: 500;
`;

export const ContentSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const IntroParagraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  margin-bottom: 50px;
  text-align: center;
  color: #333;
`;

export const Highlight = styled.span`
  color: #00AFF0;
  font-weight: 600;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 60px 0;
  padding: 0 20px;
`;

export const FeatureCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 175, 240, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 175, 240, 0.1);
    border-color: rgba(0, 175, 240, 0.3);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #00AFF0;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

export const FeatureText = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
`;

export const Section = styled.div`
  margin: 60px 0;
  padding: 0 20px;
`;

export const AboutSubtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  color: #1a1a1a;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #00AFF0, #0088CC);
  }
`;

export const AboutParagraph = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.8;
  margin-bottom: 20px;
  color: #444;
`;

export const SafetyHighlight = styled.span`
  color: #00AFF0;
  font-weight: 600;
  background: rgba(0, 175, 240, 0.1);
  padding: 2px 5px;
  border-radius: 4px;
`;

export const ComplianceBadge = styled.div`
  display: inline-block;
  background: #f0f8ff;
  color: #006699;
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 4px;
  margin-top: 10px;
  font-family: monospace;
  border: 1px solid rgba(0, 175, 240, 0.2);
`;

export const CTASection = styled.div`
  text-align: center;
  margin: 80px 0 40px;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(0,175,240,0.05) 0%, rgba(0,136,204,0.05) 100%);
  border-radius: 12px;
`;

export const CTATitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  margin-bottom: 20px;
  color: #1a1a1a;
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #00AFF0, #0088CC);
  color: white;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  margin: 20px 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 175, 240, 0.3);
  font-size: clamp(0.9rem, 2vw, 1rem);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 175, 240, 0.4);
  }
`;

export const CTASubtext = styled.p`
  color: #666;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
`;
/*DMCA*/
export const DMCA_Container = styled.main`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px 60px;
  font-family: 'Arial', sans-serif;
  color: #222;
  line-height: 1.6;
`;

export const DMCA_Title = styled.h1`
  font-size: 2.5rem;
  color: #00aff0;
  margin-bottom: 30px;
  text-align: center;
`;

export const DMCA_SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 40px;
  margin-bottom: 15px;
  color: #333;
`;

export const DMCA_Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color:#000;
`;
/*Privacy Policy*/

export const PP_Container = styled.main`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px 60px;
  font-family: 'Arial', sans-serif;
  color: #222;
  line-height: 1.6;
`;

export const PP_Title = styled.h1`
  font-size: 2.5rem;
  color: #00aff0;
  margin-bottom: 30px;
  text-align: center;
`;

export const PP_SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 40px;
  margin-bottom: 15px;
  color: #333;
`;

export const PP_Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color:#000;
`;
/*terms of service*/
export const TS_Container = styled.main`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px 60px;
  font-family: 'Arial', sans-serif;
  color: #222;
  line-height: 1.6;
`;

export const TS_Title = styled.h1`
  font-size: 2.5rem;
  color: #00aff0;
  margin-bottom: 30px;
  text-align: center;
`;

export const TS_SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 40px;
  margin-bottom: 15px;
  color: #333;
`;

export const TS_Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color:#000;
`;

export const TS_List = styled.ul`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #444;
`;

export const TS_ListItem = styled.li`
  margin-bottom: 10px;
`;