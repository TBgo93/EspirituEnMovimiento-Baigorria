import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { Table } from 'semantic-ui-react'
import { itemOnCart, itemsOnStorage } from '../helpers/functions'


function CheckOutDetail() {
  const { items } = useContext(CartContext)
  const [totalPurchase, setTotalPurchase] = useState(0);

  const listCart = itemOnCart(items, itemsOnStorage)
  
  useEffect(() => {
    if (listCart.length > 0) {
      const total = listCart.map(({ price, quantity }) => price * quantity,).reduce((acc, el) => acc + el)
      setTotalPurchase(total)
    }
  },[listCart]);

  return (
    <div>
      <h3>Detalle de Compra</h3>
      <Table basic='very' className="checkOutDetailTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Articulo</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>SubTotal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            listCart.map(({ id, title, price, quantity }) =>
              <Table.Row key={id}>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{quantity}</Table.Cell>
                <Table.Cell>${Number(price) * Number(quantity)}</Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
      <strong>
        Total de la compra: $ {totalPurchase}
      </strong>
    </div>
  )
}

export default CheckOutDetail