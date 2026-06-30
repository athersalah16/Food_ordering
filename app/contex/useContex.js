"use client";
import { useContext } from "react";
import { NavBarContext } from "./NavBarCont";
import { MenuContex } from "./MenuContex";
import { CartContext } from "./CartContex";
import { OrderContex } from "./OrderContex";
function useNAvBarContex() {
  return useContext(NavBarContext);
}
function useMenuContex() {
  return useContext(MenuContex);
}
function useCartContex() {
  return useContext(CartContext);
}
function useOrderContex() {
  return useContext(OrderContex);
}

export { useNAvBarContex, useMenuContex, useCartContex, useOrderContex };
