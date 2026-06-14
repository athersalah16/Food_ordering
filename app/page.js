import Image from "next/image";

export default function Home() {
  return (
    // create home page
    <div>
      <div className="container mx-auto ">
        <section className="flex items-center justify-between gap-16 px-4">
          <div className="flex flex-col gap-5 max-w-lg">
            <h1 className="text-5xl text-black font-bold">Delicious Food</h1>

            <h2 className="text-5xl text-orange-500 font-semibold">
              Delivered Fast
            </h2>

            <p className="text-xl text-gray-600">
              Order from our diverse menu and enjoy restaurant-quality meals
              delivered right to your doorstep in minutes.
            </p>
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
        <section>
          
        </section>
      </div>
    </div>
  );
}
