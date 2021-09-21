import { getFirestore } from '../firebase';

export const getUserById = (idUser) => {
  const db = getFirestore()
  const usersCollection = db.collection("users").where("id", "==", `${idUser}`)
  const user = usersCollection.get()
  .then((querySnapshot) => {  
    if (querySnapshot.size === 0) {
      console.log('No user')
    }
    const [ arr ] = querySnapshot.docs.map(doc => {
      const { fullname, email, phone } = doc.data()
      return { fullname, email, phone }
    })
    return arr
  })
  return user
}