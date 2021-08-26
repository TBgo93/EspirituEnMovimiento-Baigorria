import React from 'react';
import { Icon, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function WishListWidget() {
    return <>
      <NavLink className="nav-link cart" to={`/wishlist`}>
        <Popup content='Lista de deseados' size='small' inverted basic position='top right' trigger={<Icon name='heart' />} />
        </NavLink>
    </>;
}
export default WishListWidget;