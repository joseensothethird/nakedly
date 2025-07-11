import styled from 'styled-components'
import Banner from '../Components/Common/HomeBanner.jsx';
import Feedback from '../Components/Sections/Dynamic_Section/Feeds.jsx'
import ChannelCard from '../Components/Sections/Channel_Card.jsx'
import AboutUs from './Information_Pages/About-Us.jsx';

const LandingPage = styled.div`
  /* Additional page-specific styles if needed */
`

const Home = () => {
  return (
    <LandingPage>
      <Banner /> 
      <ChannelCard />
      <Feedback />
      <AboutUs />
    </LandingPage>
  )
}

export default Home
