import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { listadoProductos } from "../../Data/publicaciones.js";
import { ItemList } from "../../components/ItemList/ItemList.js";
import {useParams} from "react-router-dom"

function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);

  const {categoriaId}= useParams()
  console.log(categoriaId)
  const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const myData =  categoriaId 
        ? listadoProductos.filter((item)=> item.categoria === categoriaId )
        : listadoProductos ;

        resolve(myData);
      }, 1000);
    });
  };

  useEffect(() => {
    getProductos()
      .then((res)=> setProductos(res))
      .catch((err) => console.log(err));
  },[]);
  

  return (
      <div className="tarjetasCatalogo">
              <h3>{titulo}</h3>

        <ItemList listadoProductos ={productos} />
      </div>
  );
}

export default ItemListContainer;
