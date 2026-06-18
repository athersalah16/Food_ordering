"use client"; // Setup icons and All Nav Bar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCartContex } from "../contex/useContex";
function Icons() {
  const { cartID } = useCartContex();
  return (
    <div className=" cursor-pointer flex items-center gap-4">
      <Link href="/menu">
        <FontAwesomeIcon className="hover:text-orange-600" icon={faSearch} />
      </Link>
      <Link href="/cart">
        <div className="relative w-fit">
          <FontAwesomeIcon
            className="hover:text-orange-600"
            icon={faShoppingCart}
          />
          {Object.keys(cartID).length === 0? (
            <></>
          ) : (
            <span className="absolute -top-2 -right-2 w-5 h-5 text-sm font-bold flex justify-center items-center bg-orange-500 text-white rounded-full">
              {Object.keys(cartID).length }
            </span>
          )}{" "}
        </div>{" "}
      </Link>

    </div>
  );
}

export default Icons;
