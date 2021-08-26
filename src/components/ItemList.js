import React from 'react'
import Item from './Item'

function ItemList({ items }) {
    return(
        <div className="ItemList">
        {
            items.map(({ id, title, description, price, pictureUrl }) =>
                <Item 
                    key={id} 
                    id={id} 
                    title={title}
                    description={description} 
                    price={price} 
                    pictureUrl={pictureUrl} 
                />
            )
        }
        </div>
    )
}

export default ItemList