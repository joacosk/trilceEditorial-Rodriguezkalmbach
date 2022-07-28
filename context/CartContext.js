import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [ordenCompleta, setOrdenCompleta] = useState(defaultValue);

  //funciones

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  // Se ejecuta al agregar item al carrito
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === item.id) {
          element.quantity = element.quantity + quantity;
        }
      }
      setCart(newCart);
    } else {
      setCart([...cart, { item: item, quantity: quantity }]);
    }
  };

  // Eliminar un producto según id
  const deleteToCartByIndex = (id) => {
    const newCart = [...cart];

    let newCartf = newCart.filter((element) => element.item.id !== id);
    setCart([...newCartf]);
  };

  const getTotalQty = () => {
    let totalQty = 0;
    cart.forEach((element) => (totalQty += element.quantity));
    return totalQty;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(
      (element) => (totalPrice += element.quantity * element.item.price)
    );
    return totalPrice;
  };

  const getOrdenCompleta = (orden) => {
    const newOrden = [...orden];
    setOrdenCompleta(newOrden);
    console.log(ordenCompleta);
  };

  //Declaramos objeto context
  const context = {
    cart,
    clearCart,
    addToCart,
    isInCart,
    deleteToCartByIndex,
    getTotalPrice,
    getTotalQty,
    ordenCompleta,
    getOrdenCompleta,
  };

  return <Provider value={context}>{children}</Provider>;
};
