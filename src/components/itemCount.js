import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./itemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  // Seteamos valor de conteo y generamos setConteo --> Arranca en valor inicial (hay que transformalo a numero entero)
  const [num, setConteo] = useState(Number(initial));
  const [add, setAdd] = useState("");

  // Creamos funcion sumar --> ejecuta conteo y onAdd
  const sumar = () => {
    if (num < stock) {
      setConteo(num + 1);
      setAdd(onAdd);
    } else {
      setAdd("No hay más stock");
    }
  };
  // Creamos funcion restar
  const restar = () => {
    if (num > 0) {
      setConteo(num - 1);
    }
  };

  return (
    <div className="contador">
      <button className="tracker" onClick={restar}>
        <FontAwesomeIcon icon={faAngleLeft} color="red" />
        <FontAwesomeIcon icon="fa-solid fa-heart" beat />
      </button>
      <h1>{num}</h1>
      <button className="tracker" onClick={sumar}>
        <FontAwesomeIcon icon={faAngleRight} color="green" />
        <FontAwesomeIcon icon="fa-solid fa-heart" beat />
      </button>
      <p>{add}</p>
    </div>
  );
}

export default ItemCount;
