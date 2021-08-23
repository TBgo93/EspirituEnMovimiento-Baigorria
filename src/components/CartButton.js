import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Button, Card, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


function HomeButton() {
  return (
    <>
      <NavLink exact to="/">
        <Button animated='vertical' color="green">
          <Button.Content visible>Ir a comprar</Button.Content>
          <Button.Content hidden>
            <Icon name='shopping basket' />
          </Button.Content>
        </Button>
      </NavLink>
    </>
  )
}

function CartButton() {
  return (
    <>
      <NavLink to="/cart">
      <Button animated='vertical' color='red'>
          <Button.Content hidden>
            <Icon name='shop' />
          </Button.Content>
          <Button.Content visible>Terminar Compra</Button.Content>
        </Button>
      </NavLink>
    </>
  )
}

function AddToCart({ id, quantity }) {
  const { moreQuantity } = useContext(CartContext)

  return (
    <>
      <Button color="grey" onClick={() => moreQuantity(id,quantity)}>Agregar mas</Button>
    </>
  )
}

function ConditionalButtons({ id, stock }) {
  const [itemCount, setItemCount] = useState(1);
  const itemIncrease = () => {
    if(itemCount < stock){
        setItemCount(itemCount + Number(1))
    }
  }
  const itemDecrease = () => {
    if(itemCount > 1){
        setItemCount(itemCount - Number(1))
    }
  }
  return (
    <>
      <Card.Content>
        <div className="d-flex justify-content-evenly m-4">
            <Button color='blue' icon onClick={itemDecrease}>
                <Icon name='minus' />
            </Button>
                <Card.Description>{itemCount}</Card.Description>
            <Button color='blue' icon onClick={itemIncrease}>
                <Icon name='plus' />
            </Button>
        </div>
      </Card.Content>
      <Button.Group>
        <AddToCart id={id} quantity={itemCount}/>
        <Button.Or text="O"/>
        <CartButton />
      </Button.Group>
    </>
  )
}

export { CartButton, ConditionalButtons, HomeButton} 