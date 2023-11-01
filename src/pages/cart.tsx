import React from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";
import CardProduct from "@/components/CardProduct";

export default function CartPage() {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex- items-center justify-between border-b border-gray-400 pb-1">
              <p className="text-2xl text-amazon_blue font-semibold">
                Shopping Cart
              </p>
              <p className="text-2xl text-amazon_blue font-semibold">
                Subtitle
              </p>
            </div>
            <div>
              {productData.map((item: StateProps) => (
                <div key={item._id}>
                  <p>
                    <CardProduct item={item} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1>Your cart is empty!</h1>
          <button>Go to shopping</button>
        </div>
      )}
    </section>
  );
}
