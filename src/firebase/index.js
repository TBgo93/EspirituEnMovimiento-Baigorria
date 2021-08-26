import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAQNkf26FW633rkO0rubSYwcHzg7NwYacY",
  authDomain: "ecommerce-coderhouse-997cb.firebaseapp.com",
  projectId: "ecommerce-coderhouse-997cb",
  storageBucket: "ecommerce-coderhouse-997cb.appspot.com",
  messagingSenderId: "528483253464",
  appId: "1:528483253464:web:ad5fc7c202efc0453b6bad"
})

const getFirebase = () => app

const getFirestore = () => firebase.firestore()

export { getFirebase, getFirestore }