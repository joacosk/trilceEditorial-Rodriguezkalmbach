import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll";
import OrderConfirm from "../CartOrder/CartOrder";

function Cart() {

  const [productLength, setProductLength]= useState(0)
  const [orderDisplay,setOrderDisplay] = useState(false)
  const [totalPrice,setTotalPrice]= useState(0)
  const {cart,getTotalPrice} = useContext(CartContext);
  useEffect(() => {
    setProductLength(
      cart.reduce((previous,current)=>previous + current.quantity,0)
    );
    const total= getTotalPrice();
    setTotalPrice(total)
  }, [cart]);

  const displayOrder= ()=>{
    setOrderDisplay(true)
    scroll.scrollToBottom();
  }
    
  return cart.length === 0? (
    <>
    <div className="carritoVacio">    
      <div>
        <h2>El carrito está vacío</h2>
        </div><Link to="/" ><button className="btn btn-outline-dark ">Busque un producto nuevo</button></Link>
      
    </div>

    </>
  ):(
    <>
    {cart.map((producto) => <CartItem key={producto.item.id} publicacionId={producto.item.id} title={producto.item.title} image={producto.item.pictureUrl} price={producto.item.price} cantidad={producto.quantity} />)}
    <div className="card cart__totalPrice">Precio total de la compra: ${totalPrice}</div>
    <div className="finalizar_compra"><button className="btn btn-outline-dark" onClick={displayOrder}>Finalizar compra</button>
    </div>
    {orderDisplay ? <OrderConfirm cart = {cart} total= {totalPrice}/>
    : <></> }
    </>
    );
}

export default Cart;
