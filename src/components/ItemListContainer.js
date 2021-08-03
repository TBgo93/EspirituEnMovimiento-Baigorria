import React from 'react';
import { Container } from 'react-bootstrap'
import ItemCount from './ItemCount'

function ItemListContainer( { greeting } ){
    const styleFont = {
        fontWeight : 600,
        textAlign : "center",
        marginTop : 16
    }
    return <>
        <Container style={styleFont}>
            <h3>{greeting}</h3>
            <ItemCount stock={6} initial={1} />
        </Container>
    </>
};

export default ItemListContainer;