import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { CheckOutButton, HomeButton } from './CustomButtons'
import { Button, Container, Icon, Table } from 'semantic-ui-react'
import ItemCart from './ItemCart';
import { ModalVaciarCarrito } from './Modals'
import { itemOnCart } from '../helpers/functions'



function CartContainer() {
  const itemsOnStorage = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  const { items, clearAll } = useContext(CartContext)
  const [currentTotal, setCurrentTotal] = useState(0)

  const listCart = itemOnCart(items, itemsOnStorage)

  useEffect(() => {
    if (listCart.length > 0) {
      const total = listCart.map(({ price, quantity }) => price * quantity,).reduce((acc, el) => acc + el)
      setCurrentTotal(total)
    }
  },[listCart])
  
  return <>
      <Container className="cartContainer">
        {
        items.length === 0 && itemsOnStorage.length === 0 ?
          <>
            <h3>Tu carrito esta vacio</h3>
            <HomeButton />
          </>
          :
          <>
            <h2>Resumen de Compra</h2>
            <Table basic='very' className="cartTable">
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
            <div className="optionCart">
              <strong className="totalPrice">
                Total de la compra: $ {currentTotal}
              </strong>
              <CheckOutButton />
              <ModalVaciarCarrito fn={() => clearAll()}>
                <Button animated color="red">
                  <Button.Content visible>Limpiar Carrito</Button.Content>
                  <Button.Content hidden>
                    <Icon name='trash' />
                  </Button.Content>
                </Button>
              </ModalVaciarCarrito>
            </div>
          </>
        }
        </Container>
    </>
};

export default CartContainer;