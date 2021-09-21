import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app'
import { CartContext } from '../context/cartContext';
import { handleFinishPurchase } from '../api/postOrder'
import { getUserById } from '../api/getUserById'
import { Button, Form, Header, Icon } from 'semantic-ui-react'
import { isFormEmpty, itemOnCart, itemsOnStorage } from '../helpers/functions'
import { Login } from './CustomButtons'


function CheckOutForm({ setOrderCreatedId, isLogged }) {
  const userCurrent = firebase.auth().currentUser;
  const { uid } = userCurrent === null ? {} : userCurrent

  const { items, clearAll } = useContext(CartContext)
  const [userInfoLogged, setUserInfoLogged] = useState({fullname: '', phone: '', email: '',})
  const [userInfo, setUserInfo] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [totalPurchase, setTotalPurchase] = useState(0);

  const listCart = itemOnCart(items, itemsOnStorage)

  const handleChange = (event) => {
    setUserInfo({...userInfo, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    getUserById(uid).then(date => setUserInfoLogged(date))
  }, [uid])

  useEffect(() => {
    const isDisable = () => {
      return isFormEmpty(userInfo, 4)
      ?
      true
      :
      (userInfo.reemail === userInfo.email && (userInfo.reemail !== '' && userInfo.email !== '') ? false : true)
    }
    setDisabled(isDisable)
  }, [userInfo])
  
  useEffect(() => {
    if (listCart.length > 0) {
      const total = listCart.map(({ price, quantity }) => price * quantity,).reduce((acc, el) => acc + el)
      setTotalPurchase(total)
    }
  }, [listCart]);
  
  return (
    <>
      {
        !isLogged &&
        <>
          <Form className="userInfo">
            <Login>Iniciaste sesion?</Login>
            <h3>Complete sus Datos</h3>
            <Form.Input
              onChange={handleChange}
              name='fullname'
              type="text"
              label='Nombre Completo'
              placeholder='Nombre Completo'
              value={userInfo.fullname}
              required />
            <Form.Input
              onChange={handleChange}
              name='phone'
              type="tel"
              label='Telefono'
              placeholder='Telefono'
              value={userInfo.phone}
              required />
            <Form.Input
              onChange={handleChange}
              name='email'
              type="email"
              label='Email'
              placeholder='Email'
              value={userInfo.email}
              required />
            <Form.Input
              onChange={handleChange}
              name='reemail'
              type="email"
              label='Confirmar Email'
              placeholder='Confirmar Email'
              error={userInfo.reemail !== userInfo.email ? true : false}
              value={userInfo.reemail}
              required />
            <Button
              color="yellow"
              disabled={disabled}
              onClick={() => handleFinishPurchase(userInfo, listCart, totalPurchase, items, setOrderCreatedId, clearAll)}>Finalizar Compra</Button>
          </Form>
        </>
      }
      {
        isLogged &&
        <div className="idLoggedContainer">
          <Header as='h5'>
            <Icon name='user circle' />Logueado con {userCurrent.email}
          </Header>
          <Button
            color="yellow"
            onClick={() => handleFinishPurchase(userInfoLogged, listCart, totalPurchase, items, setOrderCreatedId, clearAll)}>Finalizar Compra</Button>
        </div>
      }
    </>
  )
}

export default CheckOutForm