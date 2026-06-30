import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useOrderContex } from "../contex/useContex";
function PaymentMethods() {
  const { order, setOrder, error } = useOrderContex();
  return (
    <div
      className={` ${error && "text-red-500"} w-96 h-44  rounded-lg border border-gray-400 `}
    >
      <h2 className="text-xl p-4 font-bold">Payment methods</h2>

      <RadioGroup
        defaultValue="credit"
        onValueChange={(value) =>
          setOrder((prev) => ({
            ...prev,
            paymentMethod: value,
          }))
        }
        className=" px-4 gap-5 w-fit"
      >
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="credit"
            className={`border-gray-400 ${error ? "data-[state=checked]:border-red-500 data-[state=checked]:text-red-500 data-[state=checked]:bg-red-500" : "data-[state=checked]:border-orange-500 data-[state=checked]:text-orange-500 data-[state=checked]:bg-orange-500"}`}
            id="r1"
          />
          <Label htmlFor="r1">Credit/Debit Card</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="payPal"
            className={`border-gray-400 ${error ? "data-[state=checked]:border-red-500 data-[state=checked]:text-red-500 data-[state=checked]:bg-red-500" : "data-[state=checked]:border-orange-500 data-[state=checked]:text-orange-500 data-[state=checked]:bg-orange-500"}`}
            id="r2"
          />
          <Label htmlFor="r2">PayPal</Label>
        </div>
        <div className="flex  items-center gap-3">
          <RadioGroupItem
            value="cash"
            className={`border-gray-400 ${error ? "data-[state=checked]:border-red-500 data-[state=checked]:text-red-500 data-[state=checked]:bg-red-500" : "data-[state=checked]:border-orange-500 data-[state=checked]:text-orange-500 data-[state=checked]:bg-orange-500"}`}
            id="r3"
          />
          <Label htmlFor="r3">Cash on Delievery</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default PaymentMethods;
