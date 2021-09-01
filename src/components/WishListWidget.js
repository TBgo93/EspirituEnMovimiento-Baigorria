import React, { useContext } from 'react';
import { Icon, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { WishListContext } from '../context/wishListContext'

function WishListWidget() {
  const { product } = useContext(WishListContext)

    return <>
      <NavLink className="nav-link cart" to={`/wishlist`}>
        <Popup
          content='Lista de deseados'
          size='small'
          inverted
          basic
          position='top right'
          trigger={
            <Icon name='heart' className={product.length !== 0 ? 'animationLink' : ''} />
          } />
        </NavLink>
    </>;
}
export default WishListWidget;