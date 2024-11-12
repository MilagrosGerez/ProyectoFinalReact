import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContex';
import ItemCount from './ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext); // Obtener la función addItem del contexto
    const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada
    const [addedToCart, setAddedToCart] = useState(false);
 
    if (!item) {
        return <p>Cargando...</p>;
    } 

    const handleAddToCart = () => {
        addItem(item, quantity); 
        setAddedToCart(true);
        console.log(`Agregaste ${quantity} unidades de ${item.name}`);
    };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount 
    initial={1} 
    stock={item.stock} 
    onAdd={(quantity) => handleAddToCart(quantity)} 
/>
            {!addedToCart ? (
                <button onClick={handleAddToCart}>Agregar al carrito</button>
            ) : (
                <p>Producto agregado al carrito</p>
            )}
        </div>
    );
};


export default ItemDetail;