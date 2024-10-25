import { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart([...cart, { ...item, quantity }]);
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