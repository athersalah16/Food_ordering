export default function Logo({ color }) {
  return (
    <>
      {" "}
      <div className="w-8 h-8 bg-orange-600 text-xl  flex items-center justify-center rounded-xl text-white font-bold">
        F
      </div>
      <h1 className={`text-xl text-${color} font-bold`}>FoodHub</h1>
    </>
  );
}
