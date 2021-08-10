function getProducts(arrProducts){
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