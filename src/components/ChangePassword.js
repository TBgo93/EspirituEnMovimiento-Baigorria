import React, { useState } from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router';
import { Button, Card, Container, Form, Label, Icon } from 'semantic-ui-react'
import { Login, Userpanel } from './CustomButtons'
import { ModalSuccess } from './Modals'


function ChangePassword() {
  const user = firebase.auth().currentUser;
  const [newPassword, setNewPassword] = useState({ password: '', repassword: '' })
  const [blind, setNotBlind] = useState('password')
  const history = useHistory();

  const handleChange = (event) => {
    setNewPassword({ ...newPassword, [event.target.name]: event.target.value })
  }
  const handleVisibility = () => {
    blind === 'password' ? setNotBlind('text') : setNotBlind('password')
  }

  const handleSubmit = () => {
    user.updatePassword(newPassword.password)
      .then(() => {
        ModalSuccess('Contraseña cambiada!')
        history.push('/userpanel')
      })
      .catch((error) => {
        alert(error.code, error.message)
      });
  }

  return (
    <>
      {
        user === null
        ?
        <Container className="center-content">
          <Login>Debes iniciar sesion</Login>
        </Container>
        :
        <Card className="loginCard">
          <Form inverted>
            <Form.Input
              type={blind}
              label='Contraseña'
              name='password'
              placeholder='Contraseña'
              value={newPassword.password}
              onChange={handleChange} />
            <Form.Input
              type={blind}
              label='Repetir Contraseña'
              name='repassword'
              placeholder='Repetir Contraseña'
              value={newPassword.repassword}
              error={newPassword.repassword !== newPassword.password ? true : false}
                onChange={handleChange} />
              <Label className="blindPassword" onClick={handleVisibility}>
                <Icon
                  name={blind === 'password' ? 'eye' : 'eye slash'}
                  color="grey"/>
                {blind === 'password' ? 'Mostrar Caracteres' : 'Ocultar Caracteres'}
              </Label>
            <Button
              color="yellow"
              type="button"
              disabled={newPassword.repassword !== newPassword.password}
              onClick={handleSubmit}>Cambiar Contraseña</Button>
            <Userpanel>Volver al Panel de Usuario</Userpanel>
          </Form>
        </Card>
      }
    </>
    
  )
}

export default ChangePassword