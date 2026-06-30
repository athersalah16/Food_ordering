import React from "react";

function DisplayIngredients({ ingredients }) {
  return ingredients?.map((item) => (
    <div key={item} className="w-24 h-12 rounded-full  text-center border border-[#a8a299] flex justify-center items-center text-black">
      {item}
    </div>
  ));
}

export default DisplayIngredients;
