const isFormEmpty = (obj, key) => {
  return !(Object.keys(obj).length === key)
}

const itemOnCart = (items, itemsOnStorage) => 
  items.length === 0 ? itemsOnStorage.map(item => {
    const { quantity } = item
    const { id, title, price, pictureUrl } = item.item
    return { id, title, price, quantity, pictureUrl }
  })
    :
  items.map(item => {
    const { quantity } = item
    const { id, title, price, pictureUrl } = item.item
    return { id, title, price, quantity, pictureUrl }
  })

const itemsOnStorage = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))

export { isFormEmpty, itemOnCart, itemsOnStorage }