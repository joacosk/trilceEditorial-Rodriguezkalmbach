import { createContext, useContext, useState } from "react";

/*Pasos obtenido de la AfterClass!
    1 - Generar archivo CartContext
    2 - Crear el contexto econ el hook createContext() previamente importado de react
    3 - Extraer el Provider (componenten funcional) de su contexto creado en el paso anterior con destructuring
    4 - Crear la función CartProvider(componenete funcional) donde tendremos todas las funciones correspondientes
    5 - La función CartProvider debe devolver el Provider(Componente) que llevaría como props las funciones del carrito, y tener a children como hijo ...
    6 - Envolver todos los componentes  con el CartProvider en Index.js
    7 - Armar las funciones necesarias para el carrito

    Funciones a crear: 
                    addToCart()
                    removeFromCart()
                    clearCart()
                    isInCart()
     */

export const CartContext = createContext({});

const { Provider } = CartContext;

// Esto que sigue es un componente
export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue); // Acá creamos el estado del carrito

  /* Arrancamos con la declaración de funciones */

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  // Funcion que se ejecuta al agregar item al carrito
  const addToCart = (item, quantity) => {
    console.log(item)
    if (isInCart(item.id)) {
      // Verificar si producto existe en carrito
      const newCart = [...cart]; // Copiamos carrito con spread operator
      for (const element of newCart) {
        //Para cada elemento en el carrito
        if (element.item.id === item.id) {
          // Si el id ya está entonces
          element.quantity = element.quantity + quantity; // sumo la nueva cantidad a la cantidad del carrito
        }
      }
      setCart(newCart); // Seteamos nuevo carrito
    } else {
      setCart([...cart, { item: item, quantity: quantity }]);
    }
  };

  /*Declaramos objeto context, que toma todas las funciones del contexto */
  const context = {
    cart,
    clearCart,
    addToCart,
    isInCart,
  };

  return <Provider value={context}>{children}</Provider>;
};
