"use client";
import { createContext, useState } from "react";

export const OrderContex = createContext(null);

function OrderContexProvider({ children }) {
  const [order, setOrder] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    zipCode: "",
    paymentMethod: "",
  });
  const [error, setError] = useState("");

  return (
    <OrderContex.Provider
      value={{
        order,
        setOrder,
        error,
        setError,
      }}
    >
      {children}
    </OrderContex.Provider>
  );
}

export default OrderContexProvider;
