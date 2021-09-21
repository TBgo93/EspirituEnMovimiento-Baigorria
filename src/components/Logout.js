import React from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router';
import { Button, Icon } from 'semantic-ui-react'


function Logout() {
  const user = firebase.auth().currentUser;
  const history = useHistory();

  const handleSubmit = () => {
    firebase.auth().signOut()
    .catch(err => alert(err))
      .finally(() => {
        history.push(`/`)
      })
  }

  return (
    user&&
      <Button
        color="red"
        size='small'
        onClick={handleSubmit}>
        <Icon name='log out' /> Cerrar Sesion
      </Button>
  )
}

export default Logout