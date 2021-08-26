import React,{ useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import { getProductsByLowerPrice } from '../api/getProducts';
import ItemList from './ItemList'
import Loading from './Loader'

function FeaturedContainer() {
  const [products, setProducts] = useState([])

    useEffect(() => {
      getProductsByLowerPrice()
      .then(item => setProducts(item))
  }, [])

    return <>
        <Container className="itemListContainer">
            {
                products.length === 0 ? <Loading /> : 
              <>
                <h1>Destacados</h1>
                <ItemList items={products} />
              </>
            }
        </Container>
    </>
};

export default FeaturedContainer;