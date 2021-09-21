import React from 'react'
import { Container, Button } from 'semantic-ui-react'


function NotFound() {
  return (
    <>
      <Container className="full-container">
        <h1>Page not found...</h1>
        <h6>Puede que te hayas equivocado de pagina. Puedes volver al inicio, apretando el boton</h6>
        <Button href="/">Inicio</Button>
      </Container>
    </>
  )
}

export default NotFound