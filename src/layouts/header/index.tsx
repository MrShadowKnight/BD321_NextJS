import React from "react";
import s from "./header.module.css";
import Link from "next/link";
// redux
import { useSelector } from "react-redux";

const Header = () => {
  const COUNTER = useSelector((state: any) => state.counter.value);
<<<<<<< HEAD
  const CARD_ITEMS = useSelector((state: any) => state.cart.item);
  return (
    <>
      <header className={s.header}>Header</header>
      <p>{CARD_ITEMS.length}</p>
=======
  const CART_ITEMS = useSelector((state: any) => state.cart.items);
  return (
    <>
      <header className={s.header}>Header</header>
      <p>{CART_ITEMS.length}</p>
>>>>>>> c75980f1e1539cb3f30c36142554364a36d4d214
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/products`}>Products</Link>
        </li>
        <li>
          <Link href={`/news`}>News</Link>
        </li>
        <li>
          <Link href={`/redux`}>Redux</Link>
        </li>
        <li></li>
      </ul>
    </>
  );
};

export default Header;
