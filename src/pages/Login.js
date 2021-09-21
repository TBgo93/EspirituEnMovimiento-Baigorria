import React from 'react'
import SignIn from '../components/Login';
import { Container } from 'semantic-ui-react';

function Login() {
  return (
    <>
      <Container className="full-container loginContainer">
        <h1>Iniciar Sesion</h1>
        <SignIn toRedirect='userpanel' />
      </Container>
    </>
  )
}

export default Login