import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { Table } from 'semantic-ui-react'


function CheckOutDetail() {
  const { items } = useContext(CartContext)
  const [totalPurchase, setTotalPurchase] = useState(0);

  const listCart = items.map(item => {
    const { quantity } = item
    const { id, title, price } = item.item
    return { id, title, price, quantity }
  })

  useEffect(() => {
    if (items.length > 0) {
      let currentTotal = 0;
      items.forEach(({ item, quantity }) => {
        currentTotal += item.price * quantity;
      });
      setTotalPurchase(currentTotal);
    }
  }, [items]);

  return (
    <div>
      <h3>Detalle de Compra</h3>
      <Table basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Articulo</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>SubTotal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {
          listCart.map(({ id, title, price, quantity }) =>
            <Table.Body key={id}>
            <Table.Row>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{quantity}</Table.Cell>
              <Table.Cell>${Number(price) * Number(quantity)}</Table.Cell>
            </Table.Row>
          </Table.Body>
          )
        }
      </Table>
      <strong>
        Total de la compra: $ {totalPurchase}
      </strong>
    </div>
  )
}

export default CheckOutDetail