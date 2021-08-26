import React, { useState } from 'react'

const WishListContext = React.createContext({})

function WishListProvider({ children }) {
  const [product, setProduct] = useState([])

  // Funcionando
  const addList = (item, isInList) => {
    const arrItems = [...product, { item, isInList}]
    setProduct(arrItems)
  }
  // Funcionando
  const removeToList = (itemId) => {
    const arrItems = product.filter(item => item.item.id !== itemId)
    setProduct(arrItems)
  }
  //Funcionando
  const clearAll = () => setProduct([])
  // Funcionando
  const isInList = (id) => product.some(item => item.item.id === id)

  return (
    <WishListContext.Provider value={{ product, addList, removeToList, clearAll, isInList }}>
      { children }
    </WishListContext.Provider>
  )
}

export {WishListProvider, WishListContext}