import "./Cart.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom"

function Cart() {

  const [productLength, setProductLength]= useState(0)
  
  const {cart} = useContext(CartContext)
  useEffect(() => {
    setProductLength(
      cart.reduce((previous,current)=>previous + current.quantity,0)
    )
  }, [cart]);

  const total = cart.reduce(
    (previous,current)=> previous + current.quantity * current.item.price,0
  )
  
  return cart.length === 0? (
    <>
    <h2>El carrito está vacío</h2>
    <Link to="/" ><button>Busque un producto nuevo</button></Link>
    </>
  ):(
    <>
    {cart.map((producto) => <CartItem key={producto.item.id} publicacionId={producto.item.id} title={producto.item.title} image={producto.item.pictureUrl} price={producto.item.price} cantidad={producto.quantity} />)}
    <div className="card cart__totalPrice">Precio total de la compra: ${total}</div>
    </>
    );
}

export default Cart;
