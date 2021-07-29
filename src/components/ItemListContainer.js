import React from 'react';
import { Container } from 'react-bootstrap'

function ItemListContainer( { greeting } ){
    const styleFont = {
        fontWeight : 600,
        textAlign : "center",
        marginTop : 16
    }
    return <>
        <Container style={styleFont}>
            <h3>{greeting}</h3>
        </Container>
    </>
};

export default ItemListContainer;