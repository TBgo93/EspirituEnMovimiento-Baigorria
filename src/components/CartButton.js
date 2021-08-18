import React from 'react'
import { NavLink } from 'react-router-dom'


function CartButton() {
  return (
    <>
      <NavLink className="btn btn-danger" to="/cart">Terminar Compra</NavLink>
    </>
  )
}

export default CartButton