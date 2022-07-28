import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../services/firestore.js";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);

  const [item, setItem] = useState({});
  const { publicacionId } = useParams();

  // Traemos Solamente el item de la lista en posición publicacionId
  useEffect(() => {
    getSingleData(publicacionId)
      .then((data) => {
        setItem(data);
      })
      .catch((errorMsg) => {
        console.error(errorMsg);
      })
      .finally(() => setIsLoading(false));
  }, [publicacionId]);

  return isLoading ? (
    <h1 className="loading">Cargando página...</h1>
  ) : (
    <div className="item-detail-container">
      <ItemDetail key={publicacionId} itemProp={item} />
    </div>
  );
}

export default ItemDetailContainer;
