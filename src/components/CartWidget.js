
// Importamos para íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartIcon() {
    return (
      <div className="App">
        <FontAwesomeIcon icon={faCartShopping}  border/>
        <FontAwesomeIcon icon="fa-solid fa-heart" beat />
      </div>
    );
  }
  
  export default CartIcon;
