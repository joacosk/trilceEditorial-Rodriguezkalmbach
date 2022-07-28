import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createBuyOrder } from "../../services/firestore";
import "./CartOrder.css";
import swal from "sweetalert";

function OrderConfirm(props) {
  const { clearCart } = useContext(CartContext);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const nameHandler = (event) => {
    setNewName(event.target.value);
  };
  const phoneHandler = (event) => {
    setNewPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setNewEmail(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const newBuyer = {
      name: newName,
      phone: newPhone,
      email: newEmail,
    };
    const order = {
      buyer: newBuyer,
      total: props.total,
      items: props.cart,
    };
    await createBuyOrder(order).then((doc) => {
      swal({
        title: "Compra finalizada!",
        text: `Orden de compra n° ${doc.id}`,
        icon: "success",
      });
    });
    clearCart();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputBuyer">
        <div className="inputBuyer__name">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre y apellido"
            value={newName}
            onChange={nameHandler}
          />
        </div>
        <div className="inputBuyer__phone">
          <label>Teléfono</label>
          <input
            type="num"
            placeholder="11 11223344"
            value={newPhone}
            onChange={phoneHandler}
          />
        </div>
        <div className="inputBuyer__mail">
          <label>Email</label>
          <input
            type="text"
            placeholder="correo@email.com"
            value={newEmail}
            onChange={emailHandler}
          />
        </div>
      </div>
      <div className="detailBuyer">
        <div className="detailBuyer__total">
          <h4>Confirmar compra por el monto de</h4>
          <p>{props.total}</p>
        </div>
        <button type="submit">Confirmar Compra</button>
      </div>
    </form>
  );
}

export default OrderConfirm;
