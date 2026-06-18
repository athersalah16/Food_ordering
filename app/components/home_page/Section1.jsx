'use client'
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useNAvBarContex} from "@/app/contex/useContex";
function Section1() {
    const { setRoute } =  useNAvBarContex();
    const handleClick = () => {
        setRoute("Menu");
    }
  return (
    <section className="flex min-h-screen  items-center justify-between gap-16 px-4">
      <div className="flex flex-col gap-5 max-w-lg">
        <h1 className="text-5xl text-black font-bold">Delicious Food</h1>

        <h2 className="text-5xl text-orange-500 font-semibold">
          Delivered Fast
        </h2>

        <p className="text-xl text-gray-600">
          Order from our diverse menu and enjoy restaurant-quality meals
          delivered right to your doorstep in minutes.
        </p>
        <div className="flex cursor-pointer gap-4">
          <Link href="/menu">
            {" "}
            <button onClick={handleClick} className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Order Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
          <Link href="/menu">
            {" "}
            <button onClick={handleClick} className="bg-gray-200 cursor-pointer text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              View Menu
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Image
          src="/food.png"
          alt="Food"
          className=" mt-2 px-4object-cover rounded-lg"
          width={600}
          height={200}
        />
      </div>
    </section>
  );
}

export default Section1;
