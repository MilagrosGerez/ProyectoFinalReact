import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [item, setitem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchitem = async () => {
            try {
                const itemCollection = collection(db, "item"); // Asegúrate de que el nombre de la colección sea correcto
                const itemSnapshot = await getDocs(itemCollection);
                const itemList = itemSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setitem(itemList);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchitem();
    }, []);

    return (
        <div>
            {loading ? <p>Cargando productos...</p> : <ItemList item={item} />}
        </div>
    );
};

export default ItemListContainer;