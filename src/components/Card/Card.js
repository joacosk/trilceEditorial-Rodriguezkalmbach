import "./Card.css";
import ItemCount from "../ItemCount/ItemCount";

function Card(props) {
  return (
    <section className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__image"></div>
          <div className="card__content">
            <div className="card__title">{props.producto}</div>
            <p className="card__text">{props.precio} </p>
            <ItemCount stock="5" initial="1" onAdd="Sumado al carrito" />
          </div>
        </div>
      </li>
    </section>
  );
}

export default Card;
