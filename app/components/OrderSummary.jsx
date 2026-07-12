import React from "react";
import { useCartContex, useOrderContex } from "../contex/useContex";
import { useMenuContex } from "../contex/useContex";
import Link from "next/link";
function OrderSummary({ checkout = false }) {
  const { cartID,setCartID ,deleteCart} = useCartContex();
  const { menuData } = useMenuContex();
  const { order ,setError} = useOrderContex();
  const cartItems = menuData?.filter((item) => cartID[item.id]); // get the IDs of Products

  const subTotal = cartItems.reduce((sum, item) => {
    return sum + cartID[item.id] * item.price;
  }, 0);
  const deleveryFee = subTotal >= 25 ? 0 : 5;
  const total = subTotal + deleveryFee;
  const handleClick = () => {
    const values = Object.values(order);
    values.forEach((value) => {
      if (!value.trim()) {
        setError("Please fill in all required fields.")
        return false;
      }
      window.alert("The Payment is Successfully ✅✅")
      setCartID({})
      deleteCart()
      window.location.assign("/");
      
    });
  };
  return (
    <div className="border w-[400px] min-h-[300px] mt-4 flex flex-col justify-start text-center  gap-4 border-gray-200  rounded-lg">
      <h1 className="text-black font-bold text-2xl">Order Summary </h1>
      <div className="flex justify-between px-2">
        <p className="text-gray-500">Subtotal</p>
        <span className="text-black font-bold">${subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between px-2">
        <p className="text-gray-500">Delivery Fee</p>
        <span className="text-black font-bold">
          {deleveryFee === 0 ? (
            <p className="uppercase text-xl text-green-500">free</p>
          ) : (
            <>${deleveryFee}</>
          )}
        </span>
      </div>

      <div className="w-full flex justify-center items-center">
        {" "}
        {subTotal < 25 ? (
          <div className="w-60 min-h-8 bg-[#fff5f2] text-orange-500 rounded-lg ">
            Add ${(25 - subTotal).toFixed(2)} more for free delivery!
          </div>
        ) : (
          <></>
        )}
      </div>
      <hr />
      <div className="flex justify-between px-2">
        <p className="text-black font-bold text-lg">Total</p>
        <span className=" text-xl text-orange-500">${total.toFixed(2)}</span>
      </div>
      <div className="w-full flex  gap-4 justify-center items-center flex-col">
        {checkout ? (
          <button
            onClick={handleClick}
            className="w-60 h-8 bg-orange-500 text-white rounded-lg cursor-pointer"
          >
            Place Order
          </button>
        ) : (
          <>
            <Link href={"/checkout"}>
              {" "}
              <button className="w-60 h-8 bg-orange-500 text-white rounded-lg cursor-pointer">
                Proceed to Checkout
              </button>
            </Link>
            <Link href={"/menu"}>
              {" "}
              <button className="w-60 h-8 border border-orange-500 text-orange-500 rounded-lg cursor-pointer">
                Continue Shopping
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderSummary;
