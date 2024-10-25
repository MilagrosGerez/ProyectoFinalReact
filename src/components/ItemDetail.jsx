import React, { useState } from 'react';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Lógica para agregar el producto al carrito con la cantidad seleccionada
        console.log(`Producto añadido: ${item.name}, Cantidad: ${quantity}`);
    };

    return (
        <div className="item-detail">
            <img src={item.img} alt={item.title} className="item-detail-image" />
            <h2>{item.title}</h2>
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <div>
                <label>Cantidad:</label>
                <input 
                    type="number" 
                    value={quantity} 
                    min="1" 
                    onChange={(e) => setQuantity(Number(e.target.value))} 
                />
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button">
                Añadir al Carrito
            </button>
        </div>
    );
};

export default ItemDetail;