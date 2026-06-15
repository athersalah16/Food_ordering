import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <section>
      <div className="min-h-screen cursor-pointer flex-col w-full flex justify-center items-center gap-6 px-4">
        <div className="flex justify-between items-center  gap-6">
          <div className="w-96 flex-col h-60 border border-gray-200 rounded-lg   flex items-center justify-center">
            <Image
              src="/fast_delivery.png"
              alt="Fast Delivery"
              className="object-cover rounded-lg"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-bold text-black">Fast Delivery</h2>
            <p>Get your food delivered in 30 minutes or less</p>
          </div>
          <div className="w-96 flex-col h-60 border border-gray-200 rounded-lg   flex items-center justify-center">
            <Image
              src="/ship.png"
              alt="Free Shipping"
              className="object-cover rounded-lg"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-bold text-black">Free Shipping</h2>
            <p>Free delivery on orders over $25</p>
          </div>
          <div className="w-96 flex-col h-60 border border-gray-200 rounded-lg   flex items-center justify-center">
            <Image
              src="/quality.png"
              alt="Quality Food"
              className="object-cover rounded-lg"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-bold text-black">Quality Guaranteed</h2>
            <p>Fresh ingredients and top-notch quality</p>
          </div>
        </div>
        <div>
          <Link href="/menu"><button className="bg-orange-500  cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            View All Dishes
          </button></Link>
        </div>
      </div>
    </section>
  );
}
