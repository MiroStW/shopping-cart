import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../api/cartContext";
import style from "../assets/nav.css";

const Nav = () => {
  const { state } = useCart();
  return (
    <div id={style.nav}>
      <Link to="/" id={style.logo}>
        <div id={style.icon}></div>
        <div className={style.vcenter}>Shopping-cart-app</div>
      </Link>
      <div className={style.navitem}>
        <NavLink to="/products" className={style.vcenter}>
          Products
        </NavLink>
      </div>
      <div className={style.navitem}>
        <NavLink to="/cart" className={style.vcenter}>
          Cart{" "}
          <span>
            {state.cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
