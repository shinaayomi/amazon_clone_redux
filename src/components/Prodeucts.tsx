import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

const Products = ({ productData }: any) => {
  console.log("__", productData);
  return (
    <div className="w-full px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black border border-gray-300 rounded-lg p-4 group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                src={image}
                alt={title}
                width={300}
                height={300}
                priority
              />
              <div className="w-12 h-24 absolute bottom-10 right-0 border border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                <span className="w-full h-full border-b border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                  <HiShoppingCart />
                </span>
                <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                  <FaHeart />
                </span>
              </div>
            </div>
            <hr />
          </div>
        )
      )}
    </div>
  );
};

export default Products;
