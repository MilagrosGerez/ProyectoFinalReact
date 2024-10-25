import { createContext, useState } from "react";

export const CartContext = createContext();

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
 
    const clearCart = () => {
        setCart([]);
    };
 
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
 
    return(
        <CartContext.Provider value={{ cart, addItem, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}