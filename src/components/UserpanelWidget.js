import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import { Icon, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


function UserpanelWidget() {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setLogged(true) : setLogged(false)
    })
  },[])

  return (
    <>
    <NavLink className="nav-link cart" to={logged ? '/userpanel' : '/login'}>
      <Popup
        content={logged ? 'Panel de Usuario' : 'Iniciar Sesion'}
        size='small'
        inverted
        basic
        position='top right'
        trigger={
          <Icon name='user' />
        } />
      </NavLink>
    </>
  )
}
export default UserpanelWidget;