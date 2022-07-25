import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { listadoProductos } from "../../Data/publicaciones.js";
import { ItemList } from "../../components/ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import {getData, getDataByCategory} from "../../services/firestore"

function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { categoriaId } = useParams();
  

  useEffect(() => {
    categoriaId?
    getDataByCategory(categoriaId) 
      .then((data) => {
        setProductos(data);
      })
      .finally(() => setIsLoading(false))
      :
      getData()
      .then((data) => {
        setProductos(data);
      })
      .finally(() => setIsLoading(false)); // --> Pasa a false loading
  }, [categoriaId]); // Hay que indicar que cambie cuando cambie categoriaId

  return isLoading ? (
    <h1 className="loading">Cargando página...</h1>
  ) : (
    <div className="ItemListContainer">
      <h3>{titulo}</h3>
      <div className="tarjetasCatalogo">
        <ul>
          <ItemList listadoProductos={productos} />
        </ul>
      </div>
    </div>
  );
}

export default ItemListContainer;
