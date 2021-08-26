import React,{ useState } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'


function ItemCount({ stock, initial, onAdd }) {
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
                {
                    stock === 0 || stock === '0' || stock === undefined
                    ?
                    (<Button disabled>Sin Stock</Button>)
                    :
                    (
                        <Button color="blue" onClick={() => onAdd(itemCount)}>Agregar al carrito</Button>
                    )
                    }
            </Card.Content>
        </>
    )
}

export default ItemCount;