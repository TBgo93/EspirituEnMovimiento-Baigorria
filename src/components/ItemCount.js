import React,{ useState } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import { ModalAgregarCarrito } from './Modals'


function ItemCount({ stock, initial, onAdd }) {
    if(stock === 0 || stock === undefined){
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
            <Card.Content>
                <div className="count-container">
                    <Button color='black' icon onClick={itemDecrease}>
                        <Icon name='minus' />
                    </Button>
                        <Card.Description>{itemCount}</Card.Description>
                    <Button color='black' icon onClick={itemIncrease}>
                        <Icon name='plus' />
                    </Button>
                </div>
                <ModalAgregarCarrito>
                <Button
                    disabled={stock === 0 || stock === undefined ? true : false}
                    color="blue"
                    onClick={() => onAdd(itemCount)}>
                    {
                        stock === 0 || stock === undefined ? 'Sin Stock' : 'Agregar al carrito'
                    }
                </Button>
                </ModalAgregarCarrito>
            </Card.Content>
        </>
    )
}


export default ItemCount;