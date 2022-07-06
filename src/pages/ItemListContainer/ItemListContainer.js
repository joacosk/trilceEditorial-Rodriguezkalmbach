import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { listadoProductos } from "../../Data/publicaciones.js";
import { ItemList } from "../../components/ItemList/ItemList.js";
import { useParams } from "react-router-dom";

function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { categoriaId } = useParams();
  console.log(categoriaId);

  const getProductos = () => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const myData = categoriaId
          ? listadoProductos.filter((item) => item.categoria === categoriaId)
          : listadoProductos;
        resolve(myData);
      }, 200);
    });
  };
  useEffect(() => {
    getProductos()
      .then((res) => {
        setProductos(res);
      })
      .finally(() => setIsLoading(false)); // --> Pasa a false loading
  }, [categoriaId]); // Hay que indicar que cambie cuando cambie categoriaId

  return isLoading ? (
    <h1>Cargando página...</h1>
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
