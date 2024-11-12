import { Link } from 'react-router-dom';
import { useCart } from "../contexts/CartContext";

const Item = ({ item }) => {
    const { addItem } = useCart();
    return (
        <div className="item-card">
            <img src={item.img} alt={item.title} className="item-img" />
            <h3 className='item-title'>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <Link to={`/item/${item.id}`} className="btn btn-outline-warning details-button">
                Ver Detalles
            </Link>
        </div>
    );
};

export default Item;
