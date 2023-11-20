import React from "react";
import Link from "next/link";
import s from "./index.module.scss";
// interfaces
import { Product } from "@/interfaces";
// redux
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/features/cart";

interface Props {
  data: Product;
}

const Card = ({ data }: Props) => {
  const { title, price, description, id } = data;
  // init
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{price}</div>
        <Link href={`/products/${title}?id=${id}`}>Детальніше</Link>
        <div
<<<<<<< HEAD
          onClick={() => dispatch(addItemToCart(id))}
          className={s.card__btn}
        >
          Додати у корзину
=======
          onClick={() => {
            dispatch(addItemToCart(id));
          }}
          className={s.card__btn}
        >
          Додати в корзину
>>>>>>> c75980f1e1539cb3f30c36142554364a36d4d214
        </div>
      </div>
    </>
  );
};

export default Card;
