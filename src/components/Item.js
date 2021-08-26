import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";



function Item(items) {
  const { id, title, price, pictureUrl } = items
  const history = useHistory();

  const handleClick = (idItem) => {
    history.push(`/item/${idItem}`);
  }

  return(
    <>
      <Card>
        <Image src={pictureUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>Precio: ${price}</Card.Description>
        </Card.Content>
        <Button color='yellow' onClick={() => handleClick(id)}>
          Ver Mas
        </Button>
      </Card>
    </>
  )
}

export default Item