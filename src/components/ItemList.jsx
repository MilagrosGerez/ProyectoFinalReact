import Item from "./Item";
const ItemList = ({ item = [] }) => {

     const { categoryId } = useParams();
     return (
        <div className="item-list">
            {items.map(item => (
                <div key={item.id} className="item-card">
                    <p>{item.img}</p>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;