"use client";
import { useParams } from "next/navigation";
import { useMenuContex, useCartContex } from "@/app/contex/useContex";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DisplayIngredients from "@/app/components/DisplayIngredients";
import DisplayNutritionInformation from "@/app/components/DisplayNutritionInformation";
import Counter from "@/app/components/Counter";
import Link from "next/link";
import NotFound from "@/app/components/NotFound";
import DisplayDishes from "@/app/components/menu_page/DisplayDishes";
function page() {
  const { id } = useParams();
  const { menuData } = useMenuContex();
  const { addToCart } = useCartContex();
  const product = menuData.find((item) => String(item.id) === id);
  if (!product) {
    return <NotFound />;
  }
  const similar = menuData.filter(
    (item) => item.category === product.category && String(item.id) !== id,
  );

  return (
    // Making the page of every product
    <div className="w-full flex-col gap-8 p-4 min-h-screen flex items-start justify-center ">
      <div className="flex gap-8 items-start">
        <div>
          <Image
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div>
          <div className="   w-full text-center flex flex-col justify-center items-start gap-4">
            <h1 className="font-bold text-center  text-2xl">{product.name}</h1>
            <div>
              {" "}
              <p className="text-gray-500 px-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                {product.rating}({product.reviews} reviews)
              </p>
            </div>
            <div>
              <p className="text-gray-400"> {product.description}</p>
            </div>
            <div className="flex text-start gap-6 flex-col">
              <span className="text-black font-bold text-xl">Ingredients</span>
              <div className="w-full flex  gap-3 flex-row flex-wrap">
                <DisplayIngredients ingredients={product.ingredients} />
              </div>{" "}
            </div>
            <p className="text-black  text-start font-bold text-xl">
              Nutrition Information
            </p>
            <DisplayNutritionInformation info={product.nutrition} />

            <div className="w-96 h-44 flex flex-col border border-gray-300 rounded-lg gap-4 ">
              <div className="flex  justify-between  px-2 ">
                <div>
                  <p className="text-gray-600">Price</p>
                  <span className="text-orange-500 font-bold text-2xl">
                    ${product.price}
                  </span>
                </div>
                <div className="flex gap-3 py-2">
                  <Counter id={product.id} />
                </div>
              </div>

              <div className="w-full flex justify-between px-3 ">
                <button
                  onClick={() => addToCart(product.id)}
                  className="border w-40 h-12 rounded-lg border-orange-500 text-orange-500 "
                >
                  Add To Cart
                </button>
                <Link
                  className="bg-orange-500 duration-300 w-40 h-12 flex justify-center items-center rounded-lg hover:bg-orange-600 transition text-white "
                  href={"/checkout"}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full gap-4 flex flex-col">
        <span className="text-black font-bold text-2xl ">
          You May Also Like
        </span>
        <div
          className="w-full gap-8 flex flex-wrap
        
        flex-row"
        >
          {" "}
          <DisplayDishes menu={similar} />
        </div>
      </div>
    </div>
  );
}

export default page;
