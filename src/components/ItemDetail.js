import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext';
import { Card, Image, Loader } from 'semantic-ui-react';
import ItemCount from './ItemCount'
import { CartButton, ConditionalButtons } from './CartButton'


function ItemDetail({ item }) {
	const { id, title, price, description, stock,  pictureUrl } = item
    const [quantity, setQuantity] = useState(0)
    const { addItem, isInCart } = useContext(CartContext)

	const onAdd = (quantityOnAdd) => {
        setQuantity(quantityOnAdd)
		addItem(item, quantityOnAdd, true)
    }

    return (
        <>
        {
            item.length === 0 ? <Loader  active inline='centered' size='large'>Cargando...</Loader>
            :
            <div className="ItemDetail">
                <Image src={pictureUrl} wrapped ui={false} />
                <Card>
                    <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        <Card.Description>{description}</Card.Description>
                    <Card.Content extra>Precio: ${price}</Card.Content>
                    {
                        !isInCart(id) ? (quantity === 0 ? <ItemCount stock={stock} initial={1} onAdd={onAdd} /> : <CartButton />) : <ConditionalButtons id={id} stock={Number(stock) - Number(quantity)} />
                    }
                    </Card.Content>
                </Card>
            </div>
        }
    </>
    )
}

export default ItemDetail