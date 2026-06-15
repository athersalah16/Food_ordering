import React from "react";
import menu from "../menu";

function DisplayCategories() {
  const categories = [
    "Pizza",
    "Burger",
    "Desserts",
    "Drinks",
    "Salads",
    "Pasta",
  ];
  const handleCategoryClick = (category) => {
    // Implement category filtering logic here
    return menu?.filter((item) => item.category === category);
  }
  return (
    <div className="flex flex-row gap-2 ">
      {categories.map((category) => (
        <div
        onClick={()=>handleCategoryClick(category)}
          key={category}
          className="w-20 h-12 border border-gray-200 cursor-pointer rounded-full flex items-center font-bold justify-center"
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default DisplayCategories;
