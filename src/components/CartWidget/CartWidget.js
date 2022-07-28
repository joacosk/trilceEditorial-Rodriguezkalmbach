// Importamos para íconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

function CartIcon() {
  const { cart, getTotalQty } = useContext(CartContext);

  return cart.length > 0 ? (
    <div className="cartWidget">
      <NavLink to={`/cart`}>
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            width={"40px"}
            height={"6px"}
          />
        </div>
      </NavLink>
      <div className="cartWidget__counter">
        <div>{getTotalQty()}</div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default CartIcon;
