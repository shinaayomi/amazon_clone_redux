import React from "react";
import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 border border-transparent hover:border-whitecursor-pointer duration-300">
        <LuMenu />
        <span>All</span>
      </p>
    </div>
  );
};

export default BottomHeader;
