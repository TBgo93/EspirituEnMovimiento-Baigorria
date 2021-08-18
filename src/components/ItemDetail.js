import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount'
import CartButton from './CartButton'

function ItemDetail({ item }) {
    const { id, title, price, description, pictureUrl } = item
    const [quantity, setQuantity] = useState(0)

    const onAdd = (quantityOnAdd) => {
        setQuantity(quantityOnAdd)
    }

    return(
    <>
        <Card className="ItemDetail">
        <div className="row no-gutters">
            <div className="col-md-6">
            <Card.Img src={pictureUrl} alt={title} />
            </div>
            <Card.Body className="col-md-6 d-flex flex-column justify-content-evenly align-items-center">
            <Card.Title>#{id} - {title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Subtitle>Precio: ${price}</Card.Subtitle>
            {
                quantity === 0 ? <ItemCount stock={10} initial={1} onAdd={onAdd} /> : <CartButton />
            }
            </Card.Body>
        </div>
        </Card>
    </>
    )
}

export default ItemDetail