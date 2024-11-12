import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ initial = 1, stock = 0  }) => {
    const [quantity, setQuantity] = useState(Math.max(1, Math.min(initial, stock)));

    const increment = ( ) => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        };
    }
    
    const decrement = ( ) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            };
        }

        return (
            <>
                <div className='count'>
                    <button className='ButtonD' onClick={decrement} disabled={quantity === 1}>-</button>
                    <span>{quantity}</span>
                    <button className='ButtonI' onClick={increment} disabled={quantity === stock}>+</button>
                    
              </div>
            </>
        )
    }


    export default ItemCount;