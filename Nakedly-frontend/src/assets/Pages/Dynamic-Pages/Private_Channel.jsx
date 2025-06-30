import styled from 'styled-components'
import PrivateChannel from '../../Components/Sections/Dynamic_Section/Model_Channel';



const LandingPage = styled.div`
  /* Additional page-specific styles if needed */
`

const Home = () => {
  return (
    <LandingPage>
      <PrivateChannel />
    </LandingPage>
  )
}

export default Home