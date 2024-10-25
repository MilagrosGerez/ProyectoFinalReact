import Item from "./Item";
const ItemList = ({ items = [] }) => {
    return (
        <div>
            {items.length > 0 ? (
                items.map((item) => <Item key={item.id} item={item} />)
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
};

export default ItemList;