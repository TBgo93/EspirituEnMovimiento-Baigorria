import React,{ useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import getProducts from '../api/getProducts';
import ItemList from './ItemList'

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
    marginTop : 16
}
function ItemListContainer({ greeting }) {
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(greeting || id).then(item =>{
            setProducts(item)
        })
    },[greeting, id])

    return <>
        <Container style={styleFont}>
            <h3 className="text-capitalize">{(greeting || id)}</h3>
            <ItemList items={products}/>
        </Container>
    </>
};

export default ItemListContainer;