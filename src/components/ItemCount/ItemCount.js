import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  // Seteamos valor de conteo y generamos setConteo --> Arranca en valor inicial (hay que transformalo a numero entero)
  const [num, setConteo] = useState(Number(initial));
  const [add, setAdd] = useState("");

  // Creamos funcion sumar --> ejecuta conteo y onAdd
  const sumar = () => {
    if (num < stock) {
      setConteo(num + 1);
    }else {
      setAdd("No hay más stock");
    }
  };
  // Creamos funcion restar
  const restar = () => {
    if (num > 0) {
      setConteo(num - 1);
    }
  };

  // Creamos funcion agregar carrito
  const addon = () => {
    if (num < stock) {
      setAdd(onAdd);
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
      <button className="btnOnAdd" onClick={addon}>
        Agregar al carrito
      </button>
      <p>{add}</p>
    </div>
  );
}

export default ItemCount;
