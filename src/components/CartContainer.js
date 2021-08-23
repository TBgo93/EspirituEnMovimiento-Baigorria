import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { HomeButton } from './CartButton'
import { Button, Container, Icon, Table } from 'semantic-ui-react'
import ItemCart from './ItemCart';

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
    marginTop: 32
}

function CartContainer() {
  const { items, clearAll } = useContext(CartContext)

  const listCart = items.map(item => {
    const { quantity } = item
    const { id, title, price, description, pictureUrl } = item.item
    return { id, title, price, description, pictureUrl, quantity }
  })
  
  return <>
      <Container style={styleFont}>
        {
        listCart.length === 0 ?
          <>
            <h3>Tu carrito esta vacio</h3>
            <HomeButton />
          </>
          :
          <>
            <Table basic='very'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Articulo</Table.HeaderCell>
                <Table.HeaderCell>Cantidad</Table.HeaderCell>
                <Table.HeaderCell>Precio Unitario</Table.HeaderCell>
                <Table.HeaderCell>Precio Total</Table.HeaderCell>
                <Table.HeaderCell>Accion</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
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
            </Table>
            <strong className="totalPrice">Total de la compra: $
            {
              listCart.map(({ price, quantity }) => price * quantity,).reduce((acc,el) => acc + el)
            }
            </strong>
            <Button animated color="blue" onClick={() => clearAll()}>
              <Button.Content visible>Limpiar Carrito</Button.Content>
              <Button.Content hidden>
                <Icon name='trash' />
              </Button.Content>
            </Button>
          </>
        }
        </Container>
    </>
};

export default CartContainer;