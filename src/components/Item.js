import React from 'react'
import { Card } from 'react-bootstrap';


function Item( items ) {
  const { id, title, price, description, pictureUrl } = items
  return(
    <>
      <Card>
        <Card.Img variant="top" src={pictureUrl} alt={title} />
        <Card.ImgOverlay>
          <Card.Header>#{id}</Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Subtitle>{description}</Card.Subtitle>
          <Card.Text>Precio: ${price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Item