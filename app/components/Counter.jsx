'use client'

import { useCartContex } from "../contex/useContex";

function Counter({id}) {
    const {cartID,addToCart} = useCartContex()
  return (
    <div className="flex px-4 gap-4 flex-row">
      <div className="border-none cursor-pointer bg-gray-200 rounded-lg text-lg  font-bold w-8 h-8 text-black flex justify-center items-center ">
        -
      </div>
      <span>{cartID[id]}</span>
      <div onClick={()=>addToCart(id)} className="border-none cursor-pointer  bg-orange-500 w-8 h-8 rounded-lg text-lg text-white flex justify-center items-center font-bold ">
        +
      </div>
    </div>
  );
}

export default Counter;
