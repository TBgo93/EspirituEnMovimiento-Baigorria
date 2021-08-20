import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Button, Card } from 'react-bootstrap';
import { HiOutlineTrash } from 'react-icons/hi';


function ItemCart({ id, title, price, pictureUrl, quantity }) {
  const { removeItem } = useContext(CartContext)

  return(
    <>
      <Card className="flex-row align-items-center">
        <Card.Img variant="top" src={pictureUrl} alt={title} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>Cantidad: {quantity}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
        </Card.Body>
        <Button variant="danger" className="btn-clean-cart" onClick={() => removeItem(id)}>
          <HiOutlineTrash />
        </Button>
      </Card>
    </>
  )
}

export default ItemCart