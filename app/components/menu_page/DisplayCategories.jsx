import React, { useState } from "react";
import { useMenuContex } from "@/app/contex/useContex";
function DisplayCategories() {
  const { selectedCategory,setSelectedCategory } = useMenuContex();

  const categories = [
    { id: "All", name: "All" },
    { id: "burger", name: "Burger" },
    { id: "pizza", name: "Pizza" },
    { id: "pasta", name: "Pasta" },
    { id: "juice", name: "Drinks" },
    { id: "salad", name: "Salads" },
    { id: "dessert", name: "Desserts" },
  ];
 
  return (
    <div className="flex flex-row gap-2 ">
      {categories.map((category) => (
        <div
          onClick={() => {
            setSelectedCategory(category.id);
          }}
          key={category.id}
          className={`w-20 h-12 border border-gray-200 cursor-pointer rounded-full flex items-center font-bold justify-center ${selectedCategory === category.id ? "bg-orange-500 text-white" : "bg-white text-gray-700"}`}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default DisplayCategories;
