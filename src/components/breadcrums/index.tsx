import { useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// icons
import icon_home from "../../assets/icons/Home.svg";
import icon_arrow from "../../assets/icons/breadcrumbs-arrow.svg.svg";

// styles
import s from "./index.module.scss";
//---! bc equal BreadCrumbs

const BreadCrumbs = () => {
  //init
  const router = useRouter();
  let pathGeneration = "/";
  // on load
  const breadCrumbs = useMemo(() => {
    return router.pathname.split("/");
  }, []);
  console.log(router);
  return (
    <>
      <ul className={s.bc}>
        {breadCrumbs &&
          breadCrumbs.map((item: string) => {
            if (item == " ") {
              return (
                <li>
                  <Link href={`/`}>
                    <Image
                      src={icon_home}
                      width={15}
                      height={15}
                      alt="image_breadcrumbs"
                    />
                  </Link>
                </li>
              );
            } else {
              return (
                <li>
                  <div className={s.bc__icon}>
                    <Image
                      src={icon_arrow}
                      width={10}
                      height={10}
                      alt="arrow_breadcrumbs"
                    />
                  </div>
                  <Link href={`/wishlist`}>Wishlist</Link>
                </li>
              );
            }
          })}
        <li>
          <Link href={`/`}>
            <Image
              src={icon_home}
              width={15}
              height={15}
              alt="image_breadcrumbs"
            />
          </Link>
        </li>
        <li>
          <div className={s.bc__icon}>
            <Image
              src={icon_arrow}
              width={10}
              height={10}
              alt="arrow_breadcrumbs"
            />
          </div>
          <Link href={`/wishlist`}>Wishlist</Link>
        </li>
      </ul>
    </>
  );
};

export default BreadCrumbs;
