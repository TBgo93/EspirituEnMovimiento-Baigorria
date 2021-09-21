import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { Button, Card, Form } from 'semantic-ui-react'
import { isFormEmpty } from '../helpers/functions'
import { useHistory } from 'react-router';
import { ModalErrorLogin, ModalSuccess } from './Modals';


function SignIn({toRedirect}) {
  const [user, setUser] = useState({ email: '', password: '' })
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.push(`/${toRedirect}`)
        ModalSuccess('Iniciando sesion con ',user.email)
      })
      .catch((error) => {
        ModalErrorLogin(error.code)
      })
  }

  useEffect(() => {
    setDisabled(isFormEmpty(user, 2))
  }, [user]);

  return (
      <Card className="loginCard">
        <Form inverted>
          <Form.Input
            type="email"
            label='Email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={handleChange} />
          <Form.Input
            type="password"
            label='Contraseña'
            name='password'
            placeholder='Contraseña'
            value={user.password}
            onChange={handleChange} />
          <Button
            color="yellow"
            type="button"
            disabled={disabled}
            onClick={handleSubmit}>Iniciar Sesion</Button>
          <Button
            color="blue"
            type="button"
            onClick={() => history.push(`/register`)}>
            Registrarse
          </Button>
        </Form>
      </Card>
  )
}

export default SignIn