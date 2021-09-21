import React from 'react'
import CartContainer from '../components/CartContainer'
import { Container } from 'semantic-ui-react'


function Cart() {
  return (
    <Container className="full-container">
      <h1 className="text-center m-3">Carrito de compra</h1>
      <CartContainer />
    </Container>
  )
}

export default Cart