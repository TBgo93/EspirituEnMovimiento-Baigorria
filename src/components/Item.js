import React from 'react'
import { Card } from 'react-bootstrap';


function Item( items ) {
    const { id, title, price, description, pictureUrl } = items
    return(
        <>
            <Card>
                <Card.Img variant="top" src={pictureUrl} alt={title} />
                <Card.Header>#{id}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <Card.Text>Precio: ${price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item