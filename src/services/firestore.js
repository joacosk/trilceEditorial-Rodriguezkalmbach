// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDocs,
  getDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOAoO5T6z6pDEDBzeN7udrqCJ2ELTB2MA",
  authDomain: "trilce-300ad.firebaseapp.com",
  projectId: "trilce-300ad",
  storageBucket: "trilce-300ad.appspot.com",
  messagingSenderId: "283293677062",
  appId: "1:283293677062:web:fff3992010f2a20cffb587",
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// FUNCION OBTENER ELEMENTOS EN GENERAL
export async function getData() {
  const itemPubliRef = collection(db, "items"); 

  const docSnapshot = await getDocs(itemPubliRef);

  const dataPublis = docSnapshot.docs.map((item) => {
    const publi = {
      ...item.data(),
      id: item.id,
    };
    return publi;
  });
  return dataPublis;
}

// FUNCION OBTENER ELEMENTOS POR CATEGORIA
export async function getDataByCategory(categoria) {
  const itemPubliRef = collection(db, "items"); 

  const q = query(itemPubliRef, where("categoria", "==", categoria));

  const docSnapshot = await getDocs(q);

  const dataPublis = docSnapshot.docs.map((item) => {
    const publi = {
      ...item.data(),
      id: item.id,
    };

    return publi;
  });
  return dataPublis;
}

// FUNCION OBTENER ELEMENTOS INDIVIDUALES
export async function getSingleData(id) {
  const itemPubliCollectionRef = collection(db, "items"); 
  const docRef = doc(itemPubliCollectionRef, id); 

  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}

// FUNCION INSERTAR DATOS COMPRA
export async function setBuy(nuevaCompra){
    const compraCollectionRef= collection(db,"NOMBRE COLECCION")

    

    addDoc(compraCollectionRef,nuevaCompra).then(({id})=> console.log(id))
}

export async function createBuyOrder(orderData){
  const buyTimestamp =Timestamp.now()

  const orderWithDate = {
    ...orderData,
    date:buyTimestamp
  };

  const miColec = collection(db,"orders");
  const orderDoc = await addDoc(miColec,orderWithDate)

  return orderDoc
}

export default db;
