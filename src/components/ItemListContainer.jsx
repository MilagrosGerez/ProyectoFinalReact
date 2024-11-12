import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';


const ItemListContainer = () => {
    const { categoryId } = useParams(); // Obtener la categoría de la URL
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchitem = async () => {
            try {
                const itemsCollection = collection(db, "item");
                const itemsQuery = categoryId
                    ? query(itemsCollection, where("category", "==", categoryId))
                    : itemsCollection;
    
                const itemsSnapshot = await getDocs(itemsQuery);
                const itemsList = itemsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
    


            console.log("Items obtenidos:", itemsList); // Depuración
                setItem(itemsList);
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

    if (item.length === 0) {
        return <p>No hay productos disponibles en esta categoría.</p>;
    }

    return (
        <div className="item-list-container">
            <ItemList item={item} />
        </div>
    );
};


export default ItemListContainer;