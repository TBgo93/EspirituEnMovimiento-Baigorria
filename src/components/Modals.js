import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalEliminarItem(props) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
    props.fn()
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      basic
      size='tiny'
      trigger={props.children}
    >
      <Header icon>
        <Icon name='trash' />
      </Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Quieres eliminar este articulo ?
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color='red' onClick={() => handleClick()}>
        Eliminar!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

function ModalVaciarCarrito(props) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
    props.fn()
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      basic
      size='tiny'
      trigger={props.children}
    >
      <Header icon>
        <Icon name='trash' />
      </Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Estas seguro que quieres vaciar el carrito?
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color='red' onClick={() => handleClick()}>
        Vaciar!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

function ModalAgregarCarrito(props) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      basic
      size='tiny'
      trigger={props.children}
    >
      <Header icon>
        <Icon color="blue" name='check' />
      </Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            Articulo agregado a Carrito!
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export { ModalEliminarItem, ModalVaciarCarrito, ModalAgregarCarrito }