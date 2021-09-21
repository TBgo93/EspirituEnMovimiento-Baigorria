import React, { useContext } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { CartContext } from '../context/cartContext';
import { WishListContext } from '../context/wishListContext';
import ItemCount from './ItemCount'
import Loading from './Loader'
import { ToggleFavorite } from './Modals'
import { ModalAgregarCarrito } from './Modals'



function ItemDetail({ item }) {
	const { id, title, price, description, stock,  pictureUrl } = item
    const { addItem, totalQuantity } = useContext(CartContext)
    const { addList, removeToList, isInList } = useContext(WishListContext)
    const history = useHistory();

	const onAdd = (quantityOnAdd) => {
        addItem(item, quantityOnAdd, true, id)
        totalQuantity(quantityOnAdd)
        ModalAgregarCarrito()
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
                            <Icon
                                size="small"
                                color={isInList(id) ? 'red' : 'grey'}
                                name={`heart${isInList(id) ? '' : ' outline'}`}
                                onClick={isInList(id)
                                    ? () => {
                                        removeToList(id);
                                        ToggleFavorite(isInList(id))
                                    }
                                    : () => {
                                        addList(item, true);
                                        ToggleFavorite(isInList(id))
                                    }
                                }
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