import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";



function Item(items) {
  const { id, title, price, description, pictureUrl } = items
  const history = useHistory();

  const handleClick = () => {
    history.push(`/item/${id}`);
  }

  return(
    <>
      <Card>
        <Image src={pictureUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>Precio: ${price}</Card.Content>
        <Button animated='vertical' color='green' onClick={handleClick}>
          <Button.Content visible>Ver Mas</Button.Content>
          <Button.Content hidden>
            <Icon name='shop' />
          </Button.Content>
        </Button>
      </Card>
    </>
  )
}

export default Item