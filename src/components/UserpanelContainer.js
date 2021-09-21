import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import { getOrdersByUser } from '../api/getOrdersByUser';
import { Container, Icon, Table } from 'semantic-ui-react'
import { Login } from './CustomButtons'
import UserpanelOption from './UsepanelOption'
import { ModalDetailsCompras } from './Modals'


function UserpanelContainer() {
  const user = firebase.auth().currentUser;
  const [orders, setOrders] = useState([])

  const toDate = (seconds, miliseconds) => new firebase.firestore.Timestamp(seconds, miliseconds).toDate().toLocaleString()

  useEffect(() => {
    if (user !== null) {
      getOrdersByUser(user.email)
        .then(order => setOrders(order))
    }
  }, [user])

  return (
    <>
      {
        user === null
          ?
          <Container className="center-content">
            <Login>Debes iniciar sesion</Login>
          </Container>
          :
          <Container>
            <div className="userpanelHeader">
              <h1>Mis Compras</h1>
              <UserpanelOption />
            </div>
            <div className="userpanelTable">
              <Table basic='very'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Detalle</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                  orders.map(({ id, date, items, totalPurchase }) =>
                    <Table.Row key={id}>
                      <Table.Cell>#{id}</Table.Cell>
                      <Table.Cell>
                        <ModalDetailsCompras
                          toDate={toDate(date.seconds, date.nanoseconds)}
                          totalPurchase={Number(totalPurchase)}
                          items={items}>
                          <Icon name='plus' color="blue" />
                        </ModalDetailsCompras>
                      </Table.Cell>
                    </Table.Row>
                  )
                }
                </Table.Body>
              </Table>
            </div>
          </Container>
      }
    </>
  )
}

export default UserpanelContainer;
