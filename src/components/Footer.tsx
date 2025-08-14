import Image from "next/image";
import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        All right reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          // href="https://reactbd.com"
          href="https://shinaayomi.github.io/portfolio-html-css-js/"
          target="_blank"
          rel="nofollow"
        >
          @shinaayomi
        </a>
      </p>
    </div>
  );
};

export default Footer;
