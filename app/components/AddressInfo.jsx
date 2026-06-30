"use client";

import { useOrderContex } from "../contex/useContex";

function AddressInfo() {
  const { order, setOrder, error } = useOrderContex();
  return (
    <div
      className={` ${error && "text-red-500 "} w-96 h-44  rounded-lg border border-gray-400 `}
    >
      <h2 className="text-2xl p-4 font-bold">Delivery Address</h2>

      <div className="w-full mb-4 px-2">
        <input
          value={order.street}
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, street: e.target.value }))
          }
          className={`border h-8 rounded-full text-black p-4 text-md  w-full 
${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-400 focus:outline-orange-500"
}`}
          placeholder="Street Address: "
        />
      </div>
      <div className="w-full flex  gap-4 px-3 justify-between">
        <input
          value={order.city}
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, city: e.target.value }))
          }
          className={` h-8 rounded-full text-black p-4 text-md  border
${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-400 focus:outline-orange-500"
}    w-44  `}
          placeholder="City: "
        />
        <input
          value={order.zipCode}
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, zipCode: e.target.value }))
          }
          className={` h-8 rounded-full text-black p-4 text-md  border
${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-400 focus:outline-orange-500"
}    w-44  `}
          placeholder="Zip Code: "
        />
      </div>
    </div>
  );
}

export default AddressInfo;
