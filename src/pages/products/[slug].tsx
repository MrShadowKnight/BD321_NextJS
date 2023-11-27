import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// styles
import s from "./single.module.scss";
// module
import { Products } from "@/modules/products";

const SingleProduct = () => {
  //init
  const prod = new Products();
  //states
  const [product, setProduct] = useState<any>();
  // router
  const router = useRouter();
  const { slug, id } = router.query;

  // load
  // useEffect(() => {
  //   slug &&
  //     prod.getData(`/posts/${id}`).then((data) => {
  //       setProduct(data);
  //     });
  // }, [slug]);

  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.body}</p>
    </div>
  );
};

//SSR
export async function getServerSideProps() {
  const prod = new Products();
  const id = 1;
  const data = await prod.getData(`/posts/${id}`);
  console.log(data);
  return { props: { prods: "text" } };
}

export default SingleProduct;
