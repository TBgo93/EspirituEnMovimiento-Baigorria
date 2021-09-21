import React, { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../context/cartContext';
import { Icon, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function CardWidget() {
    const { total } = useContext(CartContext)
    const cart = useRef(null)
    const totalOnStorage = localStorage.getItem('quantity') === null ? 0 : localStorage.getItem('quantity')
    
    useEffect(() => {
        total === 0 ? cart.current.setAttribute("count", totalOnStorage) : 
        cart.current.setAttribute("count", total);
    }, [total, totalOnStorage])
    
    return <>
        <NavLink className="nav-link cart" to={`/cart`}>
            <Popup content='Carrito de compra' size='small' inverted basic position='top right' trigger={<Icon name='shop' />} />
            <span ref={cart} id="cart" className="count"></span>
        </NavLink>
    </>;
}
export default CardWidget;