import React, { useContext } from 'react'
import { WishListContext } from '../context/wishListContext';
import { Image, Table } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";



function ItemWishList({ id, title, price, pictureUrl }) {
  const { removeToList } = useContext(WishListContext)
  const history = useHistory();

  const handleClick = () => {
    history.push(`/item/${id}`);
  }

  return(
    <>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Image avatar src={pictureUrl} alt={title} />
          </Table.Cell>
          <Table.Cell>{title}</Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell >
            <span onClick={() => removeToList(id)}>Eliminar</span>
            <br />
            <span onClick={() => { removeToList(id); handleClick(id)}}>Comprar</span>
          </Table.Cell>
        </Table.Row>
      </Table.Body>

    </>
  )
}

export default ItemWishList