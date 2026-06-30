"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useCartContex } from "../contex/useContex";
import DisaplayShopCart from "../components/DisaplayShopCart";
import OrderSummary from "../components/OrderSummary";

function page() {
  const { cartID } = useCartContex();
  return (
    <div className="min-h-screen">
      {Object.keys(cartID)?.length === 0 ? (
        <div className="w-full  flex justify-center items-center flex-col gap-4">
          <Image
            src={"/cart.png"}
            alt="Cart"
            width={100}
            height={100}
            className=""
          />
          <h1 className="text-black text-2xl font-bold ">Your cart is empty</h1>
          <p>Looks like you haven't added any items to your cart yet</p>
          <Link href="/menu">
            {" "}
            <button className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Browse Menu <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full flex justify-between px-4 gap-8">
          <DisaplayShopCart />

          <OrderSummary />
        </div>
      )}
    </div>
  );
}

export default page;
