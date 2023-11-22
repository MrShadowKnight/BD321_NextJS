import React from "react";
import s from "./index.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/wishlist">Wish List</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
