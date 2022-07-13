import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "../api/cartContext";
import style from "../styles/nav.module.css";

const Nav = () => {
  const {
    context: {
      state: { cartItems },
    },
    isLoading,
  } = useCart();

  return (
    <div id={style.nav}>
      <Link href="/" id={style.logo} passHref>
        <a id={style.icon}>&lt;shopping-cart-app&gt;</a>
      </Link>

      <div className={style.navitem}>
        <Link href="/products" passHref>
          <a>Products</a>
        </Link>
      </div>
      <div className={style.navitem}>
        <Link href="/cart" passHref>
          <a>
            Cart
            {!isLoading && (
              <span>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
