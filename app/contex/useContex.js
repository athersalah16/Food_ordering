"use client";
import { useContext } from "react";
import { NavBarContext } from "./NavBarCont";
import { MenuContex } from "./MenuContex";
import { CartContext } from "./CartContex";
function useNAvBarContex() {
  return useContext(NavBarContext);
}
function useMenuContex() {
  return useContext(MenuContex);
}
function useCartContex() {
  return useContext(CartContext);
}

export { useNAvBarContex, useMenuContex ,useCartContex};
