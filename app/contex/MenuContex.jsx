"use client";
import { createContext, useState ,useEffect} from "react";
import menu from "../menu";

export const MenuContex = createContext(null);

function MenuContexProvider({ children }) {
  const [menuData, setMenuData] = useState(menu);
  const [menuDataSpare, setMenuDataSpare] = useState(menu);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

useEffect(() => {
  let filtered = menuData;

  if (selectedCategory !== "All") {
    filtered = filtered.filter(
      (item) => item.category === selectedCategory
    );
  }

  if (searchTerm.trim() !== "") {
    filtered = filtered.filter((item) =>
      item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }

  setMenuDataSpare(filtered);
}, [searchTerm, selectedCategory, menuData]);

  return (
    <MenuContex.Provider
      value={{
        menuData,
        setMenuData,
        menuDataSpare,
        setMenuDataSpare,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </MenuContex.Provider>
  );
}

export default MenuContexProvider;
