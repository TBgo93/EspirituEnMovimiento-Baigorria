import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'



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
function Login(props) {
  return (
    <>
      <NavLink to="/login">
        <Icon name='user circle' /> {props.children}
      </NavLink>
    </>
  )
}
function Userpanel(props) {
  return (
    <>
      <NavLink to="/userpanel">
        <Icon name='user circle' /> {props.children}
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

function CheckOutButton() {
  return (
      <NavLink to="/checkout">
        <Button color='yellow'>
          Terminar Compra
        </Button>
      </NavLink>
  )
}

function ChangePassword() {
  return (
      <NavLink to="/newpassword">
        <Button size='tiny'>
        <Icon name='cog' /> Cambiar Contraseña
        </Button>
      </NavLink>
  )
}

export { CartButton, HomeButton, CheckOutButton, Login, ChangePassword, Userpanel} 