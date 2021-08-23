import React, { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../context/cartContext';
import { Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function CardWidget() {
    const { items } = useContext(CartContext)
    const cart = useRef(null)
    
    useEffect(() => {
        cart.current.setAttribute("count", items.length);
    }, [items.length])
    
    return <>
        <NavLink className="nav-link cart" to={`/cart`}>
            <Icon name='shop' />
            <span ref={cart} id="cart" className="count"></span>
        </NavLink>
    </>;
}
export default CardWidget;