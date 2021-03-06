import { getFirestore } from '../firebase';

export const getProductsByLowerPrice = () => {
  const db = getFirestore()
  const productsCollection = db.collection("products").where("price", "<", 4000)
  const arrProducts = productsCollection.get()
  .then((querySnapshot) => {
    if (querySnapshot.size === 0) {
        console.log('No products')
    }
    const arr = querySnapshot.docs.map(doc => {
      const { id } = doc
      const { title, description, price, pictureUrl, stock } = doc.data()
      return { id, title, description, price, pictureUrl, stock }
    })
    return arr
  })
  return arrProducts
}