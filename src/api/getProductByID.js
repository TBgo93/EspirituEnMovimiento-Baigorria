import productos from './Products'

function getProductByID(idProduct) {
  const promiseProduct = new Promise((resolve, reject) => {
      setTimeout(() =>{
          resolve(productos)
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