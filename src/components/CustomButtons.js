import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router';
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

function AddMore({ id, stock }) {
  const [itemCount, setItemCount] = useState(1);
  const { moreQuantity, totalQuantity } = useContext(CartContext)
  const history = useHistory();

  const handleClick = () => {
    history.push(`/cart`);
    }

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

  const moreItems = () => {
    moreQuantity(id, itemCount)
    totalQuantity(itemCount)
    handleClick() 
  }

  return (
    <>
      <Card.Content>
        <div className="count-container">
            <Button color='black' icon onClick={itemDecrease}>
                <Icon name='minus' />
            </Button>
                <Card.Description>{itemCount}</Card.Description>
            <Button color='black' icon onClick={itemIncrease}>
                <Icon name='plus' />
            </Button>
        </div>
        <Button color="blue" onClick={() => moreItems() }>Agregar mas cantidad</Button>
      </Card.Content>
    </>
  )
}


export { CartButton, AddMore, HomeButton } 