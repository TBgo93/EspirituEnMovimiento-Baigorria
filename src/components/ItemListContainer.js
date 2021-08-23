import React,{ useState, useEffect } from 'react';
import { Container, Loader } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import getProducts from '../api/getProducts';
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(greeting || id).then(item =>{
            setProducts(item)
        })
    },[greeting, id])

    return <>
        <Container className="itemListContainer">
            {
                products.length === 0 ? <Loader  active inline='centered' size='large'>Cargando...</Loader> : 
                <>
                    <h1 className="text-capitalize">{(greeting || id)}</h1>
                    <ItemList items={products} />
                </>
            }
        </Container>
    </>
};

export default ItemListContainer;