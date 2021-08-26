import { getFirestore } from '../firebase';

export const getProductsByCategories = (idCategory) => {
  const db = getFirestore()
  const productsCollection = db.collection("products").where("categoryName", "==", `${idCategory}`)
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