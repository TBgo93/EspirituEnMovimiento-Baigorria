import React, { useState, useContext } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { CartContext } from '../context/cartContext';
import { WishListContext } from '../context/wishListContext';
import ItemCount from './ItemCount'
import Loading from './Loader'
import { AddMore } from './CustomButtons'


function ItemDetail({ item }) {
	const { id, title, price, description, stock,  pictureUrl } = item
    const [quantity, setQuantity] = useState(0)
    const { addItem, isInCart, totalQuantity } = useContext(CartContext)
    const { addList, removeToList, isInList } = useContext(WishListContext)
    const history = useHistory();

    const handleClick = () => {
    history.push(`/cart`);
    }

	const onAdd = (quantityOnAdd) => {
        setQuantity(quantityOnAdd)
        addItem(item, quantityOnAdd, true)
        totalQuantity(quantityOnAdd)
        setTimeout(() => handleClick(), 1000)
    }

    return (
        <>
        {
            item.length === 0 ? <Loading />
            :
            <div className="ItemDetail">
                <Image src={pictureUrl} wrapped ui={false} />
                <Card>
                    <Card.Content>
                        <Card.Header>
                            {title}
                        {
                            isInList(id) ?
                            <Icon size="small" name="heart" color="red" onClick={() => removeToList(id)} />
                            :
                            <Icon size="small" name="heart outline" onClick={() => addList(item ,true)} />
                        }
                        </Card.Header>
                    
                        <Card.Description>{description}</Card.Description>
                        <Card.Content extra>Precio: ${price}</Card.Content>
                        {
                            !isInCart(id) ?
                            (
                                quantity === 0
                                ?
                                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                                :
                                null
                            )
                            :
                            <AddMore id={id} stock={Number(stock) - Number(quantity)} />
                        }
                    </Card.Content>
                </Card>
            </div>
        }
    </>
    )
}

export default ItemDetail