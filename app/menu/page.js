"use client";
import DisplayCategories from "../components/DisplayCategories";
import DisplayDishes from "../components/DisplayDishes";
import SearchBar from "../components/SearchBar";
import menu from "../menu";
function page() {

  return (
    <div className="flex flex-col gap-4 px-5 py-7 min-h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold text-black">Our Menu</h1>
      <p className="text-sm text-gray-500">Explore our delicious dishes</p>
      </div>
      <SearchBar/>
      <DisplayCategories/>
      <p className="text-md text-gray-500">Showing <span className="font-bold text-black">{menu?.length || 0}</span> dishes</p>
      <DisplayDishes/>
    </div>
  );
}

export default page;
