import React from "react";

function DisplayNutritionInformation({ info }) {
  return (
    <div className="w-96 h-40 border border-gray-400 rounded-lg">
      <div className="grid grid-flow-row grid-cols-2 gap-8">
        <p className="  flex flex-col text-gray-400">
          Calories
          <span className="  flex flex-col font-semibold text-black"> {info?.calories}</span>
        </p>
        <p className= "flex flex-col text-gray-400">
          Protein
          <span className="  flex flex-col font-semibold text-black"> {info?.protein}</span>
        </p>
        <p className= "flex flex-col text-gray-400">
          Carbs
          <span className="  flex flex-col font-semibold text-black"> {info?.carbs}</span>
        </p>
        <p className= "flex flex-col text-gray-400">
          Fat
          <span className="  flex flex-col font-semibold text-black"> {info?.fat}</span>
        </p>
      </div>
    </div>
  );
}

export default DisplayNutritionInformation;
