import { useContext } from 'react';
import { CartContext } from '../contexts/CartContex';
import { Link } from 'react-router-dom';

const CartDetail = () => {
   const { cart, totalPrice, clearCart } = useContext(CartContext);

   if (cart.length === 0) {
       return (
           <div>
               <h2>Tu carrito está vacío</h2>
               <Link to="/">Volver al catálogo</Link>
           </div>
       );
   }

   return (
       <div>
           <h2>Carrito de compras</h2>
           {cart.map((item) => (
               <div key={item.id}>
                   <p>{item.title} - {item.quantity} unidades</p>
                   <p>Precio: ${item.price}</p>
               </div>
           ))}
           <h3>Total: ${totalPrice()}</h3>
           <button onClick={clearCart}>Vaciar Carrito</button>
           <Link to="/checkout">Finalizar Compra</Link>
       </div>
   );
};

export default CartDetail;
