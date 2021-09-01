import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import { postOrder } from '../api/postOrder'
import { Button, Container, Form } from 'semantic-ui-react'
import CheckOutDetail from './CheckOutDetail'

function CheckOutContainer() {
  const { items , clearAll } = useContext(CartContext)
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (items.length > 0) {
      let currentTotal = 0;
      items.forEach(({ item, quantity }) => {
        currentTotal += item.price * quantity;
      });
      setTotalPurchase(currentTotal);
    }
  }, [items]);

  const handleFinishPurchase = () => {
    const listCart = items.map(item => {
      const { quantity } = item
      const { id, title, price } = item.item
      return { id, title, price, quantity }
    })

    const newOrder = {
      buyer: {
        name: `${firstName} ${lastName}`,
        phone: phone,
        email: email,
      },
      items: listCart,
      totalPurchase: totalPurchase,
    };

    postOrder(newOrder, items)
      .then(res => setOrderCreatedId(res))
      .finally( ()=> clearAll())
  }

  return (
    <Container className="checkOutContainer">
      {
        orderCreatedId === null
          ?
          <>
            <h1>Checkout de tu Compra</h1>
            <br />
            <Container className="checkOutDetail">
              <Form>
                <Form.Input
                  onChange={(event) => setFirstName(event.target.value)} type="text"
                  label='Nombre'
                  placeholder='Nombre'
                  value={firstName} required />
                <Form.Input
                  onChange={(event) => setLastName(event.target.value)} type="text"
                  label='Apellido'
                  placeholder='Apellido'
                  value={lastName} required />
                <Form.Input
                  onChange={(event) => setPhone(event.target.value)}
                  type="tel"
                  label='Telefono'
                  placeholder='Telefono'
                  value={phone} required />
                <Form.Input
                  onChange={(event) => setEmail(event.target.value)} type="email"
                  label='Email'
                  placeholder='Email'
                  value={email} required />
                <Button color="yellow" onClick={() => handleFinishPurchase()}>Finalizar Compra</Button>
              </Form>
              <CheckOutDetail />
            </Container>
          </>
          :
          <>
            <h2>Tu compra se ha realizado satifactoriamente</h2>
            <strong>Id de la compra: {orderCreatedId}</strong>
          </>
      }
    </Container>
  )
}

export default CheckOutContainer