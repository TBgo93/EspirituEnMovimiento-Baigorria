import React, { useContext } from 'react'
import { Card, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { CartContext } from '../context/cartContext';
import { WishListContext } from '../context/wishListContext';
import ItemCount from './ItemCount'
import Loading from './Loader'
import { ToggleFavorite } from './CustomButtons'


function ItemDetail({ item }) {
	const { id, title, price, description, stock,  pictureUrl } = item
    const { addItem, totalQuantity } = useContext(CartContext)
    const { addList, removeToList, isInList } = useContext(WishListContext)
    const history = useHistory();

	const onAdd = (quantityOnAdd) => {
        addItem(item, quantityOnAdd, true, id)
        totalQuantity(quantityOnAdd)
        setTimeout(() => {
            history.push(`/cart`)
        }, 575);
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
                            <ToggleFavorite
                                fnAdd={() => addList(item, true)}
                                fnRemove={() => removeToList(id)}
                                isInList={isInList(id)}
                            />
                        </Card.Header>
                        <Card.Description>{description}</Card.Description>
                        <Card.Content extra>Precio: ${price}</Card.Content>
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    </Card.Content>
                </Card>
            </div>
        }
    </>
    )
}

export default ItemDetail