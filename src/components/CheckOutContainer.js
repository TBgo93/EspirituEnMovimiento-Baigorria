import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import { Container } from 'semantic-ui-react'
import CheckOutDetail from './CheckOutDetail'
import CheckOutForm from './CheckOutForm';


function CheckOutContainer() {
  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setIsLogged(true) : setIsLogged(false)
    })
  },[])

  return (
    <Container className="checkOutContainer">
      {
        orderCreatedId === null
          ?
          <>
            <h1>Checkout de tu Compra</h1>
            <Container className="checkOutDetail">
                <CheckOutForm
                setOrderCreatedId={setOrderCreatedId}
                isLogged={isLogged}/>
              <CheckOutDetail />
            </Container>
          </>
          :
          <>
            <h2>Tu compra se ha realizado satifactoriamente</h2>
            <strong>Id de la compra: {orderCreatedId}</strong>
          </>
      }
    </Container>
  )
}

export default CheckOutContainer