"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useCartContex } from "../../contex/useContex";
import { useRouter } from "next/navigation";
function DisplayDishes({menu}) {
  const { addToCart} = useCartContex();
  const router = useRouter();
  
  
  return menu?.map((dish) => (
    <div
      key={dish.id}
      className="w-[400px] cursor-pointer duration-300 hover:-translate-y-1.5 hover:shadow-lg min-h-[430px] rounded-xl border border-gray-200 bg-card overflow-hidden shadow-sm"
    >
      <div
        onClick={() => router.push(`/menu/${dish.id}`)}
        className="h-52 w-full"
      >
        <Image
          src={dish.image}
          alt={dish.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg mt-2 font-bold text-black">{dish.name}</h2>

        <p className="text-sm text-gray-500 mt-1">{dish.description}</p>
      </div>
      <div className="flex justify-between gap-4 items-center w-full px-4">
        <p>
          <FontAwesomeIcon
            className={`${dish.rating >= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            icon={faStar}
          ></FontAwesomeIcon>
          <span className="ml-1 text-sm text-gray-500">
            {dish.rating}{" "}
            <span className="text-gray-400 text-sm"> ({dish.reviews})</span>
          </span>
        </p>
        <p className="text-xl text-orange-500 font-bold mt-3">
          ${dish.price.toFixed(2)}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => addToCart(dish?.id,dish?.price)}
          className={`bg-orange-500  w-[350px] hover:bg-orange-600 duration-300 text-white font-bold py-2 px-4 rounded-xl cursor-pointer mt-4`}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  ));
}

export default DisplayDishes;
