import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

function CartItem(props) {
  const { deleteToCartByIndex } = useContext(CartContext);
  const deleteToCart = () => {
    console.log(props.publicacionId);
    deleteToCartByIndex(props.publicacionId);
  };
  return (
    <section className="cartItem">
      <div className="cartItemBody">
        <div className="cartItem__image">
          <img src={props.image} alt={props.title} className="cartItem_image" />
        </div>
        <div className="cartItem__Title">
          {" "}
          <p>Producto</p>
          <h4>{props.title}</h4>
        </div>
        <div className="cartItem__boxText">
          <p>Unidades</p>
          <h4 className="cartItem__text"> {props.cantidad}</h4>
        </div>
        <div className="cartItem__precioUnitario">
          <p>Precio</p>
          <h4>{props.price * props.cantidad}</h4>
        </div>

        <div className="cartItem_boxBtn">
          <button
            className="cartItem__btn btn btn-outline-dark"
            onClick={deleteToCart}
          >
            eliminar artículo
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
