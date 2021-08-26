import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { HomeButton } from './CustomButtons'
import { Button, Container, Icon, Table } from 'semantic-ui-react'
import ItemCart from './ItemCart';
import { ModalVaciarCarrito } from './Modals'


const styleFont = {
    fontWeight : 600,
    textAlign : "center",
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
            <h2>Resumen de Compra</h2>
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
            <ModalVaciarCarrito fn={() => clearAll()}>
              <Button animated color="blue">
                <Button.Content visible>Limpiar Carrito</Button.Content>
                <Button.Content hidden>
                  <Icon name='trash' />
                </Button.Content>
              </Button>
            </ModalVaciarCarrito>
          </>
        }
        </Container>
    </>
};

export default CartContainer;