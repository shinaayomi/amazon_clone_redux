import React from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";

export default function CartPage() {
  const { productData } = useSelector((state: StateProps) => state.next);

  return <div className="max-w-screen-2xl">CartPage</div>;
}
