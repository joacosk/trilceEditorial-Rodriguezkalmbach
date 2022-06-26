
// Importamos para íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartIcon() {
    return (
      <div className="App">
        <FontAwesomeIcon icon={faCartShopping}  width={"40px"} height={"6px"}/>
      </div>
    );
  }
  
  export default CartIcon;
