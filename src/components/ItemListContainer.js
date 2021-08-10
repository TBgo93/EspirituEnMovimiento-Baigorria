import React,{ useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import getProducts from '../api/getProducts';
import productos from '../api/Products'
import ItemList from './ItemList'

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
    marginTop : 16
}
function ItemListContainer( { greeting } ){
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(productos).then(item =>{
            setProducts(item)
        })
    },[])

    return <>
        <Container style={styleFont}>
            <h3>{greeting}</h3>
            <ItemList items={products}/>
        </Container>
    </>
};

export default ItemListContainer;