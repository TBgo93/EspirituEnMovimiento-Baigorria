import React,{ useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import getProductByID from '../api/getProductByID';
import ItemDetail from './ItemDetail';

const styleFont = {
    fontWeight : 600,
    textAlign : "center",
    marginTop: 32
}

function ItemDetailContainer() {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        getProductByID(Number(id)).then(itemDetail =>{
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