import Link from "next/link";
import React from "react";
import { useCart } from "../api/cartContext";
import style from "../styles/nav.module.css";

const Nav = () => {
  const { state } = useCart();
  return (
    <div id={style.nav}>
      <Link href="/" id={style.logo}>
        <div id={style.icon}>&lt;shopping-cart-app&gt;</div>
      </Link>
      {/* <Link href="/" id={style.logo}>
        <div className={style.vcenter}></div>
      </Link> */}
      <div className={style.navitem}>
        <Link href={"/products"} className={style.vcenter}>
          Products
        </Link>
      </div>
      <div className={style.navitem}>
        <Link href="/cart" className={style.vcenter}>
          <div>
            Cart
            <span>
              {state.cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
