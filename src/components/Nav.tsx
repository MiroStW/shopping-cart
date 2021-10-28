import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ totalCartQuantity }: { totalCartQuantity: number }) => (
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
        Cart <span>{totalCartQuantity}</span>
      </NavLink>
    </div>
    <div className="navitem">
      <NavLink to="/Z" className="vcenter">
        Z
      </NavLink>
    </div>
  </div>
);

export default Nav;
