import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Modal, Header } from 'semantic-ui-react'



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
//Agregar y quitar de favoritos
function ToggleFavorite({fnAdd, fnRemove, isInList}) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      basic
      size='tiny'
      trigger={
        <Icon
          size="small"
          color={isInList ? 'red' : 'grey'}
          name={`heart${isInList ? '' : ' outline'}`}
          onClick={isInList ? fnRemove : fnAdd} />
      }
    >
      <Header icon>
        <Icon color={isInList ? 'green': 'red'} name={isInList ? 'check' : 'remove'} />
      </Header>
      <Modal.Content>
        <Modal.Description>
          <span>
            {
              isInList ? 'Articulo agregado a Favorito!' :'Articulo quitado a Favorito!'
            }
          </span>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='blue' onClick={() => setOpen(false)}>
          Ok!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

function CheckOutButton() {
  

  return (
      <NavLink to="/checkout">
        <Button color='green'>
          Terminar Compra
        </Button>
      </NavLink>
  )
}

export { CartButton, HomeButton, ToggleFavorite, CheckOutButton } 