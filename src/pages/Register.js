import React from 'react'
import SignUp from '../components/Register';
import { Container } from 'semantic-ui-react';

function Register() {
  return (
    <>
      <Container className="full-container loginContainer">
        <h1>Crear cuenta</h1>
        <SignUp />
      </Container>
    </>
  )
}

export default Register