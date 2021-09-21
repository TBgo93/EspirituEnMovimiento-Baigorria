import React from 'react'
import ChangePassword from '../components/ChangePassword'
import { Container } from 'semantic-ui-react'



function NewPassword() {
  return (
    <Container className="full-container d-flex-center">
        <h1>Cambio de contraseña</h1>
      <ChangePassword />
    </Container>
  )
}

export default NewPassword