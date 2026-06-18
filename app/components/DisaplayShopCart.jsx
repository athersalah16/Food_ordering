"use client";
import Image from "next/image";
import { useCartContex, useMenuContex } from "../contex/useContex";
import Counter from "./Counter";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DisaplayShopCart() {
  const router = useRouter();
  const { cartID ,deleteFromCart} = useCartContex();
  const { menuData } = useMenuContex();
  const cartItems = menuData?.filter((item) => cartID[item.id]);// get the IDs of Products

  return (
    <div className="gap-4  px-4 flex flex-col">
      <h1 className="text-black font-bold text-2xl">Shopping Cart</h1>

      {cartItems?.map((item) => (
        <div
          key={item.id}
          className="w-[500px] flex justify-between px-2 gap-2 min-h-44 border border-gray-300 rounded-lg"
        >
          <div>
            {" "}
            <div className="w-full gap-4 flex  ">
              <div className="items-center py-4 min-h-full flex justify-center ">
                <Image
                  onClick={() => router.push(`/menu/${item.id}`)}
                  className="rounded-lg"
                  src={item?.image}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">{item.name}</h2>
                <p className="text-sm text-gray-400"> {item.description}</p>
              </div>
            </div>
            <Counter id={item.id} />
          </div>
          <div className="flex flex-col justify-between items-end py-4 ">
            <FontAwesomeIcon onClick={()=>deleteFromCart(item.id)}  className="text-gray-400 cursor-pointer hover:text-orange-500" icon={faTrash} />
            <span className="text-2xl font-bold text-orange-500">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisaplayShopCart;
