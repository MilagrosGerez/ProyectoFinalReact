import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';


const ItemListContainer = () => {
    const { categoryId } = useParams(); // Obtener la categoría de la URL
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchitem = async () => {
            try {
                const itemCollection = collection(db, "item");

                // Si hay una categoría, se filtran los items por ella
                const itemQuery = categoryId
                    ? query(itemCollection, where("category", "==", categoryId))
                    : itemCollection;

                // Obtener los documentos
                const itemSnapshot = await getDocs(itemQuery);
                const itemList = itemSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setItems(itemList);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchitem();
    }, [categoryId]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (items.length === 0) {
        return <p>No hay productos disponibles en esta categoría.</p>;
    }

    return (
        <div className="item-list-container">
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Precio: ${item.price}</p>
                </div>
            ))}
        </div>
    );
};


export default ItemListContainer;