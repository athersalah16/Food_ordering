"use client";
import CustomerInfo from "../components/CustomerInfo";
import AddressInfo from "../components/AddressInfo";
import PaymentMethods from "../components/PaymentMethods";
import OrderSummary from "../components/OrderSummary";
import { useOrderContex } from "../contex/useContex";

function page() {
  const { error } = useOrderContex();
  return (
    <div className="flex justify-between gap-8 px-4">
      <div>
        <h1 className="text-black text-2xl font-bold">Checkout</h1>
        <div className="w-full flex flex-col  gap-4">
          {" "}
          <CustomerInfo />
          <AddressInfo />
          <PaymentMethods />
          {error && (
            <h1 className="text-red-500 text-xl  transition-all duration-300 font-bold">
              PLease fill all inputs
            </h1>
          )}
        </div>
      </div>
      <div>
        <OrderSummary checkout={true} />
      </div>
    </div>
  );
}

export default page;
