"use client";
import { useMenuContex } from "@/app/contex/useContex";
function SearchBar() {
  const { setSearchTerm ,searchTerm} = useMenuContex();


  return (
    <div>
      <input
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 w-1/3 h-12 duration-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

export default SearchBar;
