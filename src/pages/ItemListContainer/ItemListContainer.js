import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { listadoProductos } from "../../Data/publicaciones.js";
import { ItemList } from "../../components/ItemList/ItemList.js";

function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        listadoProductos.length > 0
          ? resolve(listadoProductos)
          : reject("No hay datos");
      }, 2000);
    });
  };

  useEffect(() => {
    getProductos()
      .then((res)=> setProductos(res))
      .catch((err) => console.log(err));
  },[]);
  
  // Utilizando fetch
  /*useEffect(()=>{
    fetch("./publicaciones.json")
    .then(res => res.json())
    .then(data => setProductos(data))
    .catch(err => console.log(err))
  },[])
*/

  return (
    <div className="ItemListContainer">
      <h3>{titulo}</h3>
      <div className="tarjetasCatalogo">
        <ul>
        <ItemList listadoProductos ={productos} />
        </ul>
      </div>
    </div>
  );
}

export default ItemListContainer;
