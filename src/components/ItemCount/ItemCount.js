import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";

function ItemCount(props) {
  // Seteamos valor de conteo y generamos setConteo
  const [num, setConteo] = useState(Number(props.initial));
  const [add, setAdd] = useState("");

  const { addToCart } = useContext(CartContext);

  // Sumar
  const sumar = () => {
    if (num < props.stock) {
      setConteo(num + 1);
    } else {
      setAdd("No hay más stock");
    }
  };
  // Restar
  const restar = () => {
    if (num > 0) {
      setConteo(num - 1);
    }
  };

  // Agregar carrito
  const addon = () => {
    if (num < props.stock) {
      setAdd(num);
      setConteo(0);
      addToCart(props.itemProp, num);

      props.onSaveData(num);
    } else {
      setAdd("No hay más stock");
    }
  };

  return (
    <div className="contador">
      <button className="tracker" onClick={restar}>
        <FontAwesomeIcon icon={faAngleLeft} color="red" />
      </button>
      <h1>{num}</h1>
      <button className="tracker" onClick={sumar}>
        <FontAwesomeIcon icon={faAngleRight} color="green" />
      </button>
      <button className="btn btnOnAdd btn-outline-secondary" onClick={addon}>
        Agregar al carrito
      </button>
      <p>{add}</p>
    </div>
  );
}

export default ItemCount;
