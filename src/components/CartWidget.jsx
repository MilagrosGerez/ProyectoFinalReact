import { useContext } from 'react';
import { CartContext } from '../contexts/CartContex';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart, totalPrice } = useContext(CartContext);
 
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Sumar la cantidad de productos
 
    if (cart.length === 0) {
        return (
            <Link to="/cart" className="cart-widget">
                🛒 Tu carrito está vacío
            </Link>
        );
    }
    return (
        <Link to="/cart" className="cart-widget">
            🛒 {totalItems} productos - ${totalPrice()}
        </Link>
    );
};

export default CartWidget;