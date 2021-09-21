import React from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router';
import { Button, Icon } from 'semantic-ui-react'
import Swal from 'sweetalert2'



function DeleteAccount() {
  const user = firebase.auth().currentUser;
  const history = useHistory();

  const handleSubmit = () => {
    return Swal.fire({
      text: "Estas seguro que queres eliminar tu cuenta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff5144',
      cancelButtonColor: '#2185d0',
      confirmButtonText: 'Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        firebase.auth().signOut()
        .then(() => {
          user.delete()
            .then(() => {
            history.push(`/`)
          })
          .catch(err => alert(err))
        })
        .catch(err => alert(err))
        Swal.fire({
          title: 'Eliminado',
          text: 'Cuenta eliminada con exito!',
          icon: 'success',
          confirmButtonColor: '#2185d0',
        })
      }
    })
  }

  return (
    user&&
      <Button
        size='tiny'
        onClick={handleSubmit}>
        <Icon name='user delete' color="red"/> Eliminar Cuenta
      </Button>
  )
}

export default DeleteAccount