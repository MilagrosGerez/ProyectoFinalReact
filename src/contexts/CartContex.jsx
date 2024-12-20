import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un item al carrito
    const addItem = (item, quantity) => {
        const itemInCart = cart.find(cartItem => cartItem.id === item.id);
        
        if (itemInCart) {
            // Si el item ya está en el carrito, aumenta la cantidad
            setCart(cart.map(cartItem => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            ));
        } else {
            // Si el item no está en el carrito, lo agrega con la cantidad especificada
            setCart([...cart, { ...item, quantity }]);
        }
    };
 
    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };
 
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
 
    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeFromCart, clearCart, totalPrice, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};