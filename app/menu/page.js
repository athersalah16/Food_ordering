"use client";
import DisplayCategories from "../components/menu_page/DisplayCategories";
import DisplayDishes from "../components/menu_page/DisplayDishes";
import SearchBar from "../components/menu_page/SearchBar";
import { useMenuContex } from "../contex/useContex";
function page() {
  //Add to cart in menu page
  const { menuDataSpare} = useMenuContex();
  
  return (
    <div className="flex flex-col gap-4 px-5 py-7 min-h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold text-black">Our Menu</h1>
        <p className="text-sm text-gray-500">Explore our delicious dishes</p>
      </div>
      <SearchBar />
      <DisplayCategories />
      <p className="text-md text-gray-500">
        Showing
        <span className="font-bold text-black"> {menuDataSpare?.length || 0}</span> dishes
      </p>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen">
     
        <DisplayDishes menu={menuDataSpare} />
      </div>
    </div>
  );
}

export default page;
