import React,{ useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import getProductByID from '../api/getProductByID';
import ItemDetail from './ItemDetail';

const styleFont = {
  fontWeight : 600,
  textAlign : "center",
  marginTop: 32
}
function ItemDetailContainer({ id }){
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
      getProductByID(id).then(itemDetail =>{
        setProductDetail(itemDetail)
      })
    },[id])

    return <>
      <Container style={styleFont}>
        <ItemDetail item={productDetail}/>
      </Container>
    </>
};

export default ItemDetailContainer;