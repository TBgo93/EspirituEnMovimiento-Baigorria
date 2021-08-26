import React,{ useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { getProductsByCategories } from '../api/getProductsByCategories';
import ItemList from './ItemList'
import Loading from './Loader'


function ItemListContainer() {
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsByCategories(id)
            .then(item => setProducts(item))
    }, [id])

    return <>
        <Container className="itemListContainer">
            {
                products.length === 0 ? <Loading /> :
                <>
                    <h1>{id}</h1>
                    <ItemList items={products} />
                </>
            }
        </Container>
    </>
};

export default ItemListContainer;