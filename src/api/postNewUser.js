import { getFirestore } from '../firebase';

const handleNewUser = (user, idUser) => {
  const db = getFirestore();
  const users = db.collection("users");

  const newUser = {
    id: idUser,
    fullname: user.fullname,
    phone: user.phone,
    email: user.email,
    createdAt: new Date(),
  };

  users.add(newUser)
}
export { handleNewUser }