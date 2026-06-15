import React from 'react'
import menu from '../menu'

function DisplayDishes() {
  return (
    <div>
     {/* This component will display the dishes from the menu context */}
     {menu.map((dish) => (
        <div key={dish.id} className="border border-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold">{dish?.name}</h3>
          <p className="text-gray-500">{dish?.description}</p>
          <p className="text-xl font-bold">${dish?.price?.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default DisplayDishes
