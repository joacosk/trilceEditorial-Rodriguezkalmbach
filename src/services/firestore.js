// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection,query,where, doc, getDocs, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOAoO5T6z6pDEDBzeN7udrqCJ2ELTB2MA",
  authDomain: "trilce-300ad.firebaseapp.com",
  projectId: "trilce-300ad",
  storageBucket: "trilce-300ad.appspot.com",
  messagingSenderId: "283293677062",
  appId: "1:283293677062:web:fff3992010f2a20cffb587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
 
// Firestore se maneja con promesas, tenemos que crear una función asíncrona.
// GetDocs es una promesa, por esa razón le señalamos que espere la respuesta para asignarle a docSnapshot
export async function getData(){
    const itemPubliRef = collection(db,"items"); // base y nombre de documento
    const docSnapshot = await getDocs(itemPubliRef)
    //Reescribimos array que tenga "docs" dentro de snapshot
    const dataPublis = docSnapshot.docs.map((item)=>{
        // Creamos objeto personalizado con toda la info de data más el id de cada documento
        const publi = {
            ...item.data(),
            id: item.id
        }
        return publi;
    })
    return(dataPublis);
};

export async function getDataByCategory(categoria){
    const itemPubliRef = collection(db,"items"); // base y nombre de documento
    
    const q = query(itemPubliRef,where("categoria","==",categoria))

    const docSnapshot = await getDocs(q)

    const dataPublis = docSnapshot.docs.map((item)=>{
        // Creamos objeto personalizado con toda la info de data más el id de cada documento
        const publi = {
            ...item.data(),
            id: item.id
        }
        return publi;
    })
    return(dataPublis);


}


export async function getSingleData(id){
    const itemPubliCollectionRef = collection(db,"items"); // base y nombre de documento
    const docRef = doc(itemPubliCollectionRef, id) // Pasamos colección y ID

    const docSnapshot = await getDoc(docRef); // Le pasamos el docRef al docSnapshot

    return docSnapshot.data();
}
export default db