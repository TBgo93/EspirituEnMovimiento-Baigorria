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
      <Card className="item">
        <Image src={pictureUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
        </Card.Content>
        <div className="cardFooter">
          <Card.Description>Precio: ${price}</Card.Description>
          <Button color='yellow' onClick={() => handleClick(id)}>
            Ver Mas
          </Button>
        </div>
      </Card>
    </>
  )
}

export default Item