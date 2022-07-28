import "./Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import OrderConfirm from "../../components/CartOrder/CartOrder";

function Cart() {
  const [orderDisplay, setOrderDisplay] = useState(false);
  const { cart, getTotalPrice } = useContext(CartContext);

  const displayOrder = () => {
    setOrderDisplay(true);
    scroll.scrollToBottom();
  };

  return cart.length === 0 ? (
    <>
      <div className="carritoVacio">
        <div>
          <h2>El carrito está vacío</h2>
        </div>
        <Link to="/">
          <button className="btn btn-outline-dark ">
            Busque un producto nuevo
          </button>
        </Link>
      </div>
    </>
  ) : (
    <>
      {cart.map((producto) => (
        <CartItem
          key={producto.item.id}
          publicacionId={producto.item.id}
          title={producto.item.title}
          image={producto.item.pictureUrl}
          price={producto.item.price}
          cantidad={producto.quantity}
        />
      ))}
      <div className="card cart__totalPrice">
        Precio total de la compra: ${getTotalPrice()}
      </div>
      <div className="finalizar_compra">
        <button className="btn btn-outline-dark" onClick={displayOrder}>
          Finalizar compra
        </button>
      </div>
      {orderDisplay ? (
        <OrderConfirm cart={cart} total={getTotalPrice()} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Cart;
