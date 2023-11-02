import React from "react";
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./Formattedprice";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../type";

const CartPayment = () => {
  const { productData } = useSelector((state: StateProps) => state.next);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order quantifies for FREE Shipping by Choosing this option at
          checkout. See details...
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total{" "}
        <span className="font-bold text-xl">
          <FormattedPrice amount={0} />
        </span>
      </p>
    </div>
  );
};

export default CartPayment;
