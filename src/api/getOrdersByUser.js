import { getFirestore } from '../firebase';

export const getOrdersByUser = (username) => {
  const db = getFirestore()
  const ordersCollection = db.collection("orders").orderBy("date", "desc")
  const arrOrders = ordersCollection.get()
  .then((querySnapshot) => {
    if (querySnapshot.size === 0) {
        console.log('No products')
    }
    const arr = querySnapshot.docs.map(doc => {
      const { id } = doc
      const { buyer, date, items, totalPurchase } = doc.data()
      return { id, buyer, date, items, totalPurchase }
    })
    const arrFiltered = arr.filter(element => element.buyer.email === username)
    return arrFiltered
  })
  return arrOrders
}