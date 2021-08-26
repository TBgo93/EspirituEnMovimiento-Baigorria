import React, { useState } from 'react'

const CartContext = React.createContext({})

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  //Funcionando
  const addItem = (item, quantity, isInCart) => {
    const arrItems = [...items, { item, quantity, isInCart }];
    setItems(arrItems)
  }
  //Funcionando
  const removeItem = (itemId, quantity) => {
    const arrItems = items.filter(item => item.item.id !== itemId)
    setItems(arrItems)
    setTotal(Number(total) - Number(quantity))

  }
  //Funcionando
  const clearAll = () => {
    setItems([])
    setTotal([])
  }
  //Funcionando
  const isInCart = (id) => items.some(item => item.item.id === id)
  //Funcionando
  const moreQuantity = (id, quant) => {
    const product = items.find(item => item.item.id === id)
    product.quantity += quant
  }
  //Funcionando
  const totalQuantity = (quantity) => {
    setTotal(Number(total) + Number(quantity))
  }

  return (
    <CartContext.Provider value={{ items, total, addItem, removeItem, clearAll, isInCart, moreQuantity, totalQuantity }}>
      { children }
    </CartContext.Provider>
  )
}

export {CartProvider, CartContext}