import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContex';
import ItemCount from './ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext); // Obtener la función addItem del contexto
    const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada
 const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        addItem(item, quantity); 
        setAddedToCart(true);
    };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount quantity={quantity} setQuantity={setQuantity} />
            {!addedToCart ? (
                <button onClick={handleAddToCart}>Agregar al carrito</button>
            ) : (
                <p>Producto agregado al carrito</p>
            )}
        </div>
    );
};


export default ItemDetail;