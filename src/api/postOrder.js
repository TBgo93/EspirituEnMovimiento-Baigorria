import { getFirestore } from '../firebase';

export const postOrder = (newOrder, items) => {
  const db = getFirestore();
  const orders = db.collection("orders");
  const batch = db.batch();

  const idPurchase = orders
    .add(newOrder)
    .then((res) => {
      items.forEach(({ item, quantity }) => {
        const docRef = db.collection("products").doc(item.id);
        batch.update(docRef, { stock: item.stock - quantity });
      });
      batch.commit();
      const idPurchase = res.id;
      return idPurchase
    })
    .catch((err) => console.log(err));
  
  return idPurchase
}
