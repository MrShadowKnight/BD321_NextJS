import React from "react";
// components
import Header from "@/layouts/header";

const Layouts = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layouts;
