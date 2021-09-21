import React, { useState } from 'react'

const CartContext = React.createContext({})

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  const addItem = (item, quantity, isInCart, id) => {
    const arrItems = [...items, { item, quantity, isInCart }];
    const arrOnStorage = JSON.stringify([...items, { item, quantity, isInCart }])
    const setProducts = () => {
      setItems(arrItems)
      localStorage.setItem('cart', arrOnStorage)
    }
    //LocalStorage
    !isInACart(id) ? setProducts() : moreQuantity(id, quantity)
  }

  const removeItem = (itemId, quantity) => {
    const arrItems = items.filter(item => item.item.id !== itemId)
    setItems(arrItems)
    setTotal(Number(total) - Number(quantity))
    //LocalStorage
    const itemsOnStorage = JSON.parse(localStorage.getItem('cart'))
    const newItems = itemsOnStorage.filter(item => item.item.id !== itemId)
    localStorage.clear()
    localStorage.setItem('cart', JSON.stringify(newItems))
  }

  const clearAll = () => {
    setItems([])
    setTotal([])
    //LocalStorage
    localStorage.setItem('cart', JSON.stringify([]))
    localStorage.setItem('quantity', 0)

  }

  const isInACart = (id) => items.some(item => item.item.id === id)

  const moreQuantity = (id, quant) => {
    const product = items.find(item => item.item.id === id)
    product.quantity += quant
    //LocalStorage
    const itemsOnStorage = JSON.parse(localStorage.getItem('cart'))
    const productOnStorage = itemsOnStorage.find(item => item.item.id === id)
    productOnStorage.quantity += quant
    const newItems = itemsOnStorage.filter(item => item.item.id !== id)
    localStorage.clear()
    localStorage.setItem('cart', JSON.stringify([...newItems, productOnStorage]))
  }

  const totalQuantity = (quantity) => {
    setTotal(Number(total) + Number(quantity))
    const itemsOnStorage = JSON.parse(localStorage.getItem('cart'))
    const countQuantity = itemsOnStorage.map(element => element.quantity).reduce((acc, el) => acc + el)
    localStorage.setItem('quantity', countQuantity)
  }

  return (
    <CartContext.Provider value={{ items, total, addItem, removeItem, clearAll, isInACart, moreQuantity, totalQuantity }}>
      { children }
    </CartContext.Provider>
  )
}

export {CartProvider, CartContext}