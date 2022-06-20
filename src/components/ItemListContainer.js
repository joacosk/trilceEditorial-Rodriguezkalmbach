import Card from './Card.js'
import './ItemListContainer.css'

function ItemListContainer() {
    return (
      <div className="ItemListContainer">
        <h3>En esta página ingresaremos varios artículos del catálogo</h3>
        <div className="tarjetasCatalogo">
            <ul>
                <Card />
            </ul>
        </div>
      </div>
    );
  }
  
  export default ItemListContainer;
