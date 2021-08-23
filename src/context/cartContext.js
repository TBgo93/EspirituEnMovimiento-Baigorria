import React, { useState } from 'react'

const CartContext = React.createContext({})

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  //Funcionando
  const addItem = (item, quantity, isInCart) => {
    const arrItems = [...items, { item, quantity, isInCart}]
    setItems(arrItems)
  }
  //Funcionando
  const removeItem = (itemId) => {
    const arrItems = items.filter(item => item.item.id !== itemId)
    setItems(arrItems)
  }
  //Funcionando
  const clearAll = () => setItems([])
  //Funcionando
  const isInCart = (id) => items.some(item => item.item.id === id)
  //Funcionando
  const moreQuantity = (id, quant) => {
    const product = items.find(item => item.item.id === id)
    product.quantity += quant
  }
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearAll, isInCart, moreQuantity }}>
      { children }
    </CartContext.Provider>
  )
}

export {CartProvider, CartContext}