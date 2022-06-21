import Card from "./Card.js";
import "./ItemListContainer.css";

function ItemListContainer({ titulo }) {
  return (
    <div className="ItemListContainer">
      <h3>{titulo}</h3>
      <div className="tarjetasCatalogo">
        <ul>
          <Card />
        </ul>
      </div>
    </div>
  );
}

export default ItemListContainer;
