//import { useContext } from 'react';
import {  useCart } from '../contexts/CartContex';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
 
    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.name} - Cantidad: {item.quantity}</p>
                            <p>Precio: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <h3>Total de productos: {totalItems()}</h3>
                    <h3>Precio total: ${totalPrice()}</h3>
                    <button onClick={clearCart}>Vaciar carrito</button>
                </>
            )}
        </div>
    );
};


const CartWidget = () => {
    const { totalItems } = useCart();

    return (
        <Link to="/cart" className="cart-widget">
            🛒 {totalItems()} productos
        </Link>
    );
};

export default CartWidget;