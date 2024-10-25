import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', id);

        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            } else {
                console.error("El producto no existe");
            }
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            {loading ? <p>Loading...</p> : item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>}
        </div>
    );
};

export default ItemDetailContainer;
