import Item from "./Item";
const ItemList = ({ item = [] }) => {
    return (
        <div>
            {item.length > 0 ? (
                item.map((item) => <Item key={item.id} item={item} />)
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
};

export default ItemList;