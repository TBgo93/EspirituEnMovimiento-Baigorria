import React from 'react'
import WishListContainer from '../components/WishListContainer'
import { Container } from 'semantic-ui-react'

function WishList() {
  return (
    <Container className="full-container">
      <h1 className="text-center m-3">Lista de deseados</h1>
      <WishListContainer />
    </Container>
  )
}

export default WishList