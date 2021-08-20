import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Button, Container } from 'react-bootstrap'
import ItemCart from './ItemCart';

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
    marginTop: 32
}

function ItemCartContainer() {
  const { items, clearAll } = useContext(CartContext)

  const listCart = items.map(item => {
    const { quantity } = item
    const { id, title, price, description, pictureUrl } = item.item
    return { id, title, price, description, pictureUrl, quantity }
  })

  
    return <>
      <Container style={styleFont}>
        <Button variant="primary" onClick={() => clearAll()}>Limpiar Carrito</Button>
        {
          listCart.map(({ id, title, price, pictureUrl, quantity }) =>
            <ItemCart
              key={id}
              id={id}
              title={title}
              price={price}
              pictureUrl={pictureUrl}
              quantity={quantity}
            />
          )
        }
        </Container>
    </>
};

export default ItemCartContainer;