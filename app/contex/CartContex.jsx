"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartContexProvider({ children }) {
  const [cartID, setCartID] = useState({});
  const addToCart = (id, price) => {
    const updatedCart = { ...cartID };

    if (updatedCart[id]) {
      updatedCart[id] += 1;
    } else {
      updatedCart[id] = 1;
    }

    setCartID(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify({
      items: updatedCart,

      }),
    );
  };
  const decreaseQuantity = () => {};
  const deleteFromCart = (id) => {
    const updatedCart = { ...cartID };
    delete updatedCart[id];
    setCartID(updatedCart);
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart).items;
      setCartID(cart);
    }
  }, [cartID,total]);
  return (
    <CartContext.Provider value={{ addToCart, cartID, deleteFromCart ,total,setTotal}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContexProvider;
