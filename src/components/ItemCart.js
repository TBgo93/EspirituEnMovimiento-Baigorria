import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Image, Table } from 'semantic-ui-react';
import { ModalEliminarItem } from './Modals'


function ItemCart({ id, title, price, pictureUrl, quantity }) {
  const { removeItem } = useContext(CartContext)

  return(
    <>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Image avatar src={pictureUrl} alt={title} />
          </Table.Cell>
          <Table.Cell>{title}</Table.Cell>
          <Table.Cell>{quantity}</Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell>${Number(price) * Number(quantity)}</Table.Cell>
          <ModalEliminarItem fn={() => removeItem(id, quantity)}>
            <Table.Cell>Eliminar</Table.Cell>
          </ModalEliminarItem>
        </Table.Row>
      </Table.Body>

    </>
  )
}

export default ItemCart