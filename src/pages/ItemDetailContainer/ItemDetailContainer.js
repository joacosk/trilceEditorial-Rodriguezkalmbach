import { useEffect, useState } from "react";
import { listadoProductos } from "../../Data/publicaciones.js";
import ItemDetail from "../../components/ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [item, setItem] = useState({});

  const { publicacionId } = useParams();
  

  const getItem = () => {
    setIsLoading(true);

    return new Promise((resolve, reject) =>
      setTimeout(() => {
        listadoProductos.length > 0
          ? resolve(listadoProductos)
          : reject("No hay datos");
      }, 500)
    );
  };

  // Traemos Solamente el item de la lista en posición publicacionId
  useEffect(() => {
    getItem()
      .then((res) => res[publicacionId])
      .then((data) => setItem(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false)); // --> Pasa a false loading
  }, []);

  return isLoading ? (
    <h1>Cargando página...</h1>
  ) :(
    <div className="item-detail-container">
      <ItemDetail itemProp={item} />
    </div>
  );
}

export default ItemDetailContainer;
