import React from "react";
import s from "./index.module.scss";
// components
import BreadCrumbs from "@/components/breadcrums";

const WishList = () => {
  return (
    <>
      <main className={`${s.wishlist}, conteiner`}>
        <div className={s.wishlist__breadcrumbs}>
          <BreadCrumbs />
        </div>
      </main>
    </>
  );
};

export default WishList;
