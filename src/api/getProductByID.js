import { Rutinas, ClasesOnline } from './Products'

function getProductByID(idProduct) {
  let arrProduct = idProduct <= 5 ? Rutinas : ClasesOnline;

  const promiseProduct = new Promise((resolve, reject) => {
      setTimeout(() =>{
          resolve(arrProduct)
      }, 2000)
  });
  
  return promiseProduct
    .then(res => {
      return res.find(element => element.id === idProduct)
  }, err => {
      console.log(err)
  });
}

export default getProductByID;