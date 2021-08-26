import React, { useContext } from 'react';
import { WishListContext } from '../context/wishListContext';
import { HomeButton } from './CustomButtons'
import { Button, Container, Icon, Table } from 'semantic-ui-react'
import ItemWishList from './ItemWishList';

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
}

function WishListContainer() {
  const { product, clearAll } = useContext(WishListContext)

  const listWish = product.map(item => {
    const { id, title, price, description, pictureUrl } = item.item
    return { id, title, price, description, pictureUrl}
  })
  
  return <>
      <Container style={styleFont}>
        {
        listWish.length === 0 ?
          <>
            <h3>Tu lista de deseos esta vacia</h3>
            <HomeButton />
          </>
          :
          <>
            <Table basic='very'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Articulo</Table.HeaderCell>
                <Table.HeaderCell>Precio</Table.HeaderCell>
                <Table.HeaderCell>Accion</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {
              listWish.map(({ id, title, price, pictureUrl }) =>
                <ItemWishList
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  pictureUrl={pictureUrl}
                />
              )
            }
            </Table>
            <Button animated color="blue" onClick={() => clearAll()}>
              <Button.Content visible>Limpiar Wishlist</Button.Content>
              <Button.Content hidden>
                <Icon name='trash' />
              </Button.Content>
            </Button>
          </>
        }
        </Container>
    </>
};

export default WishListContainer;