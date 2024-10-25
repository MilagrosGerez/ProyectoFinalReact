import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';

const ItemListContainer = ({ categoryId }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'item');
        
        getDocs(itemsCollection).then((snapshot) => {
            const productList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setItems(categoryId ? productList.filter(item => item.categoryId === categoryId) : productList);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div>
            {loading ? <p>Loading...</p> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;