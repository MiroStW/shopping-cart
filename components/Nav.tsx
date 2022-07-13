import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "../api/cartContext";
import style from "../styles/nav.module.css";

const Nav = () => {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <div id={style.nav}>
      <Link href="/" id={style.logo}>
        <div id={style.icon}>&lt;shopping-cart-app&gt;</div>
      </Link>

      <div className={style.navitem}>
        <Link href="/products">
          <div>Products</div>
        </Link>
      </div>
      <div className={style.navitem}>
        <Link href="/cart">
          <a>
            Cart
            <span>
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
