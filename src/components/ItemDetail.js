import React from 'react'
import { Card } from 'react-bootstrap';


function ItemDetail({ item }) {
  const { id, title, price, description, pictureUrl } = item
  return(
    <>
      <Card className="ItemDetail">
        <div className="row no-gutters">
          <div className="col-md-6">
            <Card.Img src={pictureUrl} alt={title} />
          </div>
          <Card.Body className="col-md-6">
          <Card.Title>#{id} - {title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Subtitle>Precio: ${price}</Card.Subtitle>
          </Card.Body>
        </div>
      </Card>
    </>
  )
}

export default ItemDetail