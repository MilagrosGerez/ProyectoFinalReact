// src/components/Item.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="item-card">
            <img src={item.img} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <Link to={`/item/${item.id}`} className="details-button">
                Ver Detalles
            </Link>
        </div>
    );
};

export default Item;
