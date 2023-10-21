import React, { ReactElement } from "react";
import Header from "./header/Header";
import BottomHeader from "./header/BottomHeader";
import Footer from "./Footer";
import { JsxElement } from "typescript";

interface IProps {
  children: ReactElement;
}

const RootLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
