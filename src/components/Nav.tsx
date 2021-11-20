import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../API/cartContext";

const Nav = () => {
  const { state } = useCart();
  return (
    <div id="nav">
      <Link to="/" id="logo">
        <div id="icon"></div>
        <div className="vcenter">Shopping-cart-app</div>
      </Link>
      <div className="navitem">
        <NavLink to="/products" className="vcenter">
          Products
        </NavLink>
      </div>
      <div className="navitem">
        <NavLink to="/cart" className="vcenter">
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
