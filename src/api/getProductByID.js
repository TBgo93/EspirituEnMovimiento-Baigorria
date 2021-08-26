import { getFirestore } from '../firebase';

export const getProductById = (idProduct) => {
  const db = getFirestore()
  const productsCollection = db.collection("products").doc(idProduct)
  const product = productsCollection.get()
  .then((doc) => {  
    if (!doc.exists) {
      console.log('No product')
      return
    }
    const { id } = doc
    const { title, description, price, pictureUrl, stock } = doc.data()
    return { id, title, description, price, pictureUrl, stock }
  })
  return product
}