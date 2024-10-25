// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
    
  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkVsmauJEMyvyAorWSjCsLj-OBrkeDRT0",
  authDomain: "ecommerce-react-1ecad.firebaseapp.com",
  projectId: "ecommerce-react-1ecad",
  storageBucket: "ecommerce-react-1ecad.appspot.com",
  messagingSenderId: "8260603621",
  appId: "1:8260603621:web:62c2c8ac46e2d870e68e0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener productos
export async function getSingleProduct(id) {
    const documentRef = doc(db, 'item', id);
  
    try {
      const snapshot = await getDoc(documentRef);
      if (snapshot.exists()) {
        return snapshot.data();
      } else {
        console.log('El documento no existe!');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }


 
  
  //obtener toda una coleccion
  export async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'item'));
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }
  
  //filtros de precio
  export async function filterProductsByPrice(price) {
    try {
      const filteredQuery = query(
        collection(db, 'Item'),
        where('price', '<', price)
      );
      const querySnapshot = await getDocs(filteredQuery);
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }
  
  //enviar una nueva orden de pedido
  export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');
  
    try {
      const docRef = await addDoc(ordersCollection, order);
      console.log('Nueva orden generada: ' + docRef.id);
      return docRef.id;
    } catch (error) {
      console.log('Error al agregar el documento: ' + error);
    }
  }
  
  //actualizacion de un producto
  export async function updateProduct(id, toUpdate) {
    const itemRef = doc(db, 'item', id);
    try {
      await updateDoc(itemRef, toUpdate);
    } catch (error) {
      console.log('Error de actualizacion: ' + error);
    }
  }

  export { db };