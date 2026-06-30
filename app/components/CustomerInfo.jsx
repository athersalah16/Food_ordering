'use client';
import { useOrderContex } from "../contex/useContex";
function CustomerInfo() {
  const {order,setOrder,error} = useOrderContex()
  return (
   <div
      className={` ${error && "text-red-500"} w-96 h-44  rounded-lg border border-gray-400 `}
    >
      <h2 className="text-xl p-4 font-bold">Customer Information</h2>

      
      <div className="w-full flex  gap-4 px-3 justify-between">
        <input
        value={order.userName}
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, userName: e.target.value }))
          }
          className={`border  h-8 rounded-full text-black p-4 text-md ${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-400 focus:outline-orange-500"
}    w-44  `}
          placeholder="Full Name: "
        />
        <input
        value={order.phoneNumber}
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          className={` h-8 rounded-full text-black p-4 text-md border ${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-400 focus:outline-orange-500"
}  w-44  `}
          placeholder="Phone Number: "
        />
      </div>
      <div className="w-full mt-4 px-2">
        <input

        value={order.email}
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, email: e.target.value }))
          }
          className=   {`border h-8 rounded-full text-black p-4 text-md w-full ${
  error
    ? "border-red-500 focus:border-red-500"
    : "border-gray-400 focus:outline-orange-500"
}`}
          placeholder="Email: "
        />
      </div>
    </div>
  );
}

export default CustomerInfo;
