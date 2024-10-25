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
        <div className="item-detail">
            <img src={item.img} alt={item.title} className="item-detail-image" />
            <h2>{item.title}</h2>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={setQuantity} />
            <button onClick={handleAddToCart}>Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetail;