import React from 'react'
import { Container, Dropdown } from 'semantic-ui-react'
import Logout from './Logout'
import DeleteAccount from './DeleteAccount'
import { ChangePassword } from './CustomButtons';

function UserpanelOption() {

  return (
    <Container className="userOption">
      <Dropdown
        button
        className='icon'
        labeled
        icon='cog'
        text='Opciones'>
        <Dropdown.Menu>
          <DeleteAccount />
          <ChangePassword />
        </Dropdown.Menu>
      </Dropdown>
      <Logout />
    </Container>
  )
}

export default UserpanelOption