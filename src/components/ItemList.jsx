import Item from "./Item";


const ItemList = ({ item = [] }) => {

    return (
        <div className="item-list">
            {item.map((item) => (
                <Item key={item.id} item={item} /> // Renderiza el componente `Item` para cada producto
            ))}
        </div>
    );
};

export default ItemList;