import "./Card.css";
import ItemCount from "./itemCount";
function Card() {
  return (
    <section className="cards">
      <li className="cards__item">
        <div class="card">
          <div class="card__image"></div>
          <div class="card__content">
            <div class="card__title">Titulo de tarjeta</div>
            <p class="card__text">Esto es una tarjeta </p>
            <ItemCount stock="5" initial="1" onAdd="Sumado al carrito" />
          </div>
        </div>
      </li>
    </section>
  );
}

export default Card;
