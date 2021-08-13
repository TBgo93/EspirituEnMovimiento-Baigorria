import { Rutinas, ClasesOnline } from '../api/Products'

function getProducts(arrProducts) {
    if (arrProducts === 'rutinas') {
        arrProducts = Rutinas
    }else if(arrProducts === 'clases') {
        arrProducts = ClasesOnline
    }

    const promiseProducts = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(arrProducts)
        }, 2000)
    });
    
    return promiseProducts.then(res => {
        return res
    }, err => {
        console.log(err)
    });
}

export default getProducts;