import React,{ useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { MdAdd, MdRemove } from 'react-icons/md';


function ItemCount({ stock, initial, onAdd }){
    if(stock === 0 || stock === '0' || stock === undefined){
        initial = 0
    }
    const [itemCount, setItemCount] = useState(Number(initial));
    const itemIncrease = () => {
        if(itemCount < stock){
            setItemCount(itemCount + Number(1))
        }
    }
    const itemDecrease = () => {
        if(itemCount > initial){
            setItemCount(itemCount - Number(1))
        }
    }

    return (
        <>
        <Card>
            <Card.Body>
                <Container className="d-flex justify-content-around">
                    <Button variant="outline-primary" onClick={itemDecrease}>
                        <MdRemove />
                    </Button>
                    <Card.Text>{itemCount}</Card.Text>
                    <Button variant="outline-primary" onClick={itemIncrease}>
                        <MdAdd />
                    </Button>
                </Container>
                </Card.Body>
                {stock === 0 || stock === '0' || stock === undefined ? (
                <Button variant="primary" disabled>Sin Stock</Button>
                ) : (
                <Button variant="primary" onClick={() => onAdd(itemCount)}>Agregar al carrito</Button>
                )
                }
        </Card>
        </>
    )
}

export default ItemCount;