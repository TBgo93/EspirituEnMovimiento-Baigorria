import React,{ useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/getProductById';
import ItemDetail from './ItemDetail';

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
}

function ItemDetailContainer() {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        getProductById(id).then(itemDetail =>{
            setProductDetail(itemDetail)
        })
    }, [id])
    
    return <>
        <Container style={styleFont}>
            <ItemDetail item={productDetail}/>
        </Container>
    </>
};

export default ItemDetailContainer;