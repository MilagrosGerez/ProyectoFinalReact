import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContex';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
   const { cart, totalPrice, clearCart } = useContext(CartContext);
   const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
   const [orderId, setOrderId] = useState('');

   const handleSubmit = async (e) => {
       e.preventDefault();
       const order = {
           buyer,
           items: cart,
           total: totalPrice(),
           date: new Date(),
       };

       const docRef = await addDoc(collection(db, "orders"), order);
       setOrderId(docRef.id);
       clearCart();
   };

   if (orderId) {
       return <h2>Gracias por tu compra. Tu número de orden es: {orderId}</h2>;
   }

   return (
       <form onSubmit={handleSubmit}>
           <input type="text" className='form-control' placeholder="Nombre" onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} />
           <input type="email" className='form-control' placeholder="Email" onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} />
           <input type="phone" className='form-control' placeholder="Teléfono" onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })} />
           <button type="submit">Finalizar Compra</button>
       </form>
   );
};

export default Checkout;