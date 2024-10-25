import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContex';
import ItemCount from './ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addItem(item, quantity);
    };

    return (
        <div className="item-card">
            <img src={item.img} alt={item.title} className="item-img" />
            <h2>{item.title}</h2>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={setQuantity} />
            
        </div>
    );
};

export default ItemDetail;