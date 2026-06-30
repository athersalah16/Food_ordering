"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartContexProvider({ children }) {
  const [cartID, setCartID] = useState({});
  const addToCart = (id) => {
    const updatedCart = { ...cartID };

    if (updatedCart[id]) {
      updatedCart[id] += 1;
    } else {
      updatedCart[id] = 1;
    }

    setCartID(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const decreaseQuantity = (id) => {
    const updatedCart = { ...cartID };

    if (updatedCart[id] > 1) {
      updatedCart[id] -= 1;
    } else {
      deleteFromCart(id);
      return;
    }

    setCartID(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const deleteFromCart = (id) => {
    const updatedCart = { ...cartID };
    delete updatedCart[id];
    setCartID(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      setCartID(cart);
    }
  }, []);
  const deleteCart = () => {
    setCartID({});
    localStorage.setItem("cart", JSON.stringify({}));
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        setCartID,
        deleteCart,
        cartID,
        deleteFromCart,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContexProvider;
