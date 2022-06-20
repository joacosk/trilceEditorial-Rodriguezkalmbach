import'./Card.css'

function Card() {
  return (
    <section className="cards">
        <li className='cards__item'>
          <div class="card">
            <div class="card__image"></div>
            <div class="card__content">
              <div class="card__title">Titulo de tarjeta</div>
              <p class="card__text">
                Esto es una tarjeta            </p>
              <button class="btn btn--block card__btn">Boton (crear componente)</button>
            </div>
          </div>
        </li>
    </section>
  );
}

export default Card;
