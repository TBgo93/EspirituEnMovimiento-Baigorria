import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import firebase from 'firebase/app'
import { Button, Card, Form } from 'semantic-ui-react'
import { isFormEmpty } from '../helpers/functions'
import { Login } from './CustomButtons';
import { ModalErrorRegister, ModalSuccess } from './Modals';
import { handleNewUser } from '../api/postNewUser'


function SignUp() {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    repassword: ''
  })
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  
  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        userCredential.user.updateProfile({
          displayName: user.fullname,
        })
        handleNewUser(user, userCredential.user.uid)
        history.push(`/userpanel`)
        ModalSuccess('Usuario creado con exito!')
      })
      .catch((error) => {
        ModalErrorRegister(error.code)
      })
  }

  useEffect(() => {
    const isDisable = () => {
      return isFormEmpty(user, 5)
        ?
        true
        :
        (user.password === user.repassword) && (user.password !== '' && user.repassword !== '') ? false : true
    }

    setDisabled(isDisable())
  }, [user]);

  return (
    <Card className="loginCard">
      <Form inverted>
      <Form.Input
          type="text"
          label='Nombre Completo'
          name='fullname'
          placeholder='Nombre Completo'
          value={user.fullname} required
          onChange={handleChange} />
        <Form.Input
          type="email"
          label='Email'
          name='email'
          placeholder='Email'
          value={user.email} required
          onChange={handleChange} />
        <Form.Input
          type="tel"
          label='Telefono'
          name='phone'
          placeholder='Telefono'
          value={user.phone} required
          onChange={handleChange} />
        <Form.Input
          type="password"
          label='Contraseña'
          name='password'
          placeholder='Contraseña'
          title="La contraseña debe contener al menos 6 caracteres"
          value={user.password} required
          onChange={handleChange} />
        <Form.Input
          type="password"
          label='Confirmar Contraseña'
          name='repassword'
          placeholder='Confirmar Contraseña'
          value={user.repassword} required
          error={user.repassword !== user.password ? true : false}
          onChange={handleChange} />
        <Button
          type="button"
          color="yellow"
          disabled={disabled}
          onClick={handleSubmit}>Registrarse</Button>
        <Login >Ya tenes cuenta?</Login>
      </Form>
    </Card>
  )
}

export default SignUp