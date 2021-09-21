import { getFirestore } from '../firebase';

const handleFinishPurchase = (userInfo, listCart, totalPurchase, items, setOrder, clearAll) => {
  const db = getFirestore();
  const orders = db.collection("orders");
  const batch = db.batch();

  const newOrder = {
    buyer: {
      name: userInfo.fullname,
      phone: userInfo.phone,
      email: userInfo.email,
    },
    items: listCart,
    date: new Date(),
    totalPurchase: totalPurchase,
  };

  orders
    .add(newOrder)
    .then((res) => {
      items.forEach(({ item, quantity }) => {
        const docRef = db.collection("products").doc(item.id);
        batch.update(docRef, { stock: item.stock - quantity });
      });
      batch.commit();
      setOrder(res.id)
    })
    .catch((err) => console.error(err))
    .finally(() => clearAll())
}
export { handleFinishPurchase }