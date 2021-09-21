import React from 'react'
import FeaturedContainer from '../components/FeaturedContainer'
import { Container } from 'semantic-ui-react'



function Home() {
  return (
    <Container className="full-container">
      <FeaturedContainer />
    </Container>
  )
}

export default Home