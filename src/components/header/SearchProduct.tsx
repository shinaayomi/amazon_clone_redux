import Image from "next/image";
import React from "react";
import FormattedPrice from "../Formattedprice";

interface Props {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
}

interface Item {
  item: Props;
}

export default function SearchProduct({ item }: Item) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={item.image}
        alt="Product image"
        width={96}
        height={96}
        priority
        quality={100}
      />
      <div>
        <p className="text-xs -mb-1">
          {item.brand}_{item.category}
        </p>
        <p className="text-lg front-medium">{item.title}</p>
        <p className="text-xs">{item.description.substring(0, 100)}</p>
        <p className="text-base text-gray-600 flex items-center gap-1">
          Price:{" "}
          <span className="text-lg text-amazon_blue font-semibold">
            <FormattedPrice amount={item.price} />
          </span>
          <span className="ml-1 line-through">
            <FormattedPrice amount={item.oldPrice} />
          </span>
        </p>
      </div>
      <div className="flex-1 text-right px-4">
        <p className="text-base text-amazon_blue font-semibold animate-bounce">
          saved
          <FormattedPrice amount={item.oldPrice - item.price} />
        </p>
      </div>
    </div>
  );
}
