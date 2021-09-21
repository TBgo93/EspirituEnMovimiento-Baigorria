import React, { useState } from 'react'
import { Button, Header, Icon, List, Modal } from 'semantic-ui-react'
import Swal from 'sweetalert2'

function ModalDetailsCompras(props) {
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
      <Modal.Header>Lista de Productos</Modal.Header>
      <p>Fecha: {props.toDate}</p>
      <p>Total: ${props.totalPurchase}</p>
      <Modal.Content>
        <Modal.Description>
        {props.items.map(({ id, title, quantity, price}) =>
          <List key={id}>
            <List.Content>
              <List.Header>{title}</List.Header>
              <List.Description>Cantidad: {quantity} - ${price}</List.Description>
            </List.Content>
          </List>
        )}
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

function ModalErrorLogin(code) {
  let message = ''

  switch (code) {
    case 'auth/user-not-found':
      code = 'Usuario / Email Inexistente'
      message = 'El usuario o email no existe, verifique que este bien escrito.'
      break;
    case 'auth/wrong-password':
      code = 'Contraseña Incorrecta'
      message = 'La contraseña es incorrecta, verifique que este bien escrito.'
      break;
    case 'auth/invalid-email':
      code = 'Email Incorrecto'
      message = 'El email es incorrecto.'
      break;
    case 'auth/too-many-requests':
      code = 'Demasiados Intentos'
      message = 'Realizaste demasiados intentos. Vuelve a intentar en unos minutos.'
      break;
    
    default:
      code = 'Error!'
      message = 'Contactese con el Administrador de la pagina.'
      break;
  }

  return Swal.fire({
    icon: 'error',
    title: code,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#2185d0',
  })
}

function ModalErrorRegister(code) {
  let message = ''

  switch (code) {
    case 'auth/email-already-in-use':
      code = 'Usuario / Email En Uso'
      message = 'El usuario o email ya se encuentra en uso. Intente con otro.'
      break;
    case 'auth/weak-password':
      code = 'Contraseña Debil'
      message = 'La contraseña contiene menos de 6 caracteres.'
      break;
    case 'auth/invalid-email':
      code = 'Email Incorrecto'
      message = 'El email es incorrecto.'
      break;
    
    default:
      code = 'Error!'
      message = 'Contactese con el Administrador de la pagina.'
      break;
  }

  return Swal.fire({
    icon: 'error',
    title: code,
    text: message,
    confirmButtonText: 'OK',
    confirmButtonColor: '#2185d0',
  })
}

function ModalSuccess(message, email='') {
  return Swal.fire({
    icon: 'success',
    text: `${message}${email}`,
    confirmButtonColor: '#2185d0',
    timer: 1600      
  })
}

function ToggleFavorite(isInList) {

  return Swal.fire({
    icon: isInList ? 'error' : 'success',
    text: isInList ? 'Articulo quitado a Favorito!': 'Articulo agregado a Favorito!',
    confirmButtonText: 'OK',
    confirmButtonColor: '#2185d0',
    timer: 1500      
  })
}

function ModalAgregarCarrito() {
  return Swal.fire({
    icon: 'success',
    text: 'Articulo agregado a Carrito!',
    confirmButtonColor: '#2185d0',
    timer: 1600      
  })
}


export { ModalDetailsCompras, ModalEliminarItem, ModalVaciarCarrito, ModalAgregarCarrito, ModalErrorLogin, ModalErrorRegister, ModalSuccess, ToggleFavorite }